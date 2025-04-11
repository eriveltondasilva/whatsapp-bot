import { inject, singleton } from 'tsyringe'

import type { StateManager } from '@/core/state-manager.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

@singleton()
export class StateCleanupService {
  private readonly MAX_STATES = 1_000
  private readonly CLEANUP_INTERVAL = 1_000 * 60 * 60 * 12 // 12h
  private cleanupTimer: NodeJS.Timeout | null = null
  private state?: StateManager

  constructor(@inject(LoggerProvider) private readonly logger: LoggerProvider) {}

  //#
  public setStateManager(state: StateManager): void {
    if (!state) throw new Error('StateManager não fornecido')
    this.state = state
  }

  public startCleanup(): void {
    this.stopCleanup()

    this.cleanupTimer = setInterval(() => {
      this.cleanupExpiredStates()
    }, this.CLEANUP_INTERVAL)
  }

  public stopCleanup(): void {
    if (!this.cleanupTimer) return

    clearInterval(this.cleanupTimer)
    this.cleanupTimer = null
  }

  //#
  private async cleanupExpiredStates(): Promise<void> {
    if (!this.state) throw new Error('StateManager não fornecido')

    this.logger.debug('Iniciando limpeza de estados expirados')

    const stateEntries = this.state.getAllStateEntries()

    if (!stateEntries.length) {
      this.logger.debug('Nenhum estado encontrado para limpeza')
      return
    }

    let expiredCount = 0
    const startTime = Date.now()

    for (const [phone, state] of stateEntries) {
      if (!this.state.isStateExpired(state)) continue

      this.state.delete(phone)
      expiredCount++

      if (expiredCount % 100 !== 0) continue
      this.logger.debug('Limpeza em andamento...')
      await new Promise((resolve) => setTimeout(resolve, 0))
    }

    const duration = Date.now() - startTime

    if (expiredCount > 0) {
      this.logger.info('🧹 Estados expirados removidos:', { expiredCount, duration })
    }

    this.logger.debug('Estados ativos restantes:', { state: this.state.getSize() })

    this.enforceStateLimit()
  }

  private enforceStateLimit(): void {
    if (!this.state) throw new Error('StateManager não fornecido')

    const currentSize = this.state.getSize()
    if (currentSize <= this.MAX_STATES) return

    this.logger.debug('Aplicando limite de estados', { currentSize, maxStates: this.MAX_STATES })

    const sortedStates = this.state
      .getAllStateEntries()
      .sort((a, b) => a[1].lastInteraction.getTime() - b[1].lastInteraction.getTime())

    const statesToDelete = currentSize - this.MAX_STATES

    if (statesToDelete <= 0) return

    for (let i = 0; i < statesToDelete; i++) {
      this.state.delete(sortedStates[i][0])
    }

    this.logger.info('🗑️ Estados removidos para manter o limite de estados:', { statesToDelete })
  }
}
