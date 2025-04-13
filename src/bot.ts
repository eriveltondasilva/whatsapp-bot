import type { Message } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ConversationManager } from '@/core/conversation-manager.js'
import { ClientProvider } from '@/providers/client.provider.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { isValidMessage } from '@/utils/@index.js'
import { MessageSenderFactory } from './services/sender/message-sender.factory.js'

@injectable()
export class WhatsappBot {
  constructor(
    @inject(ClientProvider) private readonly client: ClientProvider,
    @inject(ConversationManager) private readonly conversation: ConversationManager,
    @inject(MessageSenderFactory) private readonly messageSenderFactory: MessageSenderFactory,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  public async initialize(): Promise<void> {
    try {
      const client = await this.client.getClient()
      // TODO: Remove onAnyMessage
      client.onAnyMessage((message) => this.processMessage(message))

      this.logger.info('🤖 WhatsApp bot initialized successfully')
    } catch (error) {
      this.logger.error('Failed to initialize bot', error)
      process.exit(1)
    }
  }

  private async processMessage(message: Message): Promise<void> {
    if (!message.body || !isValidMessage(message)) return
    this.logger.info('▶️ Process Message', { from: message.from, body: message.body })

    try {
      const { type, content } = await this.conversation.handle(message.from, message.body)

      const messageSender = this.messageSenderFactory.create(type)
      await messageSender.send(message.from, content)
    } catch (error) {
      this.logger.error('Message processing error:', error)
      const messageSender = this.messageSenderFactory.createDefault()
      await messageSender.sendErrorMessage(message.from)
    }
  }
}
