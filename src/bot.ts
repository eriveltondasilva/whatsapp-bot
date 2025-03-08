import type { Message } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ClientService, DialogManager } from '@/managers/index.js'
import { MessageSender } from '@/services/index.js'
import { isValidMessage, logger } from '@/utils/index.js'

export interface WhatsappBotI {
  initialize(): Promise<void>
}

@injectable()
export class WhatsappBot implements WhatsappBotI {
  constructor(
    @inject(ClientService) private clientManager: ClientService,
    @inject(DialogManager) private dialogManager: DialogManager,
    @inject(MessageSender) private messageSender: MessageSender,
  ) {}

  /*
   * Initialize bot
   */
  public async initialize(): Promise<void> {
    try {
      const client = await this.clientManager.getClient()
      client.onMessage((message) => this.processMessage(message))

      logger.info('\n🤖 WhatsApp bot initialized successfully 🚀\n')
    } catch (error) {
      logger.error('Failed to initialize bot: %o', error)
      process.exitCode = 1
    }
  }

  /*
   * Process message from WhatsApp
   */
  private async processMessage(message: Message) {
    if (!isValidMessage(message)) return

    logger.info('📬 Received message: %o', {
      from: message.from,
      body: message.body?.slice(0, 100),
    })

    try {
      const response = await this.dialogManager.handle(message.from, message.body || '')
      await this.messageSender.send(message.from, response)
    } catch (error) {
      logger.error('Message processing error: %o', error)
      await this.messageSender.sendErrorMessage(message.from)
    }
  }
}
