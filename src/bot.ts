import type { Message } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ConversationManager } from '@/core/conversation-manager.js'
import { ClientProvider } from '@/providers/client.provider.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { MessageSenderFactory } from '@/services/sender/message-sender.factory.js'
import { isValidMessage } from '@/utils/@index.js'
import { StateCleanup } from './core/state-cleanup.js'

@injectable()
export class WhatsappBot {
  private initialized = false

  constructor(
    @inject(ClientProvider) private readonly client: ClientProvider,
    @inject(ConversationManager) private readonly conversation: ConversationManager,
    @inject(MessageSenderFactory) private readonly messageSender: MessageSenderFactory,
    @inject(StateCleanup) private readonly stateCleanup: StateCleanup,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  public async initialize(): Promise<void> {
    if (this.initialized) return

    try {
      const client = await this.client.getClient()
      // TODO: Remove onAnyMessage
      client.onAnyMessage((message) => this.processMessage(message))

      this.stateCleanup.startPeriodicCleanup()
      this.initialized = true

      this.logger.info('🤖 WhatsApp bot initialized successfully')
    } catch (error) {
      this.logger.error('Failed to initialize bot', error)
      throw error
    }
  }

  public async shutdown(): Promise<void> {
    if (!this.initialized) return

    this.logger.info('🤖 WhatsApp bot shutdown successfully')

    try {
      this.initialized = false
      this.stateCleanup.stopPeriodicCleanup()
      await this.client.closeClient()
    } catch (error) {
      this.logger.error('Failed to shutdown bot', error)
      throw error
    }
  }

  //#
  private async processMessage(message: Message): Promise<void> {
    if (!message.body || !isValidMessage(message)) return

    const { from, body } = message
    this.logger.info('▶️ Process Message', { from, body })

    try {
      const { type, content } = await this.conversation.handle(from, body)
      const messageSender = this.messageSender.create(type)
      await messageSender.send(from, content)
    } catch (error) {
      this.logger.error('Message processing error:', error)
      const messageSender = this.messageSender.createDefault()
      await messageSender.sendErrorMessage(from)
    }
  }
}
