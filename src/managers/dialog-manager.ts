import { inject, injectable } from 'tsyringe'

import { FlowKeys, FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { CustomerService } from '@/services/customer-service.js'
import { HandlerManager } from './handler-manager.js'

import type { FlowState } from '@/types.js'

@injectable()
export class DialogManager {
  private errorMessage = [
    'Ops! Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente!',
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
      return this.handleWithHandler(FlowKeys.REGISTRATION, phoneNumber, message, state)
    }

    if (state.step === FlowStep.INITIAL) {
      return this.handleWithHandler(FlowKeys.WELCOME, phoneNumber, message, state)
    }

    return this.handleWithHandler(state.step, phoneNumber, message, state)
  }

  private handleWithHandler(
    handlerName: string,
    phoneNumber: string,
    message: string,
    state: FlowState,
  ): string[] {
    const handler = this.handlerManager.getHandler(handlerName)

    if (!handler) return this.errorMessage

    return handler.handle(phoneNumber, message, state)
  }
}
