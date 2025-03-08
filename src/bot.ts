import type { Message } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ConversationManager } from '@/managers/index.js'
import { ClientProvider, LoggerProvider } from '@/providers/index.js'
import { MessageSender } from '@/services/index.js'
import { isValidMessage } from '@/utils/@index.js'

export interface WhatsappBotI {
  initialize(): Promise<void>
}

@injectable()
export class WhatsappBot implements WhatsappBotI {
  constructor(
    @inject(ClientProvider) private client: ClientProvider,
    @inject(ConversationManager) private conversation: ConversationManager,
    @inject(MessageSender) private message: MessageSender,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) { }

  /*
   * Initialize bot
   */
  public async initialize(): Promise<void> {
    try {
      const client = await this.client.getClient()
      client.onMessage((message) => this.processMessage(message))

      this.logger.info('\n🤖 WhatsApp bot initialized successfully 🚀\n')
    } catch (error) {
      this.logger.error('Failed to initialize bot: %o', error)
      process.exitCode = 1
    }
  }

  /*
   * Process message from WhatsApp
   */
  private async processMessage(message: Message) {
    if (!isValidMessage(message)) return

    this.logger.info('📬 Received message: %o', {
      from: message.from,
      body: message.body?.slice(0, 100),
    })

    try {
      const response = await this.conversation.handle(message.from, message.body || '')
      await this.message.send(message.from, response)
    } catch (error) {
      this.logger.error('Message processing error: %o', error)
      await this.message.sendErrorMessage(message.from)
    }
  }
}
