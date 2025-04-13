import { inject, singleton } from 'tsyringe'

import { CLEANUP_INTERVAL, MAX_STATES } from '@/config/constants.js'
import { StateManager } from '@/core/state-manager.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

@singleton()
export class StateCleanup {
  private cleanupTimer: NodeJS.Timeout | null = null

  constructor(
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
    @inject(StateManager) private readonly stateManager: StateManager,
  ) {}

  //#
  public startPeriodicCleanup(): void {
    this.stopPeriodicCleanup()

    this.cleanupTimer = setInterval(() => this.cleanupExpiredStates(), CLEANUP_INTERVAL)
    this.logger.info('🧹 Serviço de limpeza de estados iniciado')
  }

  public stopPeriodicCleanup(): void {
    if (!this.cleanupTimer) return

    clearInterval(this.cleanupTimer)
    this.cleanupTimer = null
    this.logger.info('🛑 Serviço de limpeza de estados parado')
  }

  //#
  private async cleanupExpiredStates(): Promise<void> {
    this.logger.debug('Iniciando limpeza de estados expirados')

    const stateEntries = this.stateManager.getAllEntries()

    if (!stateEntries.length) {
      this.logger.debug('Nenhum estado encontrado para limpeza')
      return
    }

    let expiredCount = 0
    const startTime = Date.now()

    for (const [phone, state] of stateEntries) {
      if (!this.stateManager.isStateExpired(state)) continue

      this.stateManager.delete(phone)
      expiredCount++

      if (expiredCount % 100 !== 0) continue

      this.logger.debug('Limpeza em andamento...')
      await new Promise((resolve) => setTimeout(resolve, 0))
    }

    const duration = Date.now() - startTime

    if (expiredCount > 0) {
      this.logger.info('🧹 Estados expirados removidos:', { expiredCount, duration })
    }

    this.logger.debug('Estados ativos restantes:', { states: this.stateManager.getSize() })
    this.enforceStateLimit()
  }

  private enforceStateLimit(): void {
    const currentSize = this.stateManager.getSize()
    if (currentSize <= MAX_STATES) return

    this.logger.debug('Aplicando limite de estados', { currentSize, maxStates: MAX_STATES })

    const statesToDelete = currentSize - MAX_STATES

    const sortedStates = this.stateManager
      .getAllEntries()
      .sort((a, b) => a[1].lastInteraction.getTime() - b[1].lastInteraction.getTime())

    for (let i = 0; i < statesToDelete; i++) {
      this.stateManager.delete(sortedStates[i][0])
    }

    this.logger.info('🗑️ Estados removidos para manter o limite de estados:', { statesToDelete })
  }
}
