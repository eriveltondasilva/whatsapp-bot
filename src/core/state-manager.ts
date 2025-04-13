import { inject, singleton } from 'tsyringe'

import { STATE_EXPIRATION_TIME } from '@/config/constants.js'
import { Flows } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { StateStore } from '@/services/state/state-store.service.js'

import type { FlowState } from '@/types/flows.js'

const Message = {
  EXPIRED: 'Estado expirado, inicializando estado',
  NOT_INITIALIZED: 'Estado não encontrado, inicializando estado',
}

@singleton()
export class StateManager {
  constructor(
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
    @inject(StateStore) private readonly stateStore: StateStore,
  ) {}

  //#
  public get(phone: string): FlowState {
    const state = this.stateStore.get(phone)

    if (!state || this.isStateExpired(state)) {
      this.logger.debug(state ? Message.EXPIRED : Message.NOT_INITIALIZED, {
        phone,
      })
      return this.initializeState(phone)
    }

    return state
  }

  public set(phone: string, currentState: FlowState): void {
    const updatedState = {
      ...currentState,
      lastInteraction: new Date(),
    }

    this.stateStore.set(phone, updatedState)
  }

  public delete(phone: string): boolean {
    return this.stateStore.delete(phone)
  }

  public reset(phone: string): FlowState {
    this.delete(phone)
    return this.initializeState(phone)
  }

  public clearAllStates(): void {
    this.stateStore.clear()
    this.logger.info('🗑️ Todos os estados foram removidos')
  }

  public has(phone: string): boolean {
    const state = this.stateStore.get(phone)
    return Boolean(state && !this.isStateExpired(state))
  }

  public getSize(): number {
    return this.stateStore.getSize()
  }

  public getAllEntries(): [string, FlowState][] {
    return this.stateStore.getAllEntries()
  }

  public isStateExpired(state: FlowState): boolean {
    if (!state.lastInteraction) return true

    const currentTime = Date.now()
    const lastInteractionTime = state.lastInteraction.getTime()

    return currentTime - lastInteractionTime > STATE_EXPIRATION_TIME
  }

  //#
  private initializeState(phone: string): FlowState {
    const initialState: FlowState = {
      context: {
        flow: Flows.WELCOME,
        data: {},
        history: [],
      },
      customer: {
        name: '',
        address: '',
        phone,
      },
      cart: [],
      lastInteraction: new Date(),
    }

    this.stateStore.set(phone, initialState)
    return initialState
  }
}
