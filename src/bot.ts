import type { Message } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ConversationManager } from '@/managers/@index.js'
import { ClientProvider, LoggerProvider } from '@/providers/@index.js'
import { MessageSender } from '@/services/@index.js'
import { isValidMessage } from '@/utils/@index.js'

@injectable()
export class WhatsappBot {
  constructor(
    @inject(ClientProvider) private client: ClientProvider,
    @inject(ConversationManager) private conversation: ConversationManager,
    @inject(MessageSender) private message: MessageSender,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  public async initialize(): Promise<void> {
    try {
      const client = await this.client.getClient()
      client.onMessage((message) => this.processMessage(message))

      this.logger.info('🤖 WhatsApp bot initialized successfully')
    } catch (error) {
      this.logger.error('Failed to initialize bot', error)
      process.exitCode = 1
    }
  }

  private async processMessage(message: Message) {
    if (!isValidMessage(message)) return

    this.logger.debug('📬 Received message', { from: message.from, body: message.body })

    try {
      const response = await this.conversation.handle(message.from, message.body || '')
      await this.message.send(message.from, response)
    } catch (error) {
      this.logger.error('Message processing error', error)
      await this.message.sendErrorMessage(message.from)
    }
  }
}
