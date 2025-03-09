import { inject, singleton } from 'tsyringe'

import { FlowKeys, FlowStep } from '@/config/enums.js'
import {
  DrinkFlow,
  MainMenuFlow,
  OrderFlow,
  PizzaFlow,
  RegistrationFlow,
  WelcomeFlow,
} from '@/flows/@index.js'

import type { FlowHandler } from '@/types/index.js'

@singleton()
export class FlowManager {
  private handlers: Map<string, FlowHandler>

  constructor(
    @inject(DrinkFlow) drinkFlow: DrinkFlow,
    @inject(MainMenuFlow) menuFlow: MainMenuFlow,
    @inject(OrderFlow) orderFlow: OrderFlow,
    @inject(PizzaFlow) pizzaFlow: PizzaFlow,
    @inject(RegistrationFlow) registrationFlow: RegistrationFlow,
    @inject(WelcomeFlow) welcomeFlow: WelcomeFlow,
  ) {
    this.handlers = new Map<string, FlowHandler>([
      [FlowKeys.DRINK, drinkFlow],
      [FlowKeys.MAIN_MENU, menuFlow],
      [FlowKeys.ORDER, orderFlow],
      [FlowKeys.PIZZA, pizzaFlow],
      [FlowKeys.REGISTRATION, registrationFlow],
      [FlowKeys.WELCOME, welcomeFlow],
    ])
  }

  public getHandler(step: FlowStep): FlowHandler | undefined {
    const flowKey = this.extractFlowKey(step)
    return this.handlers.get(flowKey)
  }

  private extractFlowKey(step: string): string {
    return step.split(FlowStep.SEPARATOR)[0].toLowerCase()
  }
}
