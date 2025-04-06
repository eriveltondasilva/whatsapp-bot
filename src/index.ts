import 'reflect-metadata'
import { container } from 'tsyringe'

import { ClientProvider } from '@/providers/client.provider.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { WhatsappBot } from './bot.js'

const PROCESS_EVENTS = {
  SIGINT: 'SIGINT',
  UNCAUGHT_EXCEPTION: 'uncaughtException',
  UNHANDLED_REJECTION: 'unhandledRejection',
} as const

function setupProcessHandlers(): void {
  const logger = container.resolve(LoggerProvider)

  process.on(PROCESS_EVENTS.UNCAUGHT_EXCEPTION, (error) => {
    logger.error('Uncaught exception', error)
    process.exit(1)
  })

  process.on(PROCESS_EVENTS.UNHANDLED_REJECTION, (reason) => {
    logger.error('Unhandled rejection', reason)
  })

  process.on(PROCESS_EVENTS.SIGINT, async () => {
    logger.info('🔴 Shutting down bot...')

    try {
      const client = container.resolve(ClientProvider)
      logger.info('🤖 Bot shutdown successfully.')

      await client.closeClient()

      process.exit(0)
    } catch (error) {
      logger.error('Failed to shutdown bot', error)
      process.exit(1)
    }
  })
}

async function bootstrap(): Promise<void> {
  const logger = container.resolve(LoggerProvider)
  logger.info('🟢 Initializing bot...')

  setupProcessHandlers()

  try {
    const bot = container.resolve(WhatsappBot)
    await bot.initialize()
  } catch (error) {
    logger.error('Failed to initialize bot', error)
    process.exitCode = 1
  }
}

bootstrap()
