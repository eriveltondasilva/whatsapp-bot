import { LoggerService } from '@/services/logger-service.js'
import { inject, injectable, singleton } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { RegistrationMessages } from '@/messages/registration.js'
import { CustomerService } from '@/services/customer-service.js'
import { getGreeting, isValidAddress, isValidName } from '@/utils/index.js'

import type { FlowHandler } from '@/types.js'

@injectable()
@singleton()
export class RegistrationFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(CustomerService) private customerService: CustomerService,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  // ###
  public handle(phoneNumber: string, message: string): string[] {
    this.logger.debug('👋 RegistrationFlow:', { phoneNumber, message })
    const { step } = this.flowState.getState(phoneNumber)

    switch (step) {
      case FlowStep.INITIAL:
        return this.initiateRegistration(phoneNumber)

      case FlowStep.COLLECT_NAME:
        return this.handleNameInput(phoneNumber, message)

      case FlowStep.COLLECT_ADDRESS:
        return this.handleAddressInput(phoneNumber, message)

      default:
        return this.resetFlow(phoneNumber)
    }
  }

  // ###
  private initiateRegistration(phoneNumber: string): string[] {
    this.flowState.updateState(phoneNumber, { step: FlowStep.COLLECT_NAME })
    return RegistrationMessages.INITIAL
  }

  private handleNameInput(phoneNumber: string, name: string): string[] {
    if (!isValidName(name)) {
      return RegistrationMessages.INVALID_NAME
    }

    this.flowState.updateState(phoneNumber, {
      step: FlowStep.COLLECT_ADDRESS,
      data: { name },
    })

    return [this.getGreeting(name), ...RegistrationMessages.COLLECT_ADDRESS]
  }

  private handleAddressInput(phoneNumber: string, address: string): string[] {
    if (!isValidAddress(address)) {
      return RegistrationMessages.INVALID_ADDRESS
    }

    const { data } = this.flowState.getState(phoneNumber)

    const newCustomer = this.customerService.createCustomer({
      phone: phoneNumber,
      name: data.name,
      address,
    })
    this.logger.debug('📝 New customer registered: %o', newCustomer)

    this.flowState.clearState(phoneNumber)
    this.flowState.updateState(phoneNumber, {
      step: FlowStep.MAIN_MENU,
    })

    return RegistrationMessages.FINALIZE(this.getFirstName(data.name))
  }

  // ###
  private resetFlow(phoneNumber: string): string[] {
    this.flowState.clearState(phoneNumber)
    this.customerService.deleteCustomer(phoneNumber)
    return RegistrationMessages.GENERIC_ERROR
  }

  private getFirstName(name: string): string {
    return name.split(' ')[0]
  }

  private getGreeting(name: string): string {
    return `${getGreeting()}, ${this.getFirstName(name)}!`
  }
}
