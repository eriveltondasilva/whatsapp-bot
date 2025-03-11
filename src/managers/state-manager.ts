import { inject, singleton } from 'tsyringe'

import { FlowKeys } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/@index.js'

import type { FlowContext, FlowState } from '@/types/index.js'

export interface IStateManager {
  getState(phone: string): FlowState
  updateContext(phone: string, context: FlowContext): void
  updateStep(phone: string, step: string): void
  updateContextData(phone: string, data: FlowContext['data']): void
  updateCustomer(phone: string, customer: FlowState['customer']): void
  resetState(phone: string): void
  clearAllStates(): void
}

@singleton()
export class StateManager implements IStateManager {
  private readonly stateStore = new Map<string, FlowState>()

  constructor(@inject(LoggerProvider) private logger: LoggerProvider) {}

  // ###
  getState(phone: string): FlowState {
    if (!this.stateStore.has(phone)) {
      return this.initializeState(phone)
    }

    const state = this.stateStore.get(phone) as FlowState
    this.logger.debug('State requested', { state })

    return state
  }

  updateContext(phone: string, context: Partial<FlowContext>): void {
    const currentState = this.getState(phone)

    const newHistory = [...currentState.history]

    if (context.step && context.step !== currentState.context.step) {
      newHistory.push(currentState.context.step)
    }

    const newContext = {
      ...currentState.context,
      ...context,
    }

    const updatedState: FlowState = {
      ...currentState,
      context: newContext,
      history: newHistory,
      lastInteraction: new Date(),
    }

    this.stateStore.set(phone, updatedState)
    this.logger.debug('State updated: CONTEXT', { newContext })
  }

  updateStep(phone: string, step: string): void {
    const flow = this.extractFlow(step)
    this.updateContext(phone, { flow, step })
  }

  updateContextData(phone: string, data: FlowContext['data']): void {
    const currentState = this.getState(phone)

    const newContextData = {
      ...currentState.context.data,
      ...data,
    }

    const updatedState: FlowState = {
      ...currentState,
      context: {
        ...currentState.context,
        data: newContextData
      },
    }

    this.stateStore.set(phone, updatedState)
    this.logger.debug('State updated: CONTEXT DATA', { newContextData })
  }

  updateCustomer(phone: string, customer: FlowState['customer']): void {
    const currentState = this.getState(phone)

    const newCustomer = {
      ...currentState.customer,
      ...customer,
    }

    const updatedState: FlowState = {
      ...currentState,
      customer: newCustomer
    }

    this.stateStore.set(phone, updatedState)
    this.logger.debug('State updated: CUSTOMER', { newCustomer })
  }

  resetState(phone: string): void {
    this.initializeState(phone)
    this.logger.ok('State reset', { phone })
  }

  clearAllStates(): void {
    this.stateStore.clear()
    this.logger.info('🚫 States cleared')
  }

  // ###
  private initializeState(phone: string) {
    const initialState: FlowState = {
      context: { flow: FlowKeys.WELCOME, step: FlowKeys.WELCOME, data: {} },
      customer: {},
      cart: [],
      history: [],
      lastInteraction: new Date(),
    }

    this.stateStore.set(phone, initialState)
    this.logger.debug('State initialized', { initialState })

    return initialState
  }

  private extractFlow(step: string): string {
    const [flow] = step.split('::')
    return flow.toLowerCase()
  }
}
