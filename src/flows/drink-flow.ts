import type { Drink } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { orderMenu } from '@/messages/order-menu.js'
import { DrinkRepository } from '@/repositories/drink-repository.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { LoggerService } from '@/utils/logger.js'

import type { FlowActions, FlowHandler } from '@/types.js'

const MIN_QUANTITY = 1
const MAX_QUANTITY = 5

@injectable()
export class DrinkFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(DrinkRepository) private drinkRepo: DrinkRepository,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  handle(phone: string, message: string) {
    this.logger.info('🍹 Drink Flow: %o', { phone, message })
    const { step } = this.flowStateManager.getState(phone)

    const actions: FlowActions = {
      [FlowStep.DRINK]: () => this.handleDrinkList(phone, message),
      [FlowStep.DRINK_TYPE]: () => this.handleDrinkType(phone, message),
      [FlowStep.DRINK_QUANTITY]: () => this.handleDrinkQuantity(phone, message),
    }

    return actions[step]?.() || this.handleDefaultAction()
  }

  // ###
  private async handleDrinkList(phone: string, message: string) {
    const drinks = await this.drinkRepo.getAllDrinks()

    if (!drinks?.length) {
      this.flowStateManager.clearState(phone)
      return ['❌ Desculpe, não encontramos bebidas disponíveis no momento.']
    }

    this.flowStateManager.updateState(phone, { step: FlowStep.DRINK_TYPE })

    return [
      '🍹 *ESCOLHA SUA BEBIDA:*\n',
      ...this.buildDrinkList(drinks),
      '\n✍️ Digite o número da opção desejada:',
    ]
  }

  private async handleDrinkType(phone: string, message: string) {
    const drinks = await this.drinkRepo.getAllDrinks()
    const selectedIndex = Number.parseInt(message) - 1

    if (Number.isNaN(selectedIndex) || !drinks?.[selectedIndex]) {
      return [
        '❌ *OPÇÃO INVÁLIDA!*',
        'Por favor, digite um número válido da opção desejada.',
        '\n✍️ Digite o número da opção desejada:',
      ]
    }

    const selectedDrink = drinks[selectedIndex]

    this.flowStateManager.updateState(phone, {
      step: FlowStep.DRINK_QUANTITY,
      data: { selectedDrink },
    })

    return ['🔢 Digite a quantidade desejada (1-5):']
  }

  private handleDrinkQuantity(phone: string, message: string) {
    const quantity = Number.parseInt(message)

    if (Number.isNaN(quantity) || quantity < MIN_QUANTITY || quantity > MAX_QUANTITY) {
      return [
        '❌ *QUANTIDADE INVÁLIDA!*',
        `Por favor, digite um número entre ${MIN_QUANTITY} e ${MAX_QUANTITY}.`,
      ]
    }

    this.flowStateManager.updateState(phone, { step: FlowStep.ORDER })

    return ['✅ Bebida adicionada ao carrinho com sucesso!\n', ...orderMenu]
  }

  // ###
  private handleDefaultAction() {
    return ['❌ Ocorreu um erro no fluxo da conversa. Por favor, tente novamente.']
  }

  // ###
  private buildDrinkList(drinks: Drink[]) {
    return drinks.map((drink, index) => {
      return `${index + 1} - ${drink.name} (${formatCurrency(Number(drink.price))})`
    })
  }
}
