import 'reflect-metadata'
import { container } from 'tsyringe'

import { WhatsappBot } from '@/whatsapp-bot.js'

async function bootstrap(): Promise<void> {
  const whatsappBot = container.resolve(WhatsappBot)
  await whatsappBot.initialize()
}

bootstrap()
