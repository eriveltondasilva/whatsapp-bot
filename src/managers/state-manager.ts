import { inject, singleton } from 'tsyringe'

import { FlowKeys } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/@index.js'

import type { FlowContext, FlowState } from '@/types/index.js'

@singleton()
export class StateManager {
  private readonly stateStore = new Map<string, FlowState>()
  // private readonly MAX_STATES = 1_000
  // private readonly MAX_HISTORY_LENGTH = 10
  // private readonly STATE_EXPIRATION_TIME = 1_000 * 60 * 60 * 24 * 7 // 7 days

  constructor(@inject(LoggerProvider) private readonly logger: LoggerProvider) {}

  //#
  public getState(phone: string): FlowState {
    return this.stateStore.get(phone) || this.initializeState(phone)
  }

  public updateContext(phone: string, context: Partial<FlowContext>): FlowState {
    const currentState = this.getState(phone)

    const updatedState = this.updateState(phone, currentState, {
      context: {
        ...currentState.context,
        ...context,
        data: {
          ...currentState.context.data,
          ...context.data,
        },
      },
    })

    this.logger.debug('State updated: CONTEXT', updatedState.context)

    return updatedState
  }

  public updateStep(phone: string, step: string): FlowState {
    const flow = this.extractFlow(step)
    return this.updateContext(phone, { flow, step })
  }

  public updateData(phone: string, data: FlowContext['data']): FlowState {
    return this.updateContext(phone, { data })
  }

  public updateCustomer(phone: string, customer: Partial<FlowState['customer']>): FlowState {
    const currentState = this.getState(phone)

    const updatedState = this.updateState(phone, currentState, {
      customer: {
        ...currentState.customer,
        ...customer,
      },
    })

    this.logger.debug('State updated: CUSTOMER', updatedState.customer)

    return updatedState
  }

  public clearData(phone: string): FlowState {
    const currentState = this.getState(phone)

    const updatedState = this.updateState(phone, currentState, {
      context: {
        ...currentState.context,
        data: {},
      },
    })

    this.logger.debug('State updated: CONTEXT DATA CLEARED', updatedState.context)

    return updatedState
  }

  public resetState(phone: string): FlowState {
    this.logger.debug('State reset', { phone })
    return this.initializeState(phone)
  }

  public clearAllStates(): void {
    this.stateStore.clear()
    this.logger.info('🚫 All states cleared')
  }

  //#
  private initializeState(phone: string): FlowState {
    const initialState = {
      context: {
        flow: FlowKeys.WELCOME,
        step: FlowKeys.WELCOME,
        data: {},
        history: [],
      },
      customer: {
        name: '',
        phone: '',
        address: '',
      },
      cart: [],
      lastInteraction: new Date(),
    }

    this.stateStore.set(phone, initialState)
    this.logger.debug('State initialized', { phone })

    return initialState
  }

  private updateState(
    phone: string,
    currentState: FlowState,
    updates: Partial<FlowState>,
  ): FlowState {
    const updatedState: FlowState = {
      ...currentState,
      ...updates,
      lastInteraction: new Date(),
    }

    this.stateStore.set(phone, updatedState)
    return updatedState
  }

  private extractFlow(step: string): FlowKeys {
    const flowName = step.includes('::') ? step.split('::')[0] : step
    const isValidFlow = Object.values(FlowKeys).includes(flowName as FlowKeys)

    if (!isValidFlow) throw new Error(`Invalid flow: ${flowName}`)

    return flowName as FlowKeys
  }
}
