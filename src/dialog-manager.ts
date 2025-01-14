import { container, inject, injectable } from 'tsyringe'

import { RegistrationFlow } from '@/flows/index.js'
import { FlowStateManager } from '@/states/flow-state-manager.js'

import type { FlowHandler, FlowState } from '@/types/index.js'
import { FlowStep } from './config/enums.js'

@injectable()
export class DialogManager {
  private handlers: Map<string, FlowHandler> = new Map()

  constructor(@inject(FlowStateManager) private flowState: FlowStateManager) {
    this.handlers.set('registration', container.resolve(RegistrationFlow))
  }

  // ###
  async handleMessage(phoneNumber: string, message: string) {
    const state = this.flowState.getState(phoneNumber)

    if (state.step === FlowStep.INITIAL) {
      this.flowState.setState(phoneNumber, FlowStep.AWAITING_NAME)
      return 'Qual seu nome?'
    }

    return this.routeMessage(phoneNumber, message, state)
  }

  private routeMessage(phoneNumber: string, message: string, state: FlowState) {
    const handler = this.handlers.get('registration')

    if (!handler) {
      return 'Ops! Ocorreu um erro ao processar sua mensagem. Tente novamente!'
    }

    return handler.handle(phoneNumber, message, state)
  }
}
