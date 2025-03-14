import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { DrinkStep, OrderOption, PizzaStep } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { orderMenu } from '@/templates/order-menu.js'

import { DrinkFlow } from './drink.flow.js'
import { PizzaFlow } from './pizza.flow.js'

import type { FlowActions, FlowHandlerProps, IFlowHandler } from '@/types/index.js'

@injectable()
export class OrderFlow implements IFlowHandler {
  constructor(
    @inject(DrinkFlow) private drinkFlow: DrinkFlow,
    @inject(PizzaFlow) private pizzaFlow: PizzaFlow,
    @inject(StateManager) private stateManager: StateManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(TextResponseBuilder) private responseBuilder: TextResponseBuilder,
  ) {}

  // ###
  handle({ phone, message }: FlowHandlerProps) {
    this.logger.debug('📌 Order Flow')

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
    return this.responseBuilder.addTitle('🍕 *Pedido Finalizado*').build()
  }

  private cancelOrder(phone: string) {
    this.stateManager.resetState(phone)

    return this.responseBuilder
      .addTitle('🍕 Pedido Cancelado')
      .addLineBreak()
      .addText('✨ Obrigado por utilizar nossos serviços!')
      .addText('Se precisar de algo, estamos aqui para ajudar.')
      .addLineBreak()
      .addText('👋 Até a próxima!')
      .build()
  }

  // ###
  private handleInvalidOption() {
    return this.responseBuilder
      .addTitle('🍕 OPÇÃO INVÁLIDA')
      .addLineBreak()
      .addMenu(orderMenu)
      .build()
  }
}
