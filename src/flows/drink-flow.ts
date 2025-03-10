import type { Drink } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { DrinkRepository } from '@/repositories/drink.repository.js'
import { orderMenu } from '@/templates/order-menu.js'
import {
  createResponse,
  createResponseWithList,
  formatCurrency,
  isValidQuantity,
} from '@/utils/@index.js'

import { LoggerProvider } from '@/providers/@index.js'
import type { FlowActions, FlowHandler, FlowHandlerProps } from '@/types/index.js'

@injectable()
export class DrinkFlow implements FlowHandler {
  constructor(
    @inject(StateManager) private flowStateManager: StateManager,
    @inject(DrinkRepository) private drinkRepository: DrinkRepository,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  handle({state, phone, message}: FlowHandlerProps) {
    this.logger.info('🍹 Drink Flow', { phone, message })

    const actions: Partial<FlowActions<FlowStep>> = {
      [FlowStep.DRINK]: () => this.handleDrinkList(phone, message),
      [FlowStep.DRINK_TYPE]: () => this.handleDrinkType(phone, message),
      [FlowStep.DRINK_QUANTITY]: () => this.handleDrinkQuantity(phone, message),
    }

    return actions[state.step]?.() || this.handleDefaultAction()
  }

  // ###
  private async handleDrinkList(phone: string, message: string) {
    const drinks = await this.drinkRepository.getAllDrinks()

    if (!drinks?.length) {
      this.flowStateManager.resetState(phone)
      return createResponse('❌ Desculpe, não encontramos bebidas disponíveis no momento.')
    }

    this.flowStateManager.updateStep(phone, FlowStep.DRINK_TYPE)

    const title = '🍹 *ESCOLHA SUA BEBIDA*'
    const description = '\n> Por favor, aperte no botão abaixo para escolher a sua bebida.'

    return createResponse(title, description, ...this.buildDrinkList(drinks))
  }

  private async handleDrinkType(phone: string, message: string) {
    const drinks = await this.drinkRepository.getAllDrinks()
    const selectedIndex = Number.parseInt(message, 10) - 1

    if (Number.isNaN(selectedIndex) || !drinks?.[selectedIndex]) {
      const title = '❌ *OPÇÃO INVÁLIDA!*'
      const description = 'Selecione uma opção válida.'

      return createResponseWithList(title, description, ...this.buildDrinkList(drinks))
    }

    const selectedDrink = drinks[selectedIndex]

    this.flowStateManager.updateStep(phone, FlowStep.DRINK_QUANTITY)
    this.flowStateManager.updateState(phone, 'drink', { selectedDrink })

    return createResponse('🔢 Digite a quantidade desejada (1-5):')
  }

  private handleDrinkQuantity(phone: string, message: string) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return createResponse('❌ *QUANTIDADE INVÁLIDA!*', 'Por favor, digite um número entre 1 e 5.')
    }

    this.flowStateManager.updateStep(phone, FlowStep.ORDER)

    return createResponse('✅ Bebida adicionada ao carrinho com sucesso!\n', ...orderMenu)
  }

  private handleDefaultAction() {
    return createResponse('❌ Ocorreu um erro no fluxo da conversa. Por favor, tente novamente.')
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
