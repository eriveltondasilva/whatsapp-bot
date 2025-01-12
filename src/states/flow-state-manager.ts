import { FlowStep } from '../config/enums.js'
import type { FlowState } from '../types/index.js'

export class FlowStateManager {
  private states: Map<string, FlowState> = new Map()

  getState(phoneNumber: string) {
    return this.states.get(phoneNumber) || { step: FlowStep.INITIAL, data: {} }
  }

  setState(phoneNumber: string, step: FlowStep, data?: any) {
    this.states.set(phoneNumber, { step, data })
    // TODO: verificar se o estado foi salvo com sucesso
  }

  clearState(phoneNumber: string) {
    return this.states.delete(phoneNumber)
  }
}
