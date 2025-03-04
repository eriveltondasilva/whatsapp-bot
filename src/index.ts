import 'reflect-metadata'
import { container } from 'tsyringe'

import { WhatsappBot } from '@/whatsapp-bot.js'

async function bootstrap(): Promise<void> {
  const chatBot = container.resolve(WhatsappBot)
  await chatBot.initialize()
}

bootstrap()
