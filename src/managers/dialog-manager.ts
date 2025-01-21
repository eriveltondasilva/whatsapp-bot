import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { CustomerService } from '@/services/customer-service.js'
import { FlowStateManager } from '@/states/flow-state-manager.js'
import { HandlerManager } from './handler-manager.js'

import type { FlowState } from '@/types/index.js'

@injectable()
export class DialogManager {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(CustomerService) private customerService: CustomerService,
    @inject(HandlerManager) private handlerManager: HandlerManager,
  ) {}

  // ###
  public async handleMessage(
    phoneNumber: string,
    message: string,
  ): Promise<string> {
    const state = this.flowStateManager.getState(phoneNumber)
    const customer = this.customerService.getCustomer(phoneNumber)

    if (!customer && state.step === FlowStep.INITIAL) {
      return this.handleRegistration(phoneNumber, message, state)
    }

    return this.routeMessage(phoneNumber, message, state)
  }

  private routeMessage(
    phoneNumber: string,
    message: string,
    state: FlowState,
  ): string {
    const handler = this.handlerManager.getHandlerByStep(state.step)

    if (!handler) return this.getErrorMessage()

    return handler.handle(phoneNumber, message, state)
  }

  private handleRegistration(
    phoneNumber: string,
    message: string,
    state: FlowState,
  ) {
    const registrationHandler = this.handlerManager.getHandler('registration')

    if (!registrationHandler) return this.getErrorMessage()

    return registrationHandler.handle(phoneNumber, message, state)
  }

  private getErrorMessage(): string {
    return 'Ops! An error occurred while processing your message. Please try again!'
  }
}
