import { inject, injectable } from 'tsyringe'

import { DrinkFlow } from './drink.flow.js'
import { MainMenuFlow } from './main-menu.flow.js'
import { OrderFlow } from './order.flow.js'
import { PizzaFlow } from './pizza.flow.js'
import { RegistrationFlow } from './registration.flow.js'
import { WelcomeFlow } from './welcome.flow.js'

import { FlowKeys } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { IFlowFactory, IFlowHandler } from '@/types/index.js'

@injectable()
export class FlowFactory implements IFlowFactory {
  constructor(
    @inject(DrinkFlow) private drinkFlow: DrinkFlow,
    @inject(MainMenuFlow) private menuFlow: MainMenuFlow,
    @inject(OrderFlow) private orderFlow: OrderFlow,
    @inject(PizzaFlow) private pizzaFlow: PizzaFlow,
    @inject(RegistrationFlow) private registrationFlow: RegistrationFlow,
    @inject(WelcomeFlow) private welcomeFlow: WelcomeFlow,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public createFlow(flow: FlowKeys): IFlowHandler {
    this.logger.debug('Flow selected', { flow })

    const flowMap = this.createFlowMap()
    const flowHandler = flowMap[flow]

    if (!flowHandler) {
      this.logger.error('Flow not found', { flow })
      throw new Error(`Flow not found: ${flow}`)
    }

    return flowHandler
  }

  private createFlowMap(): Record<FlowKeys, IFlowHandler> {
    return {
      [FlowKeys.DRINK]: this.drinkFlow,
      [FlowKeys.MENU]: this.menuFlow,
      [FlowKeys.ORDER]: this.orderFlow,
      [FlowKeys.PIZZA]: this.pizzaFlow,
      [FlowKeys.REGISTRATION]: this.registrationFlow,
      [FlowKeys.WELCOME]: this.welcomeFlow,
    } as const
  }
}
