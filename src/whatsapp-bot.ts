import { type Message, MessageType, type Whatsapp } from '@wppconnect-team/wppconnect'
import { inject, injectable } from 'tsyringe'

import { ClientManager, DialogManager } from '@/managers/index.js'
import { getDelay, isListDataValid, isValidMessage, logger } from '@/utils/index.js'

import type { ActionsMap } from './types.js'

@injectable()
export class WhatsappBot {
  private client: Whatsapp | null = null

  constructor(
    @inject(ClientManager) private clientManager: ClientManager,
    @inject(DialogManager) private dialogManager: DialogManager,
  ) {}

  // ###
  public async initialize(): Promise<void> {
    logger.info('🤖 WhatsApp bot initialized successfully 🚀')

    try {
      this.client = await this.clientManager.getClient()
      this.client.onMessage((message) => this.handleMessage(message))
    } catch (error) {
      logger.error('❌ Failed to initialize bot: %o', error)
      process.exitCode = 1
    }
  }

  private async handleMessage(message: Message): Promise<void> {
    logger.info('📬 Received message: %o', {
      from: message.from,
      body: message.body?.slice(0, 100),
    })

    if (!isValidMessage(message)) return

    try {
      const response = await this.dialogManager.handleMessage(message.from, message.body || '')
      await this.sendResponse(message.from, response)
    } catch (error) {
      logger.error('❌ Message handling error: %o', error)
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

    const actions: ActionsMap<MessageType> = {
      [MessageType.LIST]: () => this.sendList(to, content),
      [MessageType.IMAGE]: () => this.sendImage(to, content),
    }

    actions[messageType as MessageType]?.() || this.sendMessage(to, response)
  }

  private async sendMessage(to: string, message: string[]): Promise<void> {
    try {
      await this.client?.sendText(to, message.join('\n'), { delay: getDelay() })
      logger.info('📬 Message sent to: %o', { to })
    } catch (error) {
      logger.error('❌ Message sending failed: %o', { to, error })
    }
  }

  private async sendImage(to: string, content: string[]): Promise<void> {
    const [imagePath, imageName = 'Imagem', captionText = ''] = content

    try {
      await this.client?.sendImage(to, imagePath, imageName, captionText)
      logger.info('📬 Image sent to: %o', { to })
    } catch (error) {
      logger.error('❌ Image sending failed: %o', { to, error })
    }
  }

  private async sendList(to: string, content: string[]): Promise<void> {
    const [title, description, ...rowsData] = content
    if (!isListDataValid(title, rowsData)) return

    try {
      await this.client?.sendListMessage(to, {
        buttonText: 'Clique Aqui',
        title,
        description,
        delay: getDelay(),
        sections: this.createListSections(rowsData),
      })
      logger.info('📬 List sent to: %o', { to })
    } catch (error) {
      logger.error('❌ List sending failed: %o', { to, error })
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
