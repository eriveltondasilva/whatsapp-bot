import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/response/text.builder.js'
import { DrinkSteps, OrderOptions, PizzaSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { orderMenu } from '@/templates/menus.js'

import { DrinkFlow } from './drink.flow.js'
import { PizzaFlow } from './pizza.flow.js'

import type { FlowParams, OrderActionMap } from '@/types/flows.js'
import type { Flow } from '@/types/interfaces.js'

@injectable()
export class OrderFlow implements Flow {
  constructor(
    @inject(DrinkFlow) private readonly drinkFlow: DrinkFlow,
    @inject(PizzaFlow) private readonly pizzaFlow: PizzaFlow,
    @inject(TextResponseBuilder) private readonly responseBuilder: TextResponseBuilder,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public handle({ phone, message }: FlowParams) {
    this.logger.info('📌 Order Flow')

    const actionMap: OrderActionMap = {
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
    const { context } = this.state.updateStep(phone, PizzaSteps.MENU)
    return this.pizzaFlow.handle({ context, phone, message })
  }

  private handleDrinkSelection(phone: string, message: string) {
    const { context } = this.state.updateStep(phone, DrinkSteps.MENU)
    return this.drinkFlow.handle({ context, phone, message })
  }

  private finalizeOrder(phone: string) {
    return this.responseBuilder.addBold('🍕 Pedido Finalizado').build()
  }

  private cancelOrder(phone: string) {
    this.state.resetState(phone)
    return this.responseBuilder
      .addBold('🍕 PEDIDO CANCELADO')
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
      .addBold('❌ OPÇÃO INVÁLIDA')
      .addText('Por favor, escolha uma das opções disponíveis.')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
