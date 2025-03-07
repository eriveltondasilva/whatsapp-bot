import 'reflect-metadata'
import { container } from 'tsyringe'
import { WhatsappBot } from '@/bot.js'

async function bootstrap(): Promise<void> {
  try {
    const chatBot = container.resolve(WhatsappBot)
    await chatBot.initialize()
  } catch (error) {
    console.error('❌ Failed to initialize bot: %o', error)
    process.exitCode = 1
  }
}

bootstrap()
