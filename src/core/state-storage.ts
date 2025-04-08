import { inject, singleton } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { FlowState } from '@/types/flows.js'

@singleton()
export class StateStorage {
  private readonly stateStore = new Map<string, FlowState>()
  private readonly MAX_STATES = 1_000
  private readonly STATE_EXPIRATION_TIME = 1_000 * 60 * 60 * 24 // 24h
  private readonly CLEANUP_INTERVAL = 1_000 * 60 * 60 * 12 // 12h
  private cleanupTimer: NodeJS.Timeout | null = null

  constructor(@inject(LoggerProvider) private readonly logger: LoggerProvider) {
    this.setupPeriodicCleanup()
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
    // TODO: Verifica se o limite de estados foi atingido após cada adição
    // if (this.stateStore.size > this.MAX_STATES) {
    //   this.enforceStateLimit()
    // }
  }

  public delete(phone: string): boolean {
    return this.stateStore.delete(phone)
  }

  public reset(phone: string): FlowState {
    return this.initializeState(phone)
  }

  public clear(): void {
    this.stateStore.clear()
    this.logger.info('🗑️ Todos os estados foram removidos')
  }

  public has(phone: string): boolean {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    return this.stateStore.has(phone) && !this.isStateExpired(this.stateStore.get(phone)!)
  }

  public size(): number {
    return this.stateStore.size
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

  private isStateExpired(state: FlowState): boolean {
    const currentTime = Date.now()
    const lastInteractionTime = state.lastInteraction.getTime()

    return currentTime - lastInteractionTime > this.STATE_EXPIRATION_TIME
  }

  private setupPeriodicCleanup(): void {
    if (this.cleanupTimer) clearInterval(this.cleanupTimer)

    this.cleanupTimer = setInterval(() => {
      this.logger.debug('Executando limpeza de estados expirados')
      this.cleanupExpiredStates()
    }, this.CLEANUP_INTERVAL)
  }

  private cleanupExpiredStates(): void {
    this.logger.debug('Iniciando limpeza de estados expirados')

    let expiredCount = 0
    const startTime = Date.now()
    const currentTime = Date.now()
    const expirationTime = currentTime - this.STATE_EXPIRATION_TIME

    for (const [phone, state] of this.stateStore.entries()) {
      if (state.lastInteraction.getTime() < expirationTime) {
        this.stateStore.delete(phone)
        expiredCount++
      }
    }

    if (expiredCount > 0) {
      this.logger.info(`🧹 ${expiredCount} estados expirados foram removidos`)
    }

    this.logger.debug(
      `Estados ativos: ${this.stateStore.size} | Tempo de limpeza: ${Date.now() - startTime}ms`,
    )

    // TODO: Limitar o número de estados armazenados
    // if (this.stateStore.size > this.MAX_STATES) {
    //   this.enforceStateLimit()
    // }
  }

  private enforceStateLimit(): void {
    const sortedEntries = Array.from(this.stateStore.entries()).sort(
      (a, b) => a[1].lastInteraction.getTime() - b[1].lastInteraction.getTime(),
    )

    const entriesToRemove = sortedEntries.length - this.MAX_STATES

    if (entriesToRemove <= 0) return

    for (let i = 0; i < entriesToRemove; i++) {
      this.stateStore.delete(sortedEntries[i][0])
    }

    this.logger.warn(
      `🚫 ${entriesToRemove} estados antigos foram removidos para manter o limite de ${this.MAX_STATES}`,
    )
  }
}
