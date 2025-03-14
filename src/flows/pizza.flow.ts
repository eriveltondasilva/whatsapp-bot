import type { Prisma } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder, TextResponseBuilder } from '@/builder/@index.js'
import { FlowKeys, PizzaStep, PizzaType } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { LoggerProvider } from '@/providers/@index.js'
import { CrustRepository, FlavorRepository } from '@/repositories/@index.js'
import { buildCrustList, buildFlavorList, orderMenu } from '@/templates/@index.js'
import { isValidQuantity } from '@/utils/@index.js'

import type { FlowActions, FlowHandlerProps, FlowState, IFlowHandler } from '@/types/index.js'

@injectable()
export class PizzaFlow implements IFlowHandler {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(FlavorRepository) private flavorRepository: FlavorRepository,
    @inject(CrustRepository) private crustRepository: CrustRepository,
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(TextResponseBuilder) private responseBuilder: TextResponseBuilder,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
  ) {}

  // ###
  handle({ state, phone, message }: FlowHandlerProps) {
    this.logger.debug('📌 Pizza Flow')
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
      return this.responseBuilder
        .addText('❌ Desculpe, não encontramos sabores disponíveis no momento.')
        .build()
    }

    this.stateManager.updateStep(phone, PizzaStep.FLAVOR)
    this.stateManager.updateContextData(phone, { pizzaType })

    return this.listResponseBuilder
      .addTitle(
        `🍕 *ESCOLHA ${pizzaType === PizzaType.FULL ? 'O SABOR' : 'O PRIMEIRO SABOR'} DA SUA PIZZA*`,
      )
      .addDescription('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
      .addList(buildFlavorList(flavors))
      .build()
  }

  private async handlePizzaFlavor(state: FlowState, phone: string, message: string) {
    const { data } = state.context
    const flavors = await this.flavorRepository.getAllFlavors()
    const crusts = await this.crustRepository.getAllCrusts()

    const selectedIndex = Number.parseInt(message, 10) - 1

    if (Number.isNaN(selectedIndex) || !flavors?.[selectedIndex]) {
      return this.listResponseBuilder
        .addTitle('❌ OPÇÃO INVÁLIDA!')
        .addDescription('Por favor, escolha uma opção válida.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    const selectedFlavor = (data.selectedFlavor as Prisma.FlavorCreateInput[]) || []
    selectedFlavor.push(flavors[selectedIndex])

    if (data.pizzaType === PizzaType.HALF && selectedFlavor.length === 1) {
      this.stateManager.updateStep(phone, PizzaStep.FLAVOR)
      this.stateManager.updateContextData(phone, { selectedFlavor })

      return this.listResponseBuilder
        .addTitle('🍕🍕 ESCOLHA O SEGUNDO SABOR DA PIZZA')
        .addDescription('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    this.stateManager.updateStep(phone, PizzaStep.CRUST)
    this.stateManager.updateContextData(phone, { selectedFlavor })

    return this.listResponseBuilder
      .addTitle('🍕 *ESCOLHA A BORDA DA SUA PIZZA*')
      .addDescription('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
      .addList(buildCrustList(crusts))
      .build()
  }

  private async handlePizzaCrust(phone: string, message: string) {
    const crusts = await this.crustRepository.getAllCrusts()
    const selectedIndex = Number.parseInt(message, 10) - 1

    if (Number.isNaN(selectedIndex) || !crusts?.[selectedIndex]) {
      return this.listResponseBuilder
        .addTitle('❌ BORDA INVÁLIDA!')
        .addDescription('Por favor, escolha uma opção válida.')
        .addList(buildCrustList(crusts))
        .build()
    }

    const selectedCrust = crusts[selectedIndex]

    this.stateManager.updateStep(phone, PizzaStep.QUANTITY)
    this.stateManager.updateContextData(phone, { selectedCrust })

    return this.responseBuilder.addText('🔢 Digite a quantidade desejada (1-5):').build()
  }

  private handlePizzaQuantity(phone: string, message: string) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return this.responseBuilder
        .addTitle('❌ QUANTIDADE INVÁLIDA!')
        .addText('Por favor, digite um número entre 1 e 5.')
        .build()
    }

    this.stateManager.updateStep(phone, PizzaStep.NOTES)
    this.stateManager.updateContextData(phone, { quantity })

    return this.responseBuilder
      .addText('Deseja adicionar alguma observação?')
      .addText('> Exemplo: retirar cebola, mais queijo, etc.')
      .addLineBreak()
      .addText('0 - Não desejo adicionar observações')
      .build()
  }

  private handlePizzaNotes(phone: string, message: string) {
    const notes = message === '0' ? undefined : message

    this.stateManager.updateStep(phone, FlowKeys.ORDER)
    this.stateManager.updateContextData(phone, { notes })

    return this.responseBuilder
      .addText('✅ Pizza adicionada ao carrinho com sucesso!')
      .addLineBreak()
      .addMenu(orderMenu)
      .build()
  }
}
