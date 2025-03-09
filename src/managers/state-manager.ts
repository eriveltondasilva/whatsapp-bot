import { inject, singleton } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/@index.js'

import type { FlowState } from '@/types/index.js'

@singleton()
export class StateManager {
  private readonly states = new Map<string, FlowState>()
  private readonly initialState: FlowState = { step: FlowStep.WELCOME }

  constructor(@inject(LoggerProvider) private logger: LoggerProvider) {}

  private updateState<K extends keyof FlowState>(
    phone: string,
    key: K,
    newValue: FlowState[K],
  ): void {
    const currentState = this.getState(phone)
    const previousValue = currentState[key]

    const updatedValue =
      previousValue && typeof previousValue === 'object'
        ? { ...previousValue, ...(newValue as object) }
        : newValue

    const updatedState = { ...currentState, [key]: updatedValue }

    this.states.set(phone, updatedState)
    this.logger.ok('Flow state updated', { phone, updatedState })
  }

  public getState(phone: string): FlowState {
    const state = this.states.get(phone) || this.initialState

    if (!this.states.has(phone)) this.states.set(phone, state)

    this.logger.ok('Flow state requested', { state })
    return state
  }

  public updateStep(phone: string, step: FlowStep): void {
    this.updateState(phone, 'step', step)
  }

  public updateCustomer(phone: string, customer: FlowState['customer']): void {
    this.updateState(phone, 'customer', customer)
  }

  public resetState(phone: string): void {
    this.states.set(phone, this.initialState)
    this.logger.ok('Flow state reset', { phone })
  }

  public clearAllStates(): void {
    this.states.clear()
    this.logger.info('🧹 Flow states cleared')
  }
}
