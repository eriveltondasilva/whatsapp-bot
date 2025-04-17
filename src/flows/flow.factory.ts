import { container, injectable } from 'tsyringe'

import { FLOWS } from '@/config/enums.js'

import { MenuFlow } from './menu/menu.flow.js'
import { OrderFlow } from './order/order.flow.js'
import { WelcomeFlow } from './welcome/welcome.flow.js'

import {
  RegistrationAddressFlow,
  RegistrationNameFlow,
  RegistrationStartFlow,
} from './registration/@index.js'

import {
  PizzaCrustFlow,
  PizzaFinishFlow,
  PizzaFlavorFlow,
  PizzaNoteFlow,
  PizzaQuantityFlow,
  PizzaStartFlow,
} from './pizza/@index.js'

import {
  DrinkFinishFlow,
  DrinkQuantityFlow,
  DrinkSelectionFlow,
  DrinkStartFlow,
} from './drink/@index.js'

import { CheckoutFinishFlow, CheckoutPaymentFlow, CheckoutStartFlow } from './checkout/@index.js'

import type { BaseFlow } from './base.flow.js'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type FlowConstructor = new (...args: any[]) => BaseFlow

@injectable()
export class FlowFactory {
  private readonly flowMap: Map<FLOWS, FlowConstructor>

  constructor() {
    this.flowMap = new Map<FLOWS, FlowConstructor>([
      //* Registration flows
      [FLOWS.REGISTRATION_START, RegistrationStartFlow],
      [FLOWS.REGISTRATION_NAME, RegistrationNameFlow],
      [FLOWS.REGISTRATION_ADDRESS, RegistrationAddressFlow],
      //* Core flows
      [FLOWS.WELCOME, WelcomeFlow],
      [FLOWS.MENU, MenuFlow],
      [FLOWS.ORDER, OrderFlow],
      //* Pizza flows
      [FLOWS.PIZZA_START, PizzaStartFlow],
      [FLOWS.PIZZA_FLAVOR, PizzaFlavorFlow],
      [FLOWS.PIZZA_QUANTITY, PizzaQuantityFlow],
      [FLOWS.PIZZA_CRUST, PizzaCrustFlow],
      [FLOWS.PIZZA_NOTE, PizzaNoteFlow],
      [FLOWS.PIZZA_FINISH, PizzaFinishFlow],
      //* Drink flows
      [FLOWS.DRINK_START, DrinkStartFlow],
      [FLOWS.DRINK_SELECTION, DrinkSelectionFlow],
      [FLOWS.DRINK_QUANTITY, DrinkQuantityFlow],
      [FLOWS.DRINK_FINISH, DrinkFinishFlow],
      //* Payment flows
      [FLOWS.CHECKOUT_START, CheckoutStartFlow],
      [FLOWS.CHECKOUT_PAYMENT, CheckoutPaymentFlow],
      [FLOWS.CHECKOUT_FINISH, CheckoutFinishFlow],
      //* Other flows
    ])
  }

  public create(flowName: FLOWS): BaseFlow {
    const FlowClass = this.flowMap.get(flowName)
    if (!FlowClass) throw new Error('Invalid flow')

    return container.resolve<BaseFlow>(FlowClass)
  }
}
