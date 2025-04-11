import { inject, singleton } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { StateCleanupService } from '@/services/state/state-cleanup.service.js'

import type { FlowState } from '@/types/flows.js'

@singleton()
export class StateManager {
  private readonly stateStore = new Map<string, FlowState>()
  private readonly STATE_EXPIRATION_TIME = 1_000 * 60 * 60 * 24 // 24h

  constructor(
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
    @inject(StateCleanupService) private readonly cleanupService: StateCleanupService,
  ) {
    this.cleanupService.startCleanup()
  }

  //#
  public get(phone: string): FlowState {
    const state = this.stateStore.get(phone)

    if (!state || this.isStateExpired(state)) {
      this.logger.debug(state ? 'Estado expirado' : 'Estado não encontrado, inicializando novo', {
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

    // TODO: Implementar limpeza de estados expirados ao adicionar um novo estado
    // this.cleanupService.enforceStateLimit()
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
    return !!state && !this.isStateExpired(state)
  }

  public getSize(): number {
    return this.stateStore.size
  }

  public getAllStateEntries(): [string, FlowState][] {
    return Array.from(this.stateStore.entries())
  }

  public isStateExpired(state: FlowState): boolean {
    if (!state.lastInteraction) return true

    const currentTime = Date.now()
    const lastInteractionTime = state.lastInteraction.getTime()

    return currentTime - lastInteractionTime > this.STATE_EXPIRATION_TIME
  }

  public dispose(): void {
    this.cleanupService.stopCleanup()
    this.clearAllStates()
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
