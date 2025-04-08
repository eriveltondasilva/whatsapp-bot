import { inject, injectable } from 'tsyringe'
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

@injectable()
export class FlowFactory {
  private readonly flowMap: Map<Flows, BaseFlow>

  constructor(
    @inject(RegistrationInitialFlow) registrationInitialFlow: RegistrationInitialFlow,
    @inject(RegistrationNameFlow) registrationNameFlow: RegistrationNameFlow,
    @inject(RegistrationAddressFlow) registrationAddressFlow: RegistrationAddressFlow,
    //
    @inject(WelcomeFlow) welcomeFlow: WelcomeFlow,
    @inject(MenuFlow) menuFlow: MenuFlow,
    @inject(OrderFlow) orderFlow: OrderFlow,
    //
    @inject(PizzaMenuFlow) pizzaMenuFlow: PizzaMenuFlow,
    @inject(PizzaFlavorFlow) pizzaFlavorFlow: PizzaFlavorFlow,
    @inject(PizzaQuantityFlow) pizzaQuantityFlow: PizzaQuantityFlow,
    @inject(PizzaCrustFlow) pizzaCrustFlow: PizzaCrustFlow,
    @inject(PizzaNoteFlow) pizzaNoteFlow: PizzaNoteFlow,
    @inject(PizzaConfirmFlow) pizzaConfirmFlow: PizzaConfirmFlow,
    //
    @inject(DrinkMenuFlow) drinkMenuFlow: DrinkMenuFlow,
    @inject(DrinkTypeFlow) drinkTypeFlow: DrinkTypeFlow,
    @inject(DrinkQuantityFlow) drinkQuantityFlow: DrinkQuantityFlow,
  ) {
    this.flowMap = new Map<Flows, BaseFlow>([
      [Flows.REGISTRATION_INITIAL, registrationInitialFlow],
      [Flows.REGISTRATION_NAME, registrationNameFlow],
      [Flows.REGISTRATION_ADDRESS, registrationAddressFlow],
      //
      [Flows.WELCOME, welcomeFlow],
      [Flows.MENU, menuFlow],
      [Flows.ORDER, orderFlow],
      //
      [Flows.PIZZA_MENU, pizzaMenuFlow],
      [Flows.PIZZA_FLAVOR, pizzaFlavorFlow],
      [Flows.PIZZA_QUANTITY, pizzaQuantityFlow],
      [Flows.PIZZA_CRUST, pizzaCrustFlow],
      [Flows.PIZZA_NOTE, pizzaNoteFlow],
      [Flows.PIZZA_CONFIRM, pizzaConfirmFlow],
      //
      [Flows.DRINK_MENU, drinkMenuFlow],
      [Flows.DRINK_TYPE, drinkTypeFlow],
      [Flows.DRINK_QUANTITY, drinkQuantityFlow],
    ])
  }

  public create(flowName: Flows): BaseFlow {
    const flow = this.flowMap.get(flowName)
    if (!flow) throw new Error('Invalid flow')

    return flow
  }
}
