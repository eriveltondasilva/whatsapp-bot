import { inject, injectable } from 'tsyringe'

import { FlowKeys } from '@/config/enums.js'
import {
  DrinkFlow,
  MainMenuFlow,
  OrderFlow,
  PizzaFlow,
  RegistrationFlow,
  WelcomeFlow,
} from '@/flows/@index.js'
import { LoggerProvider } from '@/providers/@index.js'

import type { IFlowFactory, IFlowHandler } from '@/types/index.js'

@injectable()
export class FlowFactory implements IFlowFactory {
  private flowMap: Map<FlowKeys, IFlowHandler>

  constructor(
    @inject(DrinkFlow) drinkFlow: DrinkFlow,
    @inject(PizzaFlow) pizzaFlow: PizzaFlow,
    @inject(OrderFlow) orderFlow: OrderFlow,
    @inject(MainMenuFlow) menuFlow: MainMenuFlow,
    @inject(RegistrationFlow) registrationFlow: RegistrationFlow,
    @inject(WelcomeFlow) welcomeFlow: WelcomeFlow,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {
    this.flowMap = new Map<FlowKeys, IFlowHandler>([
      [FlowKeys.DRINK, drinkFlow],
      [FlowKeys.ORDER, orderFlow],
      [FlowKeys.PIZZA, pizzaFlow],
      [FlowKeys.MENU, menuFlow],
      [FlowKeys.WELCOME, welcomeFlow],
      [FlowKeys.REGISTRATION, registrationFlow],
    ])
  }

  public createFlow(flow: FlowKeys): IFlowHandler {
    this.logger.debug('Flow selected', { flow })
    const flowHandler = this.flowMap.get(flow)

    if (!flowHandler) {
      this.logger.error('Flow not found', { flow })
      throw new Error('Flow not found', { cause: { flow } })
    }

    return flowHandler
  }
}
