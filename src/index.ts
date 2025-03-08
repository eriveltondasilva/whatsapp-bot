import 'reflect-metadata'
import { container } from 'tsyringe'

import { WhatsappBot } from '@/bot.js'
import { ClientService } from '@/managers/index.js'
import { logger } from '@/utils/index.js'

/*
 * Bootstrap the bot.
 */
async function bootstrap(): Promise<void> {
  logger.info('🤖 Initializing bot...')

  try {
    setupProcessHandlers()

    const bot = container.resolve(WhatsappBot)
    await bot.initialize()

    logger.info('🤖 Bot initialized successfully.')
  } catch (error) {
    console.error('❌ Failed to initialize bot: %o', error)
    process.exitCode = 1
  }
}

/*
 * Setup process handlers to handle exit signals and uncaught exceptions.
 */
function setupProcessHandlers(): void {
  // Handle uncaught exceptions and unhandled rejections
  process.on('uncaughtException', (error) => {
    logger.error('❌ Uncaught exception: %o', error)
    process.exit(1)
  })

  process.on('unhandledRejection', (reason) => {
    logger.error('❌ Unhandled rejection: %o', reason)
  })

  // Handle SIGINT signals
  process.on('SIGINT', async () => {
    logger.info('📴 Shutting down bot...')

    try {
      const client = container.resolve(ClientService)
      await client.closeClient()

      logger.info('🤖 Bot shutdown successfully.')
      process.exit(0)
    } catch (error) {
      logger.error('❌ Failed to shutdown bot: %o', error)
      process.exit(1)
    }
  })
}

bootstrap()
