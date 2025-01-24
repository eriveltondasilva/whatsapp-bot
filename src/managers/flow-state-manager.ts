import { inject, injectable, singleton } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { LoggerService } from '@/services/logger-service.js'

import type { FlowState } from '@/types.js'

@injectable()
@singleton()
export class FlowStateManager {
  private states: Map<string, FlowState> = new Map()

  constructor(@inject(LoggerService) private logger: LoggerService) {}

  public getState(phoneNumber: string): FlowState {
    let state = this.states.get(phoneNumber)

    if (!state) {
      state = {
        step: FlowStep.WELCOME,
        data: {},
      }
      this.states.set(phoneNumber, state)
    }

    this.logger.debug('📝 Flow state requested: %o', state)
    return state
  }

  public updateState(phoneNumber: string, newState: FlowState): void {
    const currentState = this.getState(phoneNumber)
    const updatedState: FlowState = {
      ...newState,
      data: { ...currentState.data, ...newState.data },
    }
    this.states.set(phoneNumber, updatedState)
    this.logger.debug('🔄 Flow state updated: %o', {
      phoneNumber,
      updatedState,
    })
  }

  public clearState(phoneNumber: string): void {
    this.states.delete(phoneNumber)
    this.logger.debug('🧹 Flow state cleared: %s', phoneNumber)
  }
}
