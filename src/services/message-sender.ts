import { inject, injectable } from 'tsyringe'

import { MessageType } from '@/config/enums.js'
import { ClientProvider, LoggerProvider } from '@/providers/@index.js'
import { getDelay } from '@/utils/@index.js'

import type { ActionsMap, Response } from '@/types/index.js'


@injectable()
export class MessageSender {
  constructor(
    @inject(ClientProvider) private clientService: ClientProvider,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  public async send(phone: string, response: Response) {
    const { type, content} = response

    const sendActions: ActionsMap<MessageType> = {
      [MessageType.TEXT]: () => this.sendText(phone, content),
      [MessageType.LIST]: () => this.sendList(phone, content),
      [MessageType.IMAGE]: () => this.sendImage(phone, content),
    }

    const sendAction = sendActions[type] || sendActions[MessageType.TEXT]

    try {
      sendAction && (await sendAction())
      this.logger.info('📬 Message sent successfully', { phone, type })
    } catch (error) {
      this.logger.error('Failed to send message', { phone, type, error })
      throw error
    }
  }

  // ###
  public async sendErrorMessage(phone: string) {
    await this.sendText(phone, [
      '❌ Desculpe, ocorreu um erro ao processar sua mensagem.',
      'Por favor, tente novamente em alguns instantes.',
    ])
  }

  private async sendText(phone: string, content: string[]) {
    const client = await this.clientService.getClient()
    client.sendText(phone, content.join('\n'), { delay: getDelay() })
  }

  private async sendList(phone: string, content: string[]) {
    const [title, description, ...rows] = content

    if (!title || !rows?.length) {
      this.logger.error('Invalid list data', { title, rows })
      return
    }

    const client = await this.clientService.getClient()
    client.sendListMessage(phone, {
      buttonText: 'Clique Aqui',
      title,
      description,
      sections: this.createListSections(rows),
    })
  }

  private async sendImage(phone: string, content: string[]) {
    const [path, title = 'imagem', caption = ''] = content

    const client = await this.clientService.getClient()
    client.sendImage(phone, path, title, caption)
  }

  // ###
  private createListSections(rows: string[]) {
    if (!rows?.length) {
      this.logger.error('Empty list')
      return []
    }

    const parsedRows = rows.map((row: string) => {
      const [rowId, title, description, category = 'cardápio'] = row.split('::')
      return { rowId, title, description, category }
    })

    const groupedRows = Object.groupBy(parsedRows, (row) => row.category)

    return Object.entries(groupedRows).map(([category, items]) => ({
      title: category.toUpperCase(),
      rows: items?.map(({ rowId, title, description }) => ({ rowId, title, description })) || [],
    }))
  }
}
