import { inject, injectable } from 'tsyringe'

import { FLOWS, ORDER_OPTIONS } from '@/config/enums.js'
import { orderMenu } from '@/templates/menus.js'

import { BaseFlow } from '../base.flow.js'
import { CheckoutStartFlow } from '../checkout/start.flow.js'
import { DrinkStartFlow } from '../drink/start.flow.js'
import { PizzaStartFlow } from '../pizza/start.flow.js'

import type { FlowParams, OrderActionMap } from '@/types/flows.js'

@injectable()
export class OrderFlow extends BaseFlow {
  constructor(
    @inject(DrinkStartFlow) private readonly drinkStartFlow: DrinkStartFlow,
    @inject(PizzaStartFlow) private readonly pizzaStartFlow: PizzaStartFlow,
    @inject(CheckoutStartFlow) private readonly checkoutStartFlow: CheckoutStartFlow,
  ) {
    super()
  }

  //#
  public handle({ phone, message }: FlowParams) {
    const actionMap: OrderActionMap = {
      [ORDER_OPTIONS.ONE_PIZZA]: () => this.handlePizzaMenu(phone, message),
      [ORDER_OPTIONS.TWO_PIZZA]: () => this.handlePizzaMenu(phone, message),
      [ORDER_OPTIONS.DRINK]: () => this.handleDrinkMenu(phone, message),
      [ORDER_OPTIONS.CHECKOUT]: () => this.checkoutOrder(phone, message),
      [ORDER_OPTIONS.CANCEL]: () => this.cancelOrder(phone),
    } as const

    const action = actionMap[message as ORDER_OPTIONS]
    return action ? action() : this.handleInvalidOption()
  }

  private handlePizzaMenu(phone: string, message: string) {
    const { context } = this.state.updateFlow(phone, FLOWS.PIZZA_START)
    return this.pizzaStartFlow.handle({ context, phone, message })
  }

  private handleDrinkMenu(phone: string, message: string) {
    const { context } = this.state.updateFlow(phone, FLOWS.DRINK_START)
    return this.drinkStartFlow.handle({ context, phone, message })
  }

  private checkoutOrder(phone: string, message: string) {
    const { context } = this.state.updateFlow(phone, FLOWS.CHECKOUT_START)
    return this.checkoutStartFlow.handle({ context, phone, message })
  }

  private cancelOrder(phone: string) {
    this.state.resetState(phone)
    return this.responseBuilder
      .addBold('❌ PEDIDO CANCELADO')
      .addEmptyLine()
      .addText(
        'Obrigado por utilizar nossos serviços!',
        'Se precisar de algo, estamos aqui para oferecer o melhor atendimento.',
      )
      .addText('👋 Até a próxima...')
      .build()
  }

  //#
  private handleInvalidOption() {
    return this.responseBuilder
      .addBold('❌ OPÇÃO INVÁLIDA')
      .addText('Por favor, escolha uma das opções disponíveis abaixo.')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
