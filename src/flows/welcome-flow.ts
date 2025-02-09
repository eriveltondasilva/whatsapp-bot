import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { WelcomeMessage } from '@/messages/welcome.js'
import { CustomerService, LoggerService } from '@/services/index.js'
import { RegistrationFlow } from './registration-flow.js'

import type { FlowHandler } from '@/types.js'

@injectable()
export class WelcomeFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(CustomerService) private customerService: CustomerService,
    @inject(RegistrationFlow) private registrationFlow: RegistrationFlow,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  public handle(phone: string, message: string): string[] {
    this.logger.debug('👋 Welcome Flow: %o', { phone, message })
    const customer = this.customerService.getCustomer(phone)

    if (!customer) {
      this.flowStateManager.updateState(phone, {
        step: FlowStep.REGISTRATION,
      })
      return this.registrationFlow.handle(phone, message)
    }

    this.flowStateManager.updateState(phone, { step: FlowStep.MAIN_MENU })
    const customerName = customer.name.split(' ')[0]

    return WelcomeMessage(customerName)
  }
}
