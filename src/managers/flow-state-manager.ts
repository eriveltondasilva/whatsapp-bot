import { singleton } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import type { FlowState } from '@/types/index.js'

@singleton()
export class FlowStateManager {
  private states: Map<string, FlowState> = new Map()

  public getState(phoneNumber: string): FlowState {
    return this.states.get(phoneNumber) || { step: FlowStep.INITIAL, data: {} }
  }

  public setState(phoneNumber: string, step: FlowStep, data: any = {}): void {
    const currentState = this.getState(phoneNumber)
    const updatedState: FlowState = {
      step,
      data: { ...currentState.data, ...data },
    }

    this.states.set(phoneNumber, updatedState)
  }

  public clearState(phoneNumber: string): boolean {
    return this.states.delete(phoneNumber)
  }
}
