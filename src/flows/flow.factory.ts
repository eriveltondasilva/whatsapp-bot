import { container, injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'

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

import { PaymentConfirmFlow } from './payment/confirm.flow.js'
import { PaymentMenuFlow } from './payment/menu.flow.js'
import { PaymentMethodFlow } from './payment/method.flow.js'

import type { BaseFlow } from './base.flow.js'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type FlowConstructor = new (...args: any[]) => BaseFlow

@injectable()
export class FlowFactory {
  private readonly flowMap: Map<Flows, FlowConstructor>

  constructor() {
    this.flowMap = new Map<Flows, FlowConstructor>([
      //* Registration flows
      [Flows.REGISTRATION_START, RegistrationStartFlow],
      [Flows.REGISTRATION_NAME, RegistrationNameFlow],
      [Flows.REGISTRATION_ADDRESS, RegistrationAddressFlow],
      //* Core flows
      [Flows.WELCOME, WelcomeFlow],
      [Flows.MENU, MenuFlow],
      [Flows.ORDER, OrderFlow],
      //* Pizza flows
      [Flows.PIZZA_START, PizzaStartFlow],
      [Flows.PIZZA_FLAVOR, PizzaFlavorFlow],
      [Flows.PIZZA_QUANTITY, PizzaQuantityFlow],
      [Flows.PIZZA_CRUST, PizzaCrustFlow],
      [Flows.PIZZA_NOTE, PizzaNoteFlow],
      [Flows.PIZZA_FINISH, PizzaFinishFlow],
      //* Drink flows
      [Flows.DRINK_START, DrinkStartFlow],
      [Flows.DRINK_SELECTION, DrinkSelectionFlow],
      [Flows.DRINK_QUANTITY, DrinkQuantityFlow],
      [Flows.DRINK_FINISH, DrinkFinishFlow],
      //* Payment flows
      [Flows.PAYMENT_MENU, PaymentMenuFlow],
      [Flows.PAYMENT_METHOD, PaymentMethodFlow],
      [Flows.PAYMENT_CONFIRM, PaymentConfirmFlow],
      //* Other flows
    ])
  }

  public create(flowName: Flows): BaseFlow {
    const FlowClass = this.flowMap.get(flowName)
    if (!FlowClass) throw new Error('Invalid flow')

    return container.resolve<BaseFlow>(FlowClass)
  }
}
