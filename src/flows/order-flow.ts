import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { orderMenu } from '@/templates/order-menu.js'

import { DrinkFlow } from './drink-flow.js'
import { PizzaFlow } from './pizza-flow.js'

import { LoggerProvider } from '@/providers/logger.provider.js'
import type { FlowActions, FlowHandler } from '@/types/index.js'
import { createResponse } from '@/utils/create-response.js'

@injectable()
export class OrderFlow implements FlowHandler {
  constructor(
    @inject(StateManager) private flowStateManager: StateManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(DrinkFlow) private drinkFlow: DrinkFlow,
    @inject(PizzaFlow) private pizzaFlow: PizzaFlow,
  ) {}

  handle(phone: string, message: string) {
    this.logger.info('👋 Order Flow: %o', { phone, message })

    const actions: FlowActions = {
      1: () => this.handlePizzaSelection(phone, message),
      2: () => this.handlePizzaSelection(phone, message),
      3: () => this.handleDrinkSelection(phone, message),
      4: () => this.finalizeOrder(phone),
      0: () => this.cancelOrder(phone),
    }

    return actions[message]?.() || this.handleInvalidOption()
  }

  // ###
  private handlePizzaSelection(phone: string, message: string) {
    this.flowStateManager.updateStep(phone, FlowStep.PIZZA_TYPE)
    return this.pizzaFlow.handle(phone, message)
  }

  private handleDrinkSelection(phone: string, message: string) {
    this.flowStateManager.updateStep(phone, FlowStep.DRINK)
    return this.drinkFlow.handle(phone, message)
  }

  private finalizeOrder(phone: string) {
    return createResponse('🍕 Order Flow: finalize order')
  }

  private cancelOrder(phone: string) {
    this.flowStateManager.resetState(phone)
    return createResponse(
      '✨ Obrigado por utilizar nossos serviços!',
      'Se precisar de algo, estamos aqui para ajudar.',
      '\n👋 Até a próxima!',
    )
  }

  // ###
  private handleInvalidOption() {
    return createResponse(
      '❌ *OPÇÃO INVÁLIDA:*\n',
      //
      ...orderMenu,
    )
  }
}
