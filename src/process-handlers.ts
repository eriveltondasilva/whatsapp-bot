import type { LoggerProvider } from '@/providers/logger.provider.js'
import type { WhatsappBot } from './bot.js'

const PROCESS_EVENTS = {
  SIGINT: 'SIGINT',
  SIGTERM: 'SIGTERM',
  UNCAUGHT_EXCEPTION: 'uncaughtException',
  UNHANDLED_REJECTION: 'unhandledRejection',
} as const

export function setupProcessHandlers(bot: WhatsappBot, logger: LoggerProvider): void {
  const shutdownHandler = async (signal: string): Promise<void> => {
    logger.info(`🔴 Desligando o bot devido ao sinal ((${signal}))...`)

    try {
      await bot.shutdown()
      process.exit(0)
    } catch (error) {
      logger.error('Falha ao desligar o bot\n', error)
      process.exit(1)
    }
  }

  process.on(PROCESS_EVENTS.UNCAUGHT_EXCEPTION, (error) => {
    logger.error('Exceção não capturada:', error);
    shutdownHandler(PROCESS_EVENTS.UNCAUGHT_EXCEPTION);
  })

  process.on(PROCESS_EVENTS.UNHANDLED_REJECTION, (reason) => {
    logger.error('Rejeição não tratada:', reason);
  })

  //#
  process.on(PROCESS_EVENTS.SIGINT, () => shutdownHandler(PROCESS_EVENTS.SIGINT))
  process.on(PROCESS_EVENTS.SIGTERM, () => shutdownHandler(PROCESS_EVENTS.SIGTERM))
}
