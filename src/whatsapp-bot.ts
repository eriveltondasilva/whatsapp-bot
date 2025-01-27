import type { Message, Whatsapp } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ClientManager, DialogManager } from '@/managers/index.js'
import { LoggerService } from '@/services/logger-service.js'
import { isValidMessage } from '@/utils/validations.js'
import { getDelay } from './utils/get-delay.js'

@injectable()
export class WhatsappBot {
  private client: Whatsapp | null = null

  constructor(
    @inject(ClientManager) private clientManager: ClientManager,
    @inject(DialogManager) private dialogManager: DialogManager,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  // ###
  public async initialize(): Promise<void> {
    this.client = await this.clientManager.getClient()
    this.client.onMessage((message) => this.handleMessage(message))
  }

  private async handleMessage(message: Message): Promise<void> {
    this.logger.debug('📬 Received message: %o', {
      from: message.from,
      body: message.body,
    })

    // TODO: remover a validação
    if (!message.from.includes(process.env.INGRID_NUMERO || '')) return
    if (!isValidMessage(message) || !message.body) {
      this.logger.debug('📬 Ignored invalid message: %o', {
        from: message.from,
        body: message.body,
      })
      return
    }

    const response = await this.dialogManager.handleMessage(message.from, message.body)

    if (!response) return

    await this.sendMessage(message.from, response)
  }

  private async sendMessage(to: string, message: string[]): Promise<void> {
    try {
      await this.client?.sendText(to, message.join('\n'), {
        delay: getDelay(),
      })
      this.logger.debug('📬 Message sent to: %s', to)
    } catch (error) {
      this.logger.error('❌ Failed to send message to %s: %o', to, error)
    }
  }
}
