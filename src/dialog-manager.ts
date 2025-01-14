import { container, inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { MenuFlow, RegistrationFlow } from '@/flows/index.js'
import { CustomerService } from '@/services/customer-service.js'
import { FlowStateManager } from '@/states/flow-state-manager.js'

import type { FlowHandler, FlowState } from '@/types/index.js'

@injectable()
export class DialogManager {
  private handlers: Map<string, FlowHandler>

  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(CustomerService) private customer: CustomerService,
  ) {
    this.handlers = new Map<string, FlowHandler>([
      ['registration', container.resolve(RegistrationFlow)],
      ['menu', container.resolve(MenuFlow)],
    ])
  }

  // ###
  async handleMessage(phoneNumber: string, message: string) {
    const state = this.flowState.getState(phoneNumber)
    const customer = this.customer.getCustomer(phoneNumber)

    if (!customer && state.step === FlowStep.INITIAL) {
      this.flowState.setState(phoneNumber, FlowStep.AWAITING_NAME)
      return 'Qual seu nome?'
    }

    return this.routeMessage(phoneNumber, message, state)
  }

  private routeMessage(phoneNumber: string, message: string, state: FlowState) {
    const currentFlow = this.getFlowForStep(state.step)
    const handler = this.handlers.get(currentFlow)

    if (!handler) {
      return 'Ops! Ocorreu um erro ao processar sua mensagem. Tente novamente!'
    }

    return handler.handle(phoneNumber, message, state)
  }

  // ***
  private getFlowForStep(step: FlowStep): string {
    if (step.startsWith('awaiting_')) return 'registration'

    return 'menu'
  }
}
