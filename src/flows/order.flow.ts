import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { DrinkSteps, OrderOptions, PizzaSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { orderMenu } from '@/templates/order-menu.js'

import { DrinkFlow } from './drink.flow.js'
import { PizzaFlow } from './pizza.flow.js'

import type { FlowActions, FlowHandle, IFlowHandler } from '@/types/index.js'

@injectable()
export class OrderFlow implements IFlowHandler {
  constructor(
    @inject(DrinkFlow) private drinkFlow: DrinkFlow,
    @inject(PizzaFlow) private pizzaFlow: PizzaFlow,
    @inject(StateManager) private stateManager: StateManager,
    @inject(TextResponseBuilder) private responseBuilder: TextResponseBuilder,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public handle({ phone, message }: FlowHandle) {
    this.logger.info('📌 Order Flow')

    const actions: FlowActions<OrderOptions> = {
      [OrderOptions.ONE_PIZZA]: () => this.handlePizzaSelection(phone, message),
      [OrderOptions.TWO_PIZZA]: () => this.handlePizzaSelection(phone, message),
      [OrderOptions.DRINK]: () => this.handleDrinkSelection(phone, message),
      [OrderOptions.COMPLETE]: () => this.finalizeOrder(phone),
      [OrderOptions.CANCEL]: () => this.cancelOrder(phone),
    }

    const sendAction = actions[message as OrderOptions]
    return sendAction ? sendAction() : this.handleInvalidOption()
  }

  //#
  private handlePizzaSelection(phone: string, message: string) {
    const { context } = this.stateManager.updateStep(phone, PizzaSteps.MENU)
    return this.pizzaFlow.handle({ context, phone, message })
  }

  private handleDrinkSelection(phone: string, message: string) {
    const { context } = this.stateManager.updateStep(phone, DrinkSteps.MENU)
    return this.drinkFlow.handle({ context, phone, message })
  }

  private finalizeOrder(phone: string) {
    return this.responseBuilder.addTitle('🍕 Pedido Finalizado').build()
  }

  private cancelOrder(phone: string) {
    this.stateManager.resetState(phone)

    return this.responseBuilder
      .addTitle('🍕 PEDIDO CANCELADO')
      .addText(
        '✨ Obrigado por utilizar nossos serviços!',
        'Se precisar de algo, estamos aqui para ajudar.',
      )
      .addEmptyLine()
      .addText('👋 Até a próxima...')
      .build()
  }

  private handleInvalidOption() {
    return this.responseBuilder
      .addTitle('🍕 OPÇÃO INVÁLIDA')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
