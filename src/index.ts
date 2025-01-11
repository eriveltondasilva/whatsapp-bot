import 'reflect-metadata'
import { container } from 'tsyringe'
import { WhatsappBot } from './whatsapp-bot.js'

async function main() {
  try {
    const bot = container.resolve(WhatsappBot)
    await bot.init()

    console.log('Bot da Pizzaria está online e pronto para atender pedidos! 🍕')
  } catch (error) {
    console.error('Erro ao iniciar o bot:', error)
    process.exitCode = 1
  }
}

main()
