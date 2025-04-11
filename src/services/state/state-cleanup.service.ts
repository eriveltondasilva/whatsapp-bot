import { inject, singleton } from 'tsyringe'

import { StateManager } from '@/core/state-manager.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

@singleton()
export class StateCleanupService {
  private readonly MAX_STATES = 1_000
  private readonly CLEANUP_INTERVAL = 1_000 * 60 * 60 * 12 // 12h
  private cleanupTimer: NodeJS.Timeout | null = null

  constructor(
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
    @inject(StateManager) private readonly stateStorage: StateManager,
  ) {}

  //#
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
  private cleanupExpiredStates(): void {
    this.logger.debug('Iniciando limpeza de estados expirados')

    const stateEntries = this.stateStorage.getAllStateEntries()

    if (!stateEntries.length) {
      this.logger.debug('Nenhum estado encontrado para limpeza')
      return
    }

    let expiredCount = 0
    const startTime = Date.now()

    for (const [phone, state] of stateEntries) {
      if (!this.stateStorage.isStateExpired(state)) continue

      this.stateStorage.delete(phone)
      expiredCount++
    }

    const duration = Date.now() - startTime

    if (expiredCount > 0) {
      this.logger.info('🧹 Estados expirados removidos:', { expiredCount, duration })
    }

    this.logger.debug('Estados ativos restantes:', { state: this.stateStorage.getSize() })

    this.enforceStateLimit()
  }

  private enforceStateLimit(): void {
    if (this.stateStorage.getSize() <= this.MAX_STATES) return

    const sortedStates = this.stateStorage
      .getAllStateEntries()
      .sort((a, b) => a[1].lastInteraction.getTime() - b[1].lastInteraction.getTime())

    const statesToDelete = sortedStates.length - this.MAX_STATES

    if (statesToDelete <= 0) return

    for (let i = 0; i < statesToDelete; i++) {
      this.stateStorage.delete(sortedStates[i][0])
    }

    this.logger.info('🗑️ Estados removidos para manter o limite de estados:', { statesToDelete })
  }
}
