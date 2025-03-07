import type { Drink } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { orderMenu } from '@/messages/order-menu.js'
import { DrinkRepository } from '@/repositories/drink-repository.js'
import { formatCurrency, isValidQuantity, logger } from '@/utils/index.js'

import type { FlowActions, FlowHandler } from '@/types/index.js'
import { MessageType } from '@wppconnect-team/wppconnect'

@injectable()
export class DrinkFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(DrinkRepository) private drinkRepository: DrinkRepository,
  ) { }

  handle(phone: string, message: string) {
    logger.info('🍹 Drink Flow: %o', { phone, message })
    const { step } = this.flowStateManager.getState(phone)

    const actions: FlowActions<FlowStep> = {
      [FlowStep.DRINK]: () => this.handleDrinkList(phone, message),
      [FlowStep.DRINK_TYPE]: () => this.handleDrinkType(phone, message),
      [FlowStep.DRINK_QUANTITY]: () => this.handleDrinkQuantity(phone, message),
    }

    return actions[step]?.() || this.handleDefaultAction()
  }

  // ###
  private async handleDrinkList(phone: string, message: string) {
    const drinks = await this.drinkRepository.getAllDrinks()

    if (!drinks?.length) {
      this.flowStateManager.clearState(phone)
      return ['❌ Desculpe, não encontramos bebidas disponíveis no momento.']
    }

    this.flowStateManager.updateState(phone, { step: FlowStep.DRINK_TYPE })

    const title = '🍹 *ESCOLHA SUA BEBIDA*'
    const description = '\n> Por favor, aperte no botão abaixo para escolher a sua bebida.'

    return [MessageType.LIST, title, description, ...this.buildDrinkList(drinks)]
  }

  private async handleDrinkType(phone: string, message: string) {
    const drinks = await this.drinkRepository.getAllDrinks()
    const selectedIndex = Number.parseInt(message, 10) - 1

    if (Number.isNaN(selectedIndex) || !drinks?.[selectedIndex]) {
      const title = '❌ *OPÇÃO INVÁLIDA!*'
      const description = 'Selecione uma opção válida.'

      return [MessageType.LIST, title, description, ...this.buildDrinkList(drinks)]
    }

    const selectedDrink = drinks[selectedIndex]

    this.flowStateManager.updateState(phone, {
      step: FlowStep.DRINK_QUANTITY,
      data: { selectedDrink },
    })

    return ['🔢 Digite a quantidade desejada (1-5):']
  }

  private handleDrinkQuantity(phone: string, message: string) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return ['❌ *QUANTIDADE INVÁLIDA!*', 'Por favor, digite um número entre 1 e 5.']
    }

    this.flowStateManager.updateState(phone, { step: FlowStep.ORDER })

    return ['✅ Bebida adicionada ao carrinho com sucesso!\n', ...orderMenu]
  }

  private handleDefaultAction() {
    return ['❌ Ocorreu um erro no fluxo da conversa. Por favor, tente novamente.']
  }

  // ###
  private buildDrinkList(drinks: Drink[]) {
    return drinks.map(({ name, description, price }, index) => {
      const drinkPrice = formatCurrency(Number(price))

      const rowId = index + 1
      const title = `${rowId} - ${name} (${drinkPrice})`
      const category = 'bebidas'

      // rowId :: title :: description :: category
      return [rowId, title, description, category].join('::')
    })
  }
}
