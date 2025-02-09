import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { RegistrationMessages } from '@/messages/registration.js'
import { CustomerService, LoggerService } from '@/services/index.js'
import { getGreeting, isValidAddress, isValidName } from '@/utils/index.js'

import type { FlowActions, FlowHandler } from '@/types.js'

@injectable()
export class RegistrationFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(CustomerService) private customerService: CustomerService,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  // ###
  public handle(phone: string, message: string): string[] {
    this.logger.debug('👋 Registration Flow: %o', { phone, message })
    const { step } = this.flowStateManager.getState(phone)

    const actions: FlowActions = {
      [FlowStep.REGISTRATION]: () => this.initializeFlow(phone),
      [FlowStep.COLLECT_NAME]: () => this.handleNameInput(phone, message),
      [FlowStep.COLLECT_ADDRESS]: () => this.handleAddressInput(phone, message),
    }

    return actions[step]?.() || this.resetFlow(phone)
  }

  // ###
  private initializeFlow(phone: string): string[] {
    this.flowStateManager.updateState(phone, {
      step: FlowStep.COLLECT_NAME,
    })

    return RegistrationMessages.INITIAL
  }

  private handleNameInput(phone: string, name: string): string[] {
    if (!isValidName(name)) {
      return RegistrationMessages.INVALID_NAME
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.COLLECT_ADDRESS,
      data: { name },
    })

    return [this.getGreeting(name), ...RegistrationMessages.COLLECT_ADDRESS]
  }

  private handleAddressInput(phone: string, address: string): string[] {
    if (!isValidAddress(address)) {
      return RegistrationMessages.INVALID_ADDRESS
    }

    const { data } = this.flowStateManager.getState(phone)

    const newCustomer = this.customerService.createCustomer({
      phone: phone,
      name: data?.name || '',
      address,
    })
    this.logger.debug('📝 New customer registered: %o', newCustomer)

    this.flowStateManager.clearState(phone)
    this.flowStateManager.updateState(phone, { step: FlowStep.MAIN_MENU })

    return RegistrationMessages.FINALIZE(this.getFirstName(data?.name || ''))
  }

  // ###
  private resetFlow(phone: string): string[] {
    this.flowStateManager.clearState(phone)
    this.customerService.deleteCustomer(phone)

    return RegistrationMessages.GENERIC_ERROR
  }

  // ###
  private getFirstName(name: string): string {
    return name.split(' ')[0]
  }

  private getGreeting(name: string): string {
    return `${getGreeting()}, ${this.getFirstName(name)}!`
  }
}
