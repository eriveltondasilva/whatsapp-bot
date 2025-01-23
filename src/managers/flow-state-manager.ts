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
    const state = this.states.get(phoneNumber) || {
      step: FlowStep.INITIAL,
      data: {},
    }
    this.logger.debug('📝 Flow state requested: %o', state)
    return state
  }

  public setState(phoneNumber: string, step: FlowStep, data: any = {}): void {
    const currentState = this.getState(phoneNumber)
    const updatedState: FlowState = {
      step,
      data: { ...currentState.data, ...data },
    }
    this.logger.debug('📝 Flow state updated: %o', updatedState)
    this.states.set(phoneNumber, updatedState)
  }

  public clearState(phoneNumber: string): boolean {
    this.logger.debug('📝 Flow state cleared: %s', phoneNumber)
    return this.states.delete(phoneNumber)
  }
}
