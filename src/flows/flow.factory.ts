import { container, injectable } from 'tsyringe'
import type { BaseFlow } from './base.flow.js'

import { Flows } from '@/config/enums.js'

import { RegistrationAddressFlow } from './registration/address.flow.js'
import { RegistrationInitialFlow } from './registration/initial.flow.js'
import { RegistrationNameFlow } from './registration/name.flow.js'

import { MenuFlow } from './menu/menu.flow.js'
import { OrderFlow } from './order/order.flow.js'
import { WelcomeFlow } from './welcome/welcome.flow.js'

import { PizzaConfirmFlow } from './pizza/confirm.flow.js'
import { PizzaCrustFlow } from './pizza/crust.flow.js'
import { PizzaFlavorFlow } from './pizza/flavor.flow.js'
import { PizzaMenuFlow } from './pizza/menu.flow.js'
import { PizzaNoteFlow } from './pizza/note.flow.js'
import { PizzaQuantityFlow } from './pizza/quantity.flow.js'

import { DrinkMenuFlow } from './drink/menu.flow.js'
import { DrinkQuantityFlow } from './drink/quantity.flow.js'
import { DrinkTypeFlow } from './drink/type.flow.js'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type FlowConstructor = new (...args: any[]) => BaseFlow

@injectable()
export class FlowFactory {
  private readonly flowMap: Map<Flows, FlowConstructor>

  constructor() {
    this.flowMap = new Map<Flows, FlowConstructor>([
      // Registration flows
      [Flows.REGISTRATION_INITIAL, RegistrationInitialFlow],
      [Flows.REGISTRATION_NAME, RegistrationNameFlow],
      [Flows.REGISTRATION_ADDRESS, RegistrationAddressFlow],
      // Core flows
      [Flows.WELCOME, WelcomeFlow],
      [Flows.MENU, MenuFlow],
      [Flows.ORDER, OrderFlow],
      // Pizza flows
      [Flows.PIZZA_MENU, PizzaMenuFlow],
      [Flows.PIZZA_FLAVOR, PizzaFlavorFlow],
      [Flows.PIZZA_QUANTITY, PizzaQuantityFlow],
      [Flows.PIZZA_CRUST, PizzaCrustFlow],
      [Flows.PIZZA_NOTE, PizzaNoteFlow],
      [Flows.PIZZA_CONFIRM, PizzaConfirmFlow],
      // Drink flows
      [Flows.DRINK_MENU, DrinkMenuFlow],
      [Flows.DRINK_TYPE, DrinkTypeFlow],
      [Flows.DRINK_QUANTITY, DrinkQuantityFlow],
    ])
  }

  public create(flowName: Flows): BaseFlow {
    const FlowClass = this.flowMap.get(flowName)
    if (!FlowClass) throw new Error('Invalid flow')

    return container.resolve<BaseFlow>(FlowClass)
  }
}
