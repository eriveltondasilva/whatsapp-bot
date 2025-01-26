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

  public handle(phoneNumber: string, message: string): string[] {
    this.logger.debug('👋 Welcome Flow: %o', { phoneNumber, message })
    const customer = this.customerService.getCustomer(phoneNumber)

    if (!customer) {
      this.flowStateManager.updateState(phoneNumber, {
        step: FlowStep.REGISTRATION,
      })
      return this.registrationFlow.handle(phoneNumber, message)
    }

    this.flowStateManager.updateState(phoneNumber, { step: FlowStep.MAIN_MENU })

    const customerName = customer.name.split(' ')[0]
    return WelcomeMessage(customerName)
  }
}
