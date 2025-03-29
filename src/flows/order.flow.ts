import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { DrinkSteps, OrderOptions, PizzaSteps } from '@/config/enums.js'
import { StateFacade } from '@/managers/state.facade.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { orderMenu } from '@/templates/order-menu.js'

import { DrinkFlow } from './drink.flow.js'
import { PizzaFlow } from './pizza.flow.js'

import type { FlowActions, FlowHandle, IFlowHandler } from '@/types/index.js'

@injectable()
export class OrderFlow implements IFlowHandler {
  constructor(
    @inject(DrinkFlow) private readonly drinkFlow: DrinkFlow,
    @inject(PizzaFlow) private readonly pizzaFlow: PizzaFlow,
    @inject(StateFacade) private readonly stateManager: StateFacade,
    @inject(TextResponseBuilder) private readonly responseBuilder: TextResponseBuilder,
    //
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  //#
  public handle({ phone, message }: FlowHandle) {
    this.logger.info('📌 Order Flow')

    const actionMap: FlowActions<OrderOptions> = {
      [OrderOptions.ONE_PIZZA]: () => this.handlePizzaSelection(phone, message),
      [OrderOptions.TWO_PIZZA]: () => this.handlePizzaSelection(phone, message),
      [OrderOptions.DRINK]: () => this.handleDrinkSelection(phone, message),
      [OrderOptions.COMPLETE]: () => this.finalizeOrder(phone),
      [OrderOptions.CANCEL]: () => this.cancelOrder(phone),
    } as const

    const action = actionMap[message as OrderOptions]
    return action ? action() : this.handleInvalidOption()
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
        '✨ Obrigado por utilizar nossos serviços! Se precisar de algo, estamos aqui para ajudar.',
      )
      .addEmptyLine()
      .addText('👋 Até a próxima...')
      .build()
  }

  private handleInvalidOption() {
    return this.responseBuilder
      .addTitle('❌ OPÇÃO INVÁLIDA')
      .addText('Por favor, escolha uma das opções disponíveis.')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
