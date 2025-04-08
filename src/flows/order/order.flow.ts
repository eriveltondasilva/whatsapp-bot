import { inject, injectable } from 'tsyringe'

import { Flows, OrderOptions } from '@/config/enums.js'
import { orderMenu } from '@/templates/menus.js'

import { BaseFlow } from '../base.flow.js'
import { DrinkMenuFlow } from '../drink/menu.flow.js'
import { PizzaMenuFlow } from '../pizza/menu.flow.js'

import type { FlowParams, OrderActionMap } from '@/types/flows.js'

@injectable()
export class OrderFlow extends BaseFlow {
  constructor(
    @inject(DrinkMenuFlow) private readonly drinkMenuFlow: DrinkMenuFlow,
    @inject(PizzaMenuFlow) private readonly pizzaMenuFlow: PizzaMenuFlow,
  ) {
    super()
  }

  //#
  public handle({ phone, message }: FlowParams) {
    console.log('estou no OrderFlow')
    const actionMap: OrderActionMap = {
      [OrderOptions.ONE_PIZZA]: () => this.handlePizzaMenu(phone, message),
      [OrderOptions.TWO_PIZZA]: () => this.handlePizzaMenu(phone, message),
      [OrderOptions.DRINK]: () => this.handleDrinkMenu(phone, message),
      [OrderOptions.COMPLETE]: () => this.finalizeOrder(phone),
      [OrderOptions.CANCEL]: () => this.cancelOrder(phone),
    } as const

    const action = actionMap[message as OrderOptions]
    return action ? action() : this.handleInvalidOption()
  }

  private handlePizzaMenu(phone: string, message: string) {
    console.log('estou no handlePizzaMenu')
    const { context } = this.state.updateFlow(phone, Flows.PIZZA_MENU)
    return this.pizzaMenuFlow.handle({ context, phone, message })
  }

  private handleDrinkMenu(phone: string, message: string) {
    const { context } = this.state.updateFlow(phone, Flows.DRINK_MENU)
    return this.drinkMenuFlow.handle({ context, phone, message })
  }

  private finalizeOrder(phone: string) {
    this.state.resetState(phone)
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

  //#
  private handleInvalidOption() {
    return this.responseBuilder
      .addBold('❌ OPÇÃO INVÁLIDA')
      .addText('Por favor, escolha uma das opções disponíveis.')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
