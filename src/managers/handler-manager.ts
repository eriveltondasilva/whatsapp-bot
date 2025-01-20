import { MenuFlow, RegistrationFlow } from '@/flows/index.js'
import { inject, injectable, singleton } from 'tsyringe'

import type { FlowStep } from '@/config/enums.js'
import type { FlowHandler } from '@/types/index.js'

@injectable()
@singleton()
export class HandlerManager {
  private handlers: Map<string, FlowHandler>

  constructor(
    @inject(RegistrationFlow) registrationFlow: RegistrationFlow,
    @inject(MenuFlow) menuFlow: MenuFlow,
  ) {
    this.handlers = new Map<string, FlowHandler>([
      ['registration', registrationFlow],
      ['menu', menuFlow],
    ])
  }

  public getHandler(flowName: string): FlowHandler | undefined {
    return this.handlers.get(flowName)
  }

  public getHandlerByStep(step: FlowStep): FlowHandler | undefined {
    let flowName = 'menu'

    if (step.startsWith('awaiting_')) flowName = 'registration'

    return this.getHandler(flowName)
  }
}
