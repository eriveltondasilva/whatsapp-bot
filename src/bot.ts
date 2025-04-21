import type { Message } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ConversationManager } from '@/core/conversation-manager.js'
import { ClientProvider } from '@/providers/client.provider.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { ListMessageService } from '@/services/sender/list-message.service.js'
import { isValidMessage } from '@/utils/@index.js'
import { StateCleanup } from './core/state-cleanup.js'

@injectable()
export class WhatsappBot {
  private initialized = false

  constructor(
    @inject(ClientProvider) private readonly client: ClientProvider,
    @inject(ConversationManager) private readonly conversation: ConversationManager,
    @inject(ListMessageService) private readonly messageSender: ListMessageService,
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

    try {
      this.initialized = false
      this.stateCleanup.stopPeriodicCleanup()

      this.logger.info('🤖 WhatsApp bot shutdown successfully')
      this.client.closeClient()
    } catch (error) {
      this.logger.error('Failed to shutdown bot', error)
      throw error
    }
  }

  //#
  private async processMessage(message: Message): Promise<void> {
    if (!message.body || !isValidMessage(message)) return

    const { from, body } = message
    this.logger.info(`#️⃣ ${this.constructor.name}`, { from, body })

    const client = await this.client.getClient()
    await client.sendText(from, '[BOT] Olá, eu sou o Bot do Erivelton. Como posso te ajudar?')
    await client.sendListMessage(from, {
      buttonText: 'Click here',
      description: '[BOT] Choose one option',
      sections: [
        {
          title: 'Section 1',
          rows: [
            {
              rowId: 'my_custom_id',
              title: 'Test 1',
              description: 'Description 1',
            },
            {
              rowId: '2',
              title: 'Test 2',
              description: 'Description 2',
            },
          ],
        },
      ],
    })

    // try {
    //   this.logger.info('💬 Message sent:', { type })
    //   const { type, content } = await this.conversation.handle(from, body)
    //   const messageSender = this.messageSender.create(type)
    //   await this.messageSender.send(from, content)
    // } catch (error) {
    //   this.logger.error('Erro no processamento da mensagem:', error)
    //   const messageSender = this.messageSender.createDefault()
    //   await messageSender.sendErrorMessage(from)
    // }
  }
}
