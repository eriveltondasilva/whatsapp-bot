import type { Message } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { Delay } from '@/config/enums.js'
import { PHONE_NUMBER } from '@/config/env.js'
import { ClientManager, DialogManager } from '@/managers/index.js'
import { LoggerService } from '@/services/logger-service.js'
import { isValidMessage } from '@/utils/validations.js'

@injectable()
export class WhatsappBot {
  constructor(
    @inject(ClientManager) private clientManager: ClientManager,
    @inject(LoggerService) private logger: LoggerService,
    @inject(DialogManager) private dialogManager: DialogManager,
  ) {}

  public async init(): Promise<void> {
    try {
      const client = await this.clientManager.getClient()

      // TODO: trocar para onMessage
      client.onAnyMessage((message) => this.handleMessage(message))

      this.logger.info('🚀 Bot inicializado com sucesso!')
    } catch (error) {
      this.logger.error('❌ Erro ao inicializar bot:')
      this.logger.error(`${error}`)
      throw error
    }
  }

  private async handleMessage(message: Message): Promise<void> {
    this.logger.info('📬 Mensagem recebida:', message.body)

    // TODO: remover if abaixo, para testes
    if (message.body?.toLowerCase() !== 't') return
    if (!isValidMessage(message)) {
      this.logger.debug('📬 Mensagem inválida ignorada: %o', {
        from: message.from,
        body: message.body,
      })
      return
    }

    this.logger.debug('📬 Enviando mensagem para o cliente...')
    const response = await this.dialogManager.handleMessage(
      message.from,
      message.body,
    )
    if (!response) return

    await this.sendMessage(message.from, response)
  }

  private async sendMessage(to: string, message: string): Promise<void> {
    const client = await this.clientManager.getClient()

    // TODO: trocar PHONE_NUMBER para parâmetro "to"
    await client.sendText(PHONE_NUMBER, message, {
      delay: Delay.DEFAULT,
    })
    this.logger.info('📬 Mensagem enviada para o cliente:', to)
  }
}
