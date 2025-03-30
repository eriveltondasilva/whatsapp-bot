import { inject, singleton } from 'tsyringe'

import { LoggerProvider } from '@/providers/logger.provider.js'
import type { FlowState } from '@/types/index.js'

@singleton()
export class StateStorage {
  private readonly stateStore = new Map<string, FlowState>()
  private readonly MAX_STATES = 1_000
  private readonly STATE_EXPIRATION_TIME = 1_000 * 60 * 60 * 24 // 24h

  constructor(@inject(LoggerProvider) private readonly logger: LoggerProvider) {
    this.setupPeriodicCleanup()
  }

  //#
  public get(phone: string): FlowState | undefined {
    const state = this.stateStore.get(phone)

    if (state && this.isStateExpired(state)) {
      this.logger.info('Estado expirado, removendo', { phone })
      this.stateStore.delete(phone)
      return undefined
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

  public clear(): void {
    this.stateStore.clear()
    this.logger.info('🚫 Todos os estados foram limpos')
  }

  public size(): number {
    return this.stateStore.size
  }

  //#
  private isStateExpired(state: FlowState): boolean {
    const currentTime = new Date().getTime()
    const lastInteractionTime = state.lastInteraction.getTime()

    return currentTime - lastInteractionTime > this.STATE_EXPIRATION_TIME
  }

  private setupPeriodicCleanup(): void {
    setInterval(
      () => {
        this.cleanupExpiredStates()
      },
      this.STATE_EXPIRATION_TIME / 2, // 12h
    )
  }

  private cleanupExpiredStates(): void {
    let expiredCount = 0

    for (const [phone, state] of this.stateStore.entries()) {
      if (this.isStateExpired(state)) {
        this.stateStore.delete(phone)
        expiredCount++
      }
    }

    if (expiredCount > 0) {
      this.logger.info(`🧹 ${expiredCount} estados expirados foram removidos`)
    }

    this.logger.debug(`Estados ativos: ${this.stateStore.size}`)

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
