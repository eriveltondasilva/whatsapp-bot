import { type Message, MessageType, type Whatsapp } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ClientManager, DialogManager } from '@/managers/index.js'
import { LoggerService } from '@/services/logger-service.js'
import { isListDataValid, isValidMessage } from '@/utils/validations.js'

import type { ActionMap } from './types.js'
import { getDelay } from './utils/get-delay.js'

@injectable()
export class WhatsappBot {
  private client: Whatsapp | null = null

  constructor(
    @inject(ClientManager) private clientManager: ClientManager,
    @inject(DialogManager) private dialogManager: DialogManager,
    @inject(LoggerService) private logger: LoggerService,
  ) { }

  // ###
  public async initialize(): Promise<void> {
    try {
      this.client = await this.clientManager.getClient()
      this.client?.onMessage(this.handleMessage)
      this.logger.info('🤖 WhatsApp bot initialized successfully')
    } catch (error) {
      this.logger.error('❌ Failed to initialize bot: %o', error)
      process.exitCode = 1
    }
  }

  private async handleMessage(message: Message): Promise<void> {
    this.logger.debug('📬 Received message: %o', {
      from: message.from,
      body: message.body,
    })

    if (!isValidMessage(message)) return

    try {
      const response = await this.dialogManager.handleMessage(message.from, message.body || '')
      await this.sendResponse(message.from, response)
    } catch (error) {
      this.logger.error('❌ Message handling error: %o', error)
      await this.sendMessage(message.from, [
        '❌ Desculpe, ocorreu um erro ao processar sua mensagem.',
        'Por favor, tente novamente em alguns instantes.',
      ])
    }
  }

  // ###
  private async sendResponse(to: string, response: string[]): Promise<void> {
    if (!response.length) return

    const [messageType, ...content] = response

    const actions: ActionMap<MessageType> = {
      [MessageType.LIST]: () => this.sendList(to, content),
      [MessageType.IMAGE]: () => this.sendImage(to, content),
      _default: () => this.sendMessage(to, response),
    }

    await (actions[messageType as MessageType] || actions._default)?.();
  }

  private async sendMessage(to: string, message: string[]): Promise<void> {
    try {
      await this.client?.sendText(to, message.join('\n'), { delay: getDelay() })
      this.logger.info('✅ Message sent to: %s', to)
    } catch (error) {
      this.logger.error('❌ Message sending failed to %s: %o', to, error)
    }
  }

  private async sendImage(to: string, content: string[]): Promise<void> {
    try {
      const [imagePath, imageName = 'Imagem', captionText] = content

      await this.client?.sendImage(to, imagePath, imageName, captionText)
      this.logger.info('📬 Image sent to: %s', to)
    } catch (error) {
      this.logger.error('❌ Image sending failed to %s: %o', to, error)
    }
  }

  private async sendList(to: string, content: string[]): Promise<void> {
    const [title, description, ...rowsData] = content
    if (!isListDataValid(title, description, rowsData)) return

    try {
      await this.client?.sendListMessage(to, {
        buttonText: 'Clique Aqui',
        title: title,
        description: description,
        delay: getDelay(),
        sections: this.createListSections(rowsData),
      })
      this.logger.debug('📬 List sent to: %s', to)
    } catch (error) {
      this.logger.error('❌ List sending failed to %s: %o', to, error)
    }
  }

  // ###
  private createListSections(rows: string[]) {
    if (rows?.length === 0) return []

    const mappedRows = rows.map((row: string) => {
      const [rowId, title, description, category = 'cardápio'] = row.split('::')
      return { rowId, title, description, category }
    })

    const rowsByCategory = Object.groupBy(mappedRows, (row) => row.category)

    return Object.entries(rowsByCategory).map(([category, items]) => ({
      title: category.toUpperCase(),
      rows: items?.map(({ rowId, title, description }) => ({ rowId, title, description })),
    }))
  }
}
