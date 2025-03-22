import { inject, injectable } from 'tsyringe'

import { FlowKeys } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/@index.js'

import { DrinkFlow } from './drink.flow.js'
import { MainMenuFlow } from './main-menu.flow.js'
import { OrderFlow } from './order.flow.js'
import { PizzaFlow } from './pizza.flow.js'
import { RegistrationFlow } from './registration.flow.js'
import { WelcomeFlow } from './welcome.flow.js'

import type { IFlowFactory, IFlowHandler } from '@/types/index.js'

@injectable()
export class FlowFactory implements IFlowFactory {
  private flowMap: Map<FlowKeys, IFlowHandler>

  constructor(
    @inject(DrinkFlow) drinkFlow: DrinkFlow,
    @inject(MainMenuFlow) menuFlow: MainMenuFlow,
    @inject(OrderFlow) orderFlow: OrderFlow,
    @inject(PizzaFlow) pizzaFlow: PizzaFlow,
    @inject(RegistrationFlow) registrationFlow: RegistrationFlow,
    @inject(WelcomeFlow) welcomeFlow: WelcomeFlow,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {
    this.flowMap = new Map<FlowKeys, IFlowHandler>([
      [FlowKeys.DRINK, drinkFlow],
      [FlowKeys.MENU, menuFlow],
      [FlowKeys.ORDER, orderFlow],
      [FlowKeys.PIZZA, pizzaFlow],
      [FlowKeys.REGISTRATION, registrationFlow],
      [FlowKeys.WELCOME, welcomeFlow],
    ])
  }

  //#
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
