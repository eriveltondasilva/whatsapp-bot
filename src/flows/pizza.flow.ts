import type { Flavor } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { FlowKeys, PizzaStep, PizzaType } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { LoggerProvider } from '@/providers/@index.js'
import { CrustRepository, FlavorRepository } from '@/repositories/@index.js'
import { buildCrustList, buildFlavorList, orderMenu } from '@/templates/@index.js'
import { createResponse, createResponseWithList, isValidQuantity } from '@/utils/@index.js'

import type { FlowActions, FlowHandler, FlowHandlerProps, FlowState } from '@/types/index.js'

@injectable()
export class PizzaFlow implements FlowHandler {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(FlavorRepository) private flavorRepository: FlavorRepository,
    @inject(CrustRepository) private crustRepository: CrustRepository,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  // ###
  handle({ state, phone, message }: FlowHandlerProps) {
    this.logger.info('📌 Pizza Flow')
    const { step } = state.context

    const actions: FlowActions<PizzaStep> = {
      [PizzaStep.TYPE]: () => this.handlePizzaType(phone, message),
      [PizzaStep.FLAVOR]: () => this.handlePizzaFlavor(state, phone, message),
      [PizzaStep.CRUST]: () => this.handlePizzaCrust(phone, message),
      [PizzaStep.QUANTITY]: () => this.handlePizzaQuantity(phone, message),
      [PizzaStep.NOTES]: () => this.handlePizzaNotes(phone, message),
    }

    return actions[step as PizzaStep]()
  }

  // ###
  private async handlePizzaType(phone: string, message: string) {
    const pizzaType = message === '1' ? PizzaType.FULL : PizzaType.HALF
    const flavors = await this.flavorRepository.getAllFlavors()

    if (!flavors?.length) {
      this.stateManager.resetState(phone)
      return createResponse('❌ Desculpe, não encontramos sabores disponíveis no momento.')
    }

    this.stateManager.updateStep(phone, PizzaStep.FLAVOR)
    this.stateManager.updateContextData(phone, { pizzaType })

    const title = `🍕 *ESCOLHA ${pizzaType === PizzaType.FULL ? 'O SABOR' : 'O PRIMEIRO SABOR'} DA SUA PIZZA*`
    const description = '\n> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.'

    return createResponseWithList(title, description, ...buildFlavorList(flavors))
  }

  private async handlePizzaFlavor(state: FlowState, phone: string, message: string) {
    const { data } = state.context
    const flavors = await this.flavorRepository.getAllFlavors()
    const crusts = await this.crustRepository.getAllCrusts()

    const selectedIndex = Number.parseInt(message, 10) - 1

    if (Number.isNaN(selectedIndex) || !flavors?.[selectedIndex]) {
      const title = '❌ *OPÇÃO INVÁLIDA!*'
      const description = 'Por favor, escolha uma opção válida.'

      return createResponseWithList(title, description, ...buildFlavorList(flavors))
    }

    const selectedFlavor: Flavor[] = (data.selectedFlavor as Flavor[]) || []
    selectedFlavor.push(flavors[selectedIndex])

    if (data.pizzaType === PizzaType.HALF && selectedFlavor.length === 1) {
      this.stateManager.updateStep(phone, PizzaStep.FLAVOR)
      this.stateManager.updateContextData(phone, { selectedFlavor })

      const title = '🍕🍕 *ESCOLHA O SEGUNDO SABOR DA PIZZA*'
      const description =
        '\n> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.'

      return createResponseWithList(title, description, ...buildFlavorList(flavors))
    }

    this.stateManager.updateStep(phone, PizzaStep.CRUST)
    this.stateManager.updateContextData(phone, { selectedFlavor })

    const title = '⭕🍕 *ESCOLHA A BORDA DA SUA PIZZA*'
    const description = '\n> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.'

    return createResponseWithList(title, description, ...buildCrustList(crusts))
  }

  private async handlePizzaCrust(phone: string, message: string) {
    const crusts = await this.crustRepository.getAllCrusts()
    const selectedIndex = Number.parseInt(message, 10) - 1

    if (Number.isNaN(selectedIndex) || !crusts?.[selectedIndex]) {
      const title = '❌ *BORDA INVÁLIDA!*'
      const description = 'Por favor, escolha uma opção válida.'
      return createResponseWithList(title, description, ...buildCrustList(crusts))
    }

    const selectedCrust = crusts[selectedIndex]

    this.stateManager.updateStep(phone, PizzaStep.QUANTITY)
    this.stateManager.updateContextData(phone, { selectedCrust })

    return createResponse('🔢 Digite a quantidade desejada (1-5):')
  }

  private handlePizzaQuantity(phone: string, message: string) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return createResponse('❌ *QUANTIDADE INVÁLIDA!*', 'Por favor, digite um número entre 1 e 5.')
    }

    this.stateManager.updateStep(phone, PizzaStep.NOTES)
    this.stateManager.updateContextData(phone, { quantity })

    return createResponse(
      '✍️ Deseja adicionar alguma observação?',
      '> Exemplo: retirar cebola, mais queijo, etc.\n',
      '0 - Não desejo adicionar observações',
    )
  }

  private handlePizzaNotes(phone: string, message: string) {
    const notes = message === '0' ? undefined : message

    this.stateManager.updateStep(phone, FlowKeys.ORDER)
    this.stateManager.updateContextData(phone, { notes })

    return createResponse('✅ Pizza adicionada ao carrinho com sucesso!\n', ...orderMenu)
  }
}
