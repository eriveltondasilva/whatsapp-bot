import { inject, injectable } from 'tsyringe'

import { DrinkStep, OrderOption, PizzaStep } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { orderMenu } from '@/templates/order-menu.js'
import { createResponse } from '@/utils/create-response.js'

import { DrinkFlow } from './drink.flow.js'
import { PizzaFlow } from './pizza.flow.js'

import type { FlowActions, FlowHandler, FlowHandlerProps, FlowState } from '@/types/index.js'

@injectable()
export class OrderFlow implements FlowHandler {
  constructor(
    @inject(DrinkFlow) private drinkFlow: DrinkFlow,
    @inject(PizzaFlow) private pizzaFlow: PizzaFlow,
    @inject(StateManager) private stateManager: StateManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  // ###
  handle({ phone, message }: FlowHandlerProps) {
    this.logger.info('📌 Order Flow')

    const actions: FlowActions<OrderOption> = {
      [OrderOption.FULL_PIZZA]: () => this.handlePizzaSelection(phone, message),
      [OrderOption.HALF_PIZZA]: () => this.handlePizzaSelection(phone, message),
      [OrderOption.DRINK]: () => this.handleDrinkSelection(phone, message),
      [OrderOption.COMPLETE]: () => this.finalizeOrder(phone),
      [OrderOption.CANCEL]: () => this.cancelOrder(phone),
    }

    return actions[message as OrderOption]() || this.handleInvalidOption()
  }

  // ###
  private handlePizzaSelection(phone: string, message: string) {
    const state = this.stateManager.updateStep(phone, PizzaStep.TYPE)
    return this.pizzaFlow.handle({ state, phone, message })
  }

  private handleDrinkSelection(phone: string, message: string) {
    const state = this.stateManager.updateStep(phone, DrinkStep.MENU)
    return this.drinkFlow.handle({ state, phone, message })
  }

  private finalizeOrder(phone: string) {
    return createResponse('🍕 Order Flow: finalize order')
  }

  private cancelOrder(phone: string) {
    this.stateManager.resetState(phone)
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
