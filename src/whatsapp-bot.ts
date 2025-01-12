import {
  type Message,
  type Whatsapp,
  create,
} from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { PHONE_NUMBER, SESSION_NAME } from './config/env.js'
import { DialogManager } from './dialog-manager.js'
import { LoggerService } from './services/logger-service.js'
import { isValidMessage } from './utils/validations.js'

@injectable()
export class WhatsappBot {
  constructor(
    private client: Whatsapp | null,
    @inject(LoggerService) private logger: LoggerService,
    @inject(DialogManager) private dialogManager: DialogManager,
  ) {}

  async init() {
    try {
      this.client = await create({
        session: SESSION_NAME,
        phoneNumber: PHONE_NUMBER,
      })

      this.client.onMessage((message) => this.handleMessage(message))

      this.logger.info('🚀 Bot inicializado com sucesso!')
    } catch (error) {
      this.logger.error('❌ Erro ao inicializar bot:', error)
      throw error
    }
  }

  private async handleMessage(message: Message) {
    try {
      if (!this.client || !isValidMessage(message.body)) return

      const response = await this.dialogManager.handleMessage(
        message.from,
        message.body as string,
      )

      await this.client.sendText(message.from, response)
    } catch (error) {
      this.logger.error('Erro ao processar mensagem:', error)
      if (!this.client) return

      await this.client.sendText(
        message.from,
        'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.',
      )
    }
  }
}
