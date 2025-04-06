import { inject, injectable } from 'tsyringe'

import { DrinkFlow } from './drink.flow.js'
import { MainMenuFlow } from './main-menu.flow.js'
import { OrderFlow } from './order.flow.js'
import { PizzaFlow } from './pizza.flow.js'
import { RegistrationFlow } from './registration.flow.js'
import { WelcomeFlow } from './welcome.flow.js'

import { FlowKeys } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { Flow, FlowFactory as IFlowFactory } from '@/types/interfaces.js'

type FlowMap = Record<FlowKeys, Flow>

@injectable()
export class FlowFactory implements IFlowFactory {
  private readonly flowMap: FlowMap

  constructor(
    @inject(DrinkFlow) private readonly drinkFlow: DrinkFlow,
    @inject(MainMenuFlow) private readonly menuFlow: MainMenuFlow,
    @inject(OrderFlow) private readonly orderFlow: OrderFlow,
    @inject(PizzaFlow) private readonly pizzaFlow: PizzaFlow,
    @inject(RegistrationFlow) private readonly registrationFlow: RegistrationFlow,
    @inject(WelcomeFlow) private readonly welcomeFlow: WelcomeFlow,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {
    this.flowMap = this.createFlowMap()
  }

  //#
  public createFlow(flow: FlowKeys) {
    this.logger.debug('Flow selected', { flow })

    const flowHandler = this.flowMap[flow]
    if (!flowHandler) throw new Error(`Flow not found: ${flow}`)

    return flowHandler
  }

  private createFlowMap(): FlowMap {
    return {
      [FlowKeys.DRINK]: this.drinkFlow,
      [FlowKeys.MENU]: this.menuFlow,
      [FlowKeys.ORDER]: this.orderFlow,
      [FlowKeys.PIZZA]: this.pizzaFlow,
      [FlowKeys.REGISTRATION]: this.registrationFlow,
      [FlowKeys.WELCOME]: this.welcomeFlow,
    }
  }
}
