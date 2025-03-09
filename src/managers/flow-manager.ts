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
  private readonly flows: Map<FlowKeys, FlowHandler>

  constructor(
    @inject(DrinkFlow) private drinkFlow: DrinkFlow,
    @inject(MenuFlow) private menuFlow: MenuFlow,
    @inject(OrderFlow) private orderFlow: OrderFlow,
    @inject(PizzaFlow) private pizzaFlow: PizzaFlow,
    @inject(RegistrationFlow) private registrationFlow: RegistrationFlow,
    @inject(WelcomeFlow) private welcomeFlow: WelcomeFlow,
  ) {
    this.flows = new Map<FlowKeys, FlowHandler>([
      [FlowKeys.REGISTRATION, this.registrationFlow],
      [FlowKeys.WELCOME, this.welcomeFlow],
      [FlowKeys.MENU, this.menuFlow],
      [FlowKeys.ORDER, this.orderFlow],
      [FlowKeys.PIZZA, this.pizzaFlow],
      [FlowKeys.DRINK, this.drinkFlow],
    ])
  }

  public getFlow(step: FlowStep): FlowHandler {
    const flowKey = this.extractFlowKey(step)
    const flow = this.flows.get(flowKey as FlowKeys)

    if (!flow) throw new Error(`No flow found: ${step}`)

    return flow
  }

  private extractFlowKey(step: string): string {
    return step.split(FlowStep.SEPARATOR)[0].toLowerCase()
  }
}
