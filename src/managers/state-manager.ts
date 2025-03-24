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

  constructor(@inject(LoggerProvider) private readonly logger: LoggerProvider) {}

  //#
  getState(phone: string): FlowState {
    if (!this.stateStore.has(phone)) {
      return this.initializeState(phone)
    }

    const state = this.stateStore.get(phone) as FlowState
    this.logger.debug('State requested')

    return state
  }

  updateContext(phone: string, context: Partial<FlowContext>): FlowState {
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

    return updatedState
  }

  updateStep(phone: string, step: string): FlowState {
    const flow = this.extractFlow(step)
    return this.updateContext(phone, { flow, step })
  }

  updateContextData(phone: string, data: FlowContext['data']): FlowState {
    const currentState = this.getState(phone)

    const newContextData = {
      ...currentState.context.data,
      ...data,
    }

    const updatedState: FlowState = {
      ...currentState,
      context: {
        ...currentState.context,
        data: newContextData,
      },
      lastInteraction: new Date(),
    }

    this.stateStore.set(phone, updatedState)
    this.logger.debug('State updated: CONTEXT DATA', { newContextData })

    return updatedState
  }

  updateCustomer(phone: string, customer: Partial<FlowState['customer']>): FlowState {
    const currentState = this.getState(phone)

    const newCustomer = {
      ...currentState.customer,
      ...customer,
    }

    const updatedState: FlowState = {
      ...currentState,
      customer: newCustomer,
      lastInteraction: new Date(),
    }

    this.stateStore.set(phone, updatedState)
    this.logger.debug('State updated: CUSTOMER', { newCustomer })

    return updatedState
  }

  resetState(phone: string): FlowState {
    const initialState = this.initializeState(phone)
    this.logger.ok('State reset', { phone })
    return initialState
  }

  clearAllStates(): void {
    this.stateStore.clear()
    this.logger.info('🚫 All states cleared')
  }

  // ###
  private initializeState(phone: string) {
    const initialState: FlowState = {
      context: {
        flow: FlowKeys.WELCOME,
        step: FlowKeys.WELCOME,
        data: {},
      },
      customer: {
        name: '',
        phone: '',
        address: '',
      },
      cart: [],
      history: [],
      lastInteraction: new Date(),
    }

    this.stateStore.set(phone, initialState)
    this.logger.debug('State initialized', { phone })

    return initialState
  }

  private extractFlow(step: string): FlowKeys {
    const flowName = step.includes('::') ? step.split('::')[0] : step
    const isValidFlow = Object.values(FlowKeys).includes(flowName as FlowKeys)

    if (!isValidFlow) throw new Error(`Invalid flow: ${flowName}`)

    return flowName as FlowKeys
  }
}
