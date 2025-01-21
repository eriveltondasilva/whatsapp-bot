import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { CustomerService } from '@/services/customer-service.js'
import { HandlerManager } from './handler-manager.js'

import type { FlowState } from '@/types.js'

@injectable()
export class DialogManager {
  private errorMessage = [
    'Ops! An error occurred while processing your message. Please try again!',
  ]
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(CustomerService) private customerService: CustomerService,
    @inject(HandlerManager) private handlerManager: HandlerManager,
  ) {}

  // ###
  public async handleMessage(
    phoneNumber: string,
    message: string,
  ): Promise<string[]> {
    const state = this.flowStateManager.getState(phoneNumber)
    const customer = this.customerService.getCustomer(phoneNumber)

    if (!customer) {
      return this.handleNewCustomer(phoneNumber, message, state)
    }

    if (state.step === FlowStep.INITIAL) {
      return this.handleExistingCustomer(phoneNumber, message, state)
    }

    return this.routeMessage(phoneNumber, message, state)
  }

  private routeMessage(
    phoneNumber: string,
    message: string,
    state: FlowState,
  ): string[] {
    const handler = this.handlerManager.getHandlerByStep(state.step)

    if (!handler) return this.errorMessage

    return handler.handle(phoneNumber, message, state)
  }

  private handleNewCustomer(
    phoneNumber: string,
    message: string,
    state: FlowState,
  ): string[] {
    const registrationHandler = this.handlerManager.getHandler('registration')

    if (!registrationHandler) return this.errorMessage

    return registrationHandler.handle(phoneNumber, message, state)
  }

  private handleExistingCustomer(
    phoneNumber: string,
    message: string,
    state: FlowState,
  ): string[] {
    const menuHandler = this.handlerManager.getHandler('menu')

    if (!menuHandler) return this.errorMessage

    return menuHandler.handle(phoneNumber, message, state)
  }
}
