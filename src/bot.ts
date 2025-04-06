import type { Message } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ConversationManager } from '@/core/conversation-manager.js'
import { ClientProvider } from '@/providers/client.provider.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { MessageSender } from '@/services/message-sender.service.js'
import { isValidMessage } from '@/utils/@index.js'

@injectable()
export class WhatsappBot {
  constructor(
    @inject(ClientProvider) private readonly clientProvider: ClientProvider,
    @inject(ConversationManager) private readonly conversationManager: ConversationManager,
    @inject(MessageSender) private readonly messageSender: MessageSender,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  public async initialize(): Promise<void> {
    try {
      const client = await this.clientProvider.getClient()
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

    this.logger.info('#️⃣ Process Message')
    this.logger.debug(' Received message', { from: message.from, body: message.body })

    try {
      const response = await this.conversationManager.handle(message.from, message.body)
      await this.messageSender.send(message.from, response)
    } catch (error) {
      this.logger.error('Message processing error', error)
      await this.messageSender.sendErrorMessage(message.from)
    }
  }
}
