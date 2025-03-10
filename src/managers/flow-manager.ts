import { inject, singleton } from 'tsyringe'

import { FlowKeys, FlowStep } from '@/config/enums.js'
import {
  DrinkFlow,
  MenuFlow,
  OrderFlow,
  PizzaFlow,
  RegistrationFlow,
  WelcomeFlow,
} from '@/flows/@index.js'

import type { FlowHandler } from '@/types/index.js'

@singleton()
export class FlowManager {
  private flows: Map<FlowKeys, FlowHandler>

  constructor(
    @inject(DrinkFlow) drinkFlow: DrinkFlow,
    @inject(MenuFlow) menuFlow: MenuFlow,
    @inject(OrderFlow) orderFlow: OrderFlow,
    @inject(PizzaFlow) pizzaFlow: PizzaFlow,
    @inject(RegistrationFlow) registrationFlow: RegistrationFlow,
    @inject(WelcomeFlow) welcomeFlow: WelcomeFlow,
  ) {
    this.flows = new Map<FlowKeys, FlowHandler>([
      [FlowKeys.REGISTRATION, registrationFlow],
      [FlowKeys.WELCOME, welcomeFlow],
      [FlowKeys.MENU, menuFlow],
      [FlowKeys.ORDER, orderFlow],
      [FlowKeys.PIZZA, pizzaFlow],
      [FlowKeys.DRINK, drinkFlow],
    ])
  }

  public getFlow(step: FlowStep): FlowHandler {
    const flowKey = this.extractFlowKey(step)
    const flow = this.flows.get(flowKey as FlowKeys)

    if (!flow) throw new Error(`Flow not found for step: ${step}`)

    return flow
  }

  private extractFlowKey(step: string): string {
    return step.split(FlowStep.SEPARATOR)[0].toLowerCase()
  }
}
