import { inject, singleton } from 'tsyringe'

import { FlowKeys, FlowStep } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/@index.js'

import type { FlowContext, FlowState } from '@/types/index.js'

export interface IStateManager {
  getState(phone: string): FlowState
  updateContext(phone: string, context: FlowContext): void
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
    this.logger.debug('Flow state requested', { state })

    return state
  }

  updateContext(phone: string, context: Partial<FlowContext>): void {
    const currentState = this.getState(phone)

    const newHistory = [...currentState.history]

    if (context.step && context.step !== currentState.context.step) {
      newHistory.push(currentState.context.step)
    }

    const updatedState: FlowState = {
      ...currentState,
      context: { ...currentState.context, ...context },
      history: newHistory,
      lastInteraction: new Date(),
    }

    this.stateStore.set(phone, updatedState)
    this.logger.debug('Flow state updated: context', { phone, updatedState })
  }

  updateStep(phone: string, step: FlowStep): void {
    const flow = this.extractFlow(step)
    this.updateContext(phone, { flow, step })
  }

  updateContextData(phone: string, data: FlowContext['data']): void {
    const currentState = this.getState(phone)

    const updatedState: FlowState = {
      ...currentState,
      context: {
        ...currentState.context,
        data: {
          ...currentState.context.data,
          ...data,
        },
      },
    }

    this.stateStore.set(phone, updatedState)
    this.logger.debug('Flow state updated: context data', { phone, updatedState })
  }

  updateCustomer(phone: string, customer: FlowState['customer']): void {
    const currentState = this.getState(phone)

    const updatedState: FlowState = {
      ...currentState,
      customer: {
        ...currentState.customer,
        ...customer,
      },
    }

    this.stateStore.set(phone, updatedState)
    this.logger.debug('Flow state updated: customer', { phone, updatedState })
  }

  resetState(phone: string): void {
    this.initializeState(phone)
    this.logger.ok('Flow state reset', { phone })
  }

  clearAllStates(): void {
    this.stateStore.clear()
    this.logger.info('🧹 Flow states cleared')
  }

  // ###
  private initializeState(phone: string) {
    const initialState: FlowState = {
      context: { flow: FlowKeys.WELCOME, step: FlowStep.WELCOME, data: {} },
      customer: {},
      cart: [],
      history: [],
      lastInteraction: new Date(),
    }

    this.stateStore.set(phone, initialState)
    this.logger.debug('Flow state initialized', { phone, initialState })

    return initialState
  }

  private extractFlow(step: string): string {
    const [flow] = step.split('::')
    return flow.toLowerCase()
  }
}
