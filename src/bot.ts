import type { Message } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ConversationManager } from '@/core/conversation-manager.js'
import { ClientProvider } from '@/providers/client.provider.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { isValidMessage } from '@/utils/@index.js'
import { MessageType } from './config/enums.js'

import { MessageSender } from '@/services/sender/message-sender.js'
import { ListMessageService } from './services/sender/list-message.service.js'
import { TextMessageService } from './services/sender/text-message.service.js'

@injectable()
export class WhatsappBot {
  constructor(
    @inject(ClientProvider) private readonly clientProvider: ClientProvider,
    @inject(ConversationManager) private readonly conversation: ConversationManager,
    @inject(MessageSender) private readonly messageSender: MessageSender,
    @inject(TextMessageService) private readonly textMessageService: TextMessageService,
    @inject(ListMessageService) private readonly listMessageService: ListMessageService,
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
      const { type, content } = await this.conversation.handle(message.from, message.body)

      const sender = type === MessageType.LIST ? this.textMessageService : this.listMessageService

      this.messageSender.set(sender)
      await this.messageSender.send(message.from, content)
    } catch (error) {
      this.logger.error('Message processing error', error)
      await this.messageSender.sendErrorMessage(message.from)
    }
  }
}
