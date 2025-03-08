import { inject, singleton } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/index.js'

import type { FlowState } from '@/types/index.js'

@singleton()
export class StateManager {
  private states: Map<string, FlowState> = new Map()

  constructor(@inject(LoggerProvider) private logger: LoggerProvider) {}
  public getState(phone: string): FlowState {
    let state = this.states.get(phone)

    if (!state) {
      state = {
        step: FlowStep.WELCOME,
        data: {},
      }
      this.states.set(phone, state)
    }

    this.logger.info('📝 Flow state requested: %o', { state })
    return state
  }

  public updateState(phone: string, newState: FlowState): void {
    const currentState = this.getState(phone)
    const updatedState: FlowState = {
      ...newState,
      data: { ...currentState.data, ...newState.data },
    }
    this.states.set(phone, updatedState)
    this.logger.info('🔄 Flow state updated: %o', { phone, updatedState })
  }

  public clearState(phone: string): void {
    this.states.delete(phone)
    this.logger.info('🧹 Flow state cleared: %o', { phone })
  }
}
