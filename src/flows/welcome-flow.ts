import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { WelcomeMessage } from '@/messages/welcome.js'
import { CustomerService } from '@/services/customer-service.js'
import { RegistrationFlow } from './registration-flow.js'

import type { FlowHandler, FlowState } from '@/types.js'

@injectable()
export class WelcomeFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(CustomerService) private customerService: CustomerService,
    @inject(RegistrationFlow) private registrationFlow: RegistrationFlow,
  ) {}

  public handle(
    phoneNumber: string,
    message: string,
    state: FlowState,
  ): string[] {
    const customer = this.customerService.getCustomer(phoneNumber)

    if (!customer) {
      this.flowStateManager.setState(phoneNumber, FlowStep.INITIAL)
      return this.registrationFlow.handle(phoneNumber, '', state)
    }

    this.flowStateManager.setState(phoneNumber, FlowStep.MAIN_MENU)
    return WelcomeMessage(customer.name)
  }
}
