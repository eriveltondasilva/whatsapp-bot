import { inject, singleton } from 'tsyringe'

import { FlowKeys } from '@/config/enums.js'
import {
  DrinkFlow,
  MenuFlow,
  OrderFlow,
  PizzaFlow,
  RegistrationFlow,
  WelcomeFlow,
} from '@/flows/@index.js'

import { LoggerProvider } from '@/providers/logger.provider.js'
import type { FlowContext, FlowHandler } from '@/types/index.js'

@singleton()
export class FlowManager {
  private flows: Map<string, FlowHandler>

  constructor(
    @inject(DrinkFlow) drinkFlow: DrinkFlow,
    @inject(MenuFlow) menuFlow: MenuFlow,
    @inject(OrderFlow) orderFlow: OrderFlow,
    @inject(PizzaFlow) pizzaFlow: PizzaFlow,
    @inject(RegistrationFlow) registrationFlow: RegistrationFlow,
    @inject(WelcomeFlow) welcomeFlow: WelcomeFlow,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {
    this.flows = new Map<string, FlowHandler>([
      [FlowKeys.REGISTRATION, registrationFlow],
      [FlowKeys.WELCOME, welcomeFlow],
      [FlowKeys.MENU, menuFlow],
      [FlowKeys.ORDER, orderFlow],
      [FlowKeys.PIZZA, pizzaFlow],
      [FlowKeys.DRINK, drinkFlow],
    ])
  }

  getFlow(context: FlowContext): FlowHandler {
    const flow = this.flows.get(context.flow)

    if (!flow) {
      this.logger.error('Flow not found', { flow: context.flow, step: context.step })
      throw new Error(`Flow not found for step: ${context.step}`)
    }

    this.logger.debug('Flow selected', { flow: context.flow, step: context.step })
    return flow
  }
}
