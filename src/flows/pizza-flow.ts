import type { Crust, Flavor } from '@prisma/client'
import { MessageType } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { FlowStep, PizzaType } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/index.js'
import { orderMenu } from '@/messages/order-menu.js'
import { CrustRepository, FlavorRepository } from '@/repositories/index.js'
import { formatCurrency, isValidQuantity, logger } from '@/utils/index.js'

import type { FlowActions, FlowHandler } from '@/types.js'

@injectable()
export class PizzaFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(FlavorRepository) private flavorRepository: FlavorRepository,
    @inject(CrustRepository) private crustRepository: CrustRepository,
  ) {}

  handle(phone: string, msg: string) {
    logger.info('🍕 Pizza Flow: %o', { phone, msg })
    const { step } = this.flowStateManager.getState(phone)

    const actions: FlowActions<FlowStep> = {
      [FlowStep.PIZZA_TYPE]: () => this.handlePizzaType(phone, msg),
      [FlowStep.PIZZA_FLAVOR]: () => this.handlePizzaFlavor(phone, msg),
      [FlowStep.PIZZA_CRUST]: () => this.handlePizzaCrust(phone, msg),
      [FlowStep.PIZZA_QUANTITY]: () => this.handlePizzaQuantity(phone, msg),
      [FlowStep.PIZZA_NOTES]: () => this.handlePizzaNotes(phone, msg),
    }

    return actions[step as FlowStep]?.() || this.handleInvalidOption()
  }

  // ###
  private async handlePizzaType(phone: string, msg: string) {
    const pizzaType = msg === '1' ? PizzaType.FULL : PizzaType.HALF
    const flavors = await this.flavorRepository.getAllFlavors()

    if (!flavors?.length) {
      this.flowStateManager.clearState(phone)
      return ['❌ Desculpe, não encontramos sabores disponíveis no momento.']
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.PIZZA_FLAVOR,
      data: { pizzaType },
    })

    const title = `🍕 *ESCOLHA ${pizzaType === PizzaType.FULL ? 'O SABOR' : 'O PRIMEIRO SABOR'} DA SUA PIZZA*`
    const description = '\n> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.'

    return [MessageType.LIST, title, description, ...this.buildFlavorList(flavors)]
  }

  private async handlePizzaFlavor(phone: string, msg: string) {
    const { data } = this.flowStateManager.getState(phone)
    const flavors = await this.flavorRepository.getAllFlavors()
    const crusts = await this.crustRepository.getAllCrusts()

    const selectedIndex = Number.parseInt(msg, 10) - 1

    if (Number.isNaN(selectedIndex) || !flavors?.[selectedIndex]) {
      const title = '❌ *OPÇÃO INVÁLIDA!*'
      const description = 'Por favor, escolha uma opção válida.'

      return [MessageType.LIST, title, description, ...this.buildFlavorList(flavors)]
    }

    const selectedFlavors = [...(data?.selectedFlavors || []), flavors[selectedIndex]]

    if (data?.pizzaType === PizzaType.HALF && selectedFlavors.length === 1) {
      this.flowStateManager.updateState(phone, {
        step: FlowStep.PIZZA_FLAVOR,
        data: { selectedFlavors },
      })

      const title = '🍕🍕 *ESCOLHA O SEGUNDO SABOR DA PIZZA*'
      const description =
        '\n> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.'

      return [MessageType.LIST, title, description, ...this.buildFlavorList(flavors)]
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.PIZZA_CRUST,
      data: { selectedFlavors },
    })

    const title = '⭕🍕 *ESCOLHA A BORDA DA SUA PIZZA*'
    const description = '\n> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.'

    return [MessageType.LIST, title, description, ...this.buildCrustList(crusts)]
  }

  private async handlePizzaCrust(phoneNumber: string, msg: string) {
    const crusts = await this.crustRepository.getAllCrusts()
    const selectedIndex = Number.parseInt(msg, 10) - 1

    if (Number.isNaN(selectedIndex) || !crusts?.[selectedIndex]) {
      const title = '❌ *BORDA INVÁLIDA!*'
      const description = 'Por favor, escolha uma opção válida.'
      return [MessageType.LIST, title, description, ...this.buildCrustList(crusts)]
    }

    const selectedCrust = crusts[selectedIndex]

    this.flowStateManager.updateState(phoneNumber, {
      step: FlowStep.PIZZA_QUANTITY,
      data: { selectedCrust },
    })

    return ['🔢 Digite a quantidade desejada (1-5):']
  }

  private handlePizzaQuantity(phone: string, msg: string) {
    const quantity = Number.parseInt(msg, 10)

    if (!isValidQuantity(quantity)) {
      return ['❌ *QUANTIDADE INVÁLIDA!*', 'Por favor, digite um número entre 1 e 5.']
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.PIZZA_NOTES,
      data: { quantity },
    })

    return [
      '✍️ Deseja adicionar alguma observação?',
      '> Exemplo: retirar cebola, mais queijo, etc.\n',
      '0 - Não desejo adicionar observações',
    ]
  }

  private handlePizzaNotes(phone: string, msg: string) {
    const notes = msg === '0' ? undefined : msg

    this.flowStateManager.updateState(phone, {
      step: FlowStep.ORDER,
      data: { notes },
    })

    return ['✅ Pizza adicionada ao carrinho com sucesso!\n', ...orderMenu]
  }

  private handleInvalidOption() {
    return ['❌ Ocorreu um erro no fluxo.', 'Por favor, tente novamente.']
  }

  // ###
  private buildFlavorList(flavors: Flavor[]): string[] {
    return flavors.map(({ name, description, price, category }, index) => {
      const flavorPrice = formatCurrency(Number(price))

      const rowId = index + 1
      const title = `${rowId} - ${name} (${flavorPrice})`

      // rowId :: title :: description :: category
      return [rowId, title, description, category].join('::')
    })
  }

  private buildCrustList(crusts: Crust[]): string[] {
    return crusts.map(({ name, price }, index) => {
      const crustPrice = Number(price) === 0 ? 'grátis' : formatCurrency(Number(price))

      const rowId = index + 1
      const title = `${rowId} - ${name} (${crustPrice})`
      const description = ''
      const category = 'bordas'

      // rowId :: title :: description :: category
      return [rowId, title, description, category].join('::')
    })
  }
}
