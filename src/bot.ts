import type { Message, Whatsapp } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ClientManager, DialogManager } from '@/managers/index.js'
import { MessageSender } from '@/services/message-sender.js'
import { isValidMessage, logger } from '@/utils/index.js'

@injectable()
export class WhatsappBot {
  private client: Whatsapp | null = null

  constructor(
    @inject(ClientManager) private clientManager: ClientManager,
    @inject(DialogManager) private dialogManager: DialogManager,
    @inject(MessageSender) private messageSender: MessageSender,
  ) { }

  // ###
  public async initialize(): Promise<void> {
    try {
      this.client = await this.clientManager.createClient()
      this.setupMessageListener()

      logger.info('\n🤖 WhatsApp bot initialized successfully 🚀\n')
    } catch (error) {
      logger.error('❌ Failed to initialize bot: %o', error)
      process.exitCode = 1
    }
  }

  // ###
  private setupMessageListener(): void {
    this.client?.onMessage(async (message) => {
      try {
        await this.processMessage(message)
      } catch (error) {
        logger.error('❌ Message processing error: %o', error)

        if (!this.client) return

        await this.messageSender.sendErrorMessage(this.client, message.from)
      }
    })
  }

  private async processMessage(message: Message): Promise<void> {
    if (!isValidMessage(message)) return

    logger.info('📬 Received message: %o', {
      from: message.from,
      body: message.body?.slice(0, 100),
    })

    const response = await this.dialogManager.handle(message.from, message.body || '')
    await this.sendResponse(message, response)

  }

  private async sendResponse(message: Message, response: string[]): Promise<void> {
    if (!this.client || !response) return

    try {
      await this.messageSender.send(this.client, message.from, response);
    } catch (error) {
      logger.error('❌ Failed to send response: %o', error)

      if (!this.client) return
      await this.messageSender.sendErrorMessage(this.client, message.from)
    }
  }

}
