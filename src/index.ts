import 'reflect-metadata'
import { container } from 'tsyringe'
import { WhatsappBot } from '@/whatsapp-bot.js'
import { LoggerService } from '@/services/logger-service.js'

async function main() {
  const logger = new LoggerService()

  try {
    const bot = container.resolve(WhatsappBot)
    await bot.init()
  } catch (error) {
    logger.error('Erro ao iniciar o bot:', error)
    process.exitCode = 1
  }
}

main()
