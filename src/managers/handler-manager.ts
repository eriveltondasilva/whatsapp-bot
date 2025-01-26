import { inject, injectable, singleton } from 'tsyringe'

import { FlowKeys, FlowStep } from '@/config/enums.js'
import {
  MenuFlow,
  OrderFlow,
  PaymentFlow,
  RegistrationFlow,
  WelcomeFlow,
  PizzaFlow,
} from '@/flows/index.js'

import type { FlowHandler } from '@/types.js'

@injectable()
@singleton()
export class HandlerManager {
  private handlers: Map<string, FlowHandler>

  constructor(
    @inject(RegistrationFlow) registrationFlow: RegistrationFlow,
    @inject(WelcomeFlow) welcomeFlow: WelcomeFlow,
    @inject(MenuFlow) menuFlow: MenuFlow,
    @inject(OrderFlow) orderFlow: OrderFlow,
    @inject(PaymentFlow) paymentFlow: PaymentFlow,
    @inject(PizzaFlow) pizzaFlow: PizzaFlow,
  ) {
    this.handlers = new Map<string, FlowHandler>([
      [FlowKeys.REGISTRATION, registrationFlow],
      [FlowKeys.WELCOME, welcomeFlow],
      [FlowKeys.MAIN_MENU, menuFlow],
      [FlowKeys.ORDER, orderFlow],
      [FlowKeys.PIZZA, pizzaFlow],
      [FlowKeys.PAYMENT, paymentFlow],
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
