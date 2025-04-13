import 'reflect-metadata'
import { container } from 'tsyringe'

import { LoggerProvider } from '@/providers/logger.provider.js'
import { WhatsappBot } from './bot.js'
import { setupProcessHandlers } from './process-handlers.js'

async function bootstrap(): Promise<void> {
  const logger = container.resolve(LoggerProvider)
  logger.info('🟢 Initializing bot...')

  try {
    const bot = container.resolve(WhatsappBot)
    setupProcessHandlers(bot, logger)

    await bot.initialize()
  } catch (error) {
    logger.error('Failed to bootstrap application\n', error)
    process.exit(1)
  }
}

bootstrap()
