import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { RegistrationMessages } from '@/messages/registration.js'
import { CustomerService } from '@/services/customer-service.js'
import { getGreeting, isValidAddress, isValidName } from '@/utils/index.js'

import type { FlowHandler, FlowState } from '@/types.js'

@injectable()
export class RegistrationFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(CustomerService) private customerService: CustomerService,
  ) {}

  // ###
  public handle(
    phoneNumber: string,
    message: string,
    state: FlowState,
  ): string[] {
    switch (state.step) {
      case FlowStep.INITIAL:
        return this.initiateRegistration(phoneNumber)

      case FlowStep.COLLECT_NAME:
        return this.handleNameInput(phoneNumber, message)

      case FlowStep.COLLECT_ADDRESS:
        return this.handleAddressInput(phoneNumber, message)

      default:
        return RegistrationMessages.GENERIC_ERROR
    }
  }

  // ###
  private initiateRegistration(phoneNumber: string): string[] {
    this.flowState.setState(phoneNumber, FlowStep.COLLECT_NAME)
    return RegistrationMessages.INITIAL
  }

  private handleNameInput(phoneNumber: string, name: string): string[] {
    if (!isValidName(name)) {
      return RegistrationMessages.INVALID_NAME
    }

    this.flowState.setState(phoneNumber, FlowStep.COLLECT_ADDRESS, { name })

    return [this.getGreeting(name), ...RegistrationMessages.COLLECT_ADDRESS]
  }

  private handleAddressInput(phoneNumber: string, address: string): string[] {
    if (!isValidAddress(address)) {
      return RegistrationMessages.INVALID_ADDRESS
    }

    return this.finalizeRegistration(phoneNumber)
  }

  private finalizeRegistration(phoneNumber: string): string[] {
    const { data } = this.flowState.getState(phoneNumber)

    this.customerService.createCustomer({
      phone: phoneNumber,
      name: data.name,
      address: data.address,
    })

    this.flowState.setState(phoneNumber, FlowStep.MENU)

    return RegistrationMessages.FINALIZE(this.getFirstName(data.name))
  }

  // ###
  private getFirstName(name: string): string {
    return name.split(' ')[0]
  }

  private getGreeting(name: string): string {
    return `${getGreeting()}, ${this.getFirstName(name)}!`
  }
}
