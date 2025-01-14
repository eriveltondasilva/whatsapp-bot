import {
  type Message,
  type Whatsapp,
  create,
} from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { Delay } from './config/enums.js'
import { PHONE_NUMBER, SESSION_NAME } from './config/env.js'
import { DialogManager } from './dialog-manager.js'
import { LoggerService } from './services/logger-service.js'
import { isValidMessage } from './utils/validations.js'

@injectable()
export class WhatsappBot {
  constructor(
    private client: Whatsapp,
    @inject(LoggerService) private logger: LoggerService,
    @inject(DialogManager) private dialog: DialogManager,
  ) {}

  async init() {
    try {
      this.client = await create({
        session: SESSION_NAME,
        phoneNumber: PHONE_NUMBER,
      })

      // TODO: trocar para onMessage
      this.client.onAnyMessage((message) => this.handleMessage(message))

      // TODO: trocar para logger
      console.log('🚀 Bot inicializado com sucesso!')
    } catch (error) {
      this.logger.error('❌ Erro ao inicializar bot:', error)
      throw error
    }
  }

  private async handleMessage(message: Message) {
    // TODO: remover
    console.log('\n▶️ WhatsappBot.handleMessage')
    console.log('📬 Mensagem recebida:', message.body)

    // TODO: remover if abaixo
    if (message.body?.toLowerCase() !== 't') return
    if (!this.client || !isValidMessage(message)) return

    const response = await this.dialog.handleMessage(message.from, message.body)

    if (!response) return

    await this.client.sendText(PHONE_NUMBER, response, {
      delay: Delay.DEFAULT,
    })
  }
}
