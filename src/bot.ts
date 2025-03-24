import type { Message } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ConversationManager } from '@/managers/conversation-manager.js'
import { ClientProvider, LoggerProvider } from '@/providers/@index.js'
import { MessageSender } from '@/services/@index.js'
import { isValidMessage } from '@/utils/@index.js'

@injectable()
export class WhatsappBot {
  constructor(
    @inject(ClientProvider) private clientProvider: ClientProvider,
    @inject(ConversationManager) private conversationManager: ConversationManager,
    @inject(MessageSender) private messageSender: MessageSender,
    @inject(LoggerProvider) private logger: LoggerProvider,
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

  private async processMessage(message: Message) {
    if (!message.body || !isValidMessage(message)) return

    this.logger.info('#️⃣ Process Message')
    this.logger.debug('📬 Received message', { from: message.from, body: message.body })

    try {
      const response = await this.conversationManager.handle(message.from, message.body)
      await this.messageSender.send(message.from, response)
    } catch (error) {
      this.logger.error('Message processing error', error)
      await this.messageSender.sendErrorMessage(message.from)
    }
  }
}
