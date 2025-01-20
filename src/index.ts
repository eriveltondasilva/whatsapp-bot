import 'reflect-metadata'
import { container } from 'tsyringe'

import { LoggerService } from '@/services/index.js'
import { WhatsappBot } from '@/whatsapp-bot.js'

async function bootstrap(): Promise<void> {
  const logger = new LoggerService()
  const whatsappBot = container.resolve(WhatsappBot)

  try {
    await whatsappBot.initialize()
    logger.info('🚀 Bot successfully initialized!')
  } catch (error) {
    logger.error('❌ Bot initialization failed:', error)
    process.exitCode = 1
  }
}

bootstrap()
