import { inject, injectable } from 'tsyringe'

import { MessageType } from '@/config/enums.js'
import { ClientProvider } from '@/providers/client.provider.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { getDelay } from '@/utils/@index.js'

import type { ActionsMap, Response } from '@/types/index.js'

@injectable()
export class MessageSender {
  constructor(
    @inject(ClientProvider) private client: ClientProvider,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public async send(phone: string, response: Response): Promise<void> {
    const { type, content } = response

    const actionMap: ActionsMap<MessageType> = {
      [MessageType.TEXT]: () => this.sendText(phone, content),
      [MessageType.LIST]: () => this.sendList(phone, content),
      [MessageType.IMAGE]: () => this.sendImage(phone, content),
    } as const

    const action = actionMap[type]

    try {
      action && (await action())

      this.logger.debug('📬 Mensagem enviada com sucesso', { phone, type })
    } catch (error) {
      this.logger.error('Failed to send message', { phone, type, error })
      throw error
    }
  }

  //#
  public async sendErrorMessage(phone: string): Promise<void> {
    await this.sendText(phone, [
      '❌ Desculpe, ocorreu um erro ao processar sua mensagem.',
      'Por favor, tente novamente em alguns instantes.',
    ])
  }

  private async sendText(phone: string, content: string[]): Promise<void> {
    const client = await this.client.getClient()
    await client.sendText(phone, `[BOT]\n${content.join('\n')}`, { delay: getDelay() })
  }

  private async sendList(phone: string, content: string[]): Promise<void> {
    const [title, description, ...rows] = content

    if (!title || !rows.length) throw new Error('Dados de lista inválidos')

    const client = await this.client.getClient()
    await client.sendListMessage(phone, {
      buttonText: 'Clique Aqui',
      title: `[BOT]\n${title}`,
      description,
      sections: this.createListSections(rows),
    })
  }

  private async sendImage(phone: string, content: string[]): Promise<void> {
    const [path, title = 'imagem', caption = ''] = content

    if (!path) throw new Error('Caminho da imagem não fornecido')

    const client = await this.client.getClient()
    await client.sendImage(phone, path, title, caption)
  }

  //#
  private createListSections(rows: string[]) {
    if (!rows.length) throw new Error('Lista vazia')

    const parsedRows = rows.map((row: string) => {
      const parts = row.split('::')
      return {
        rowId: parts[0] || '',
        title: parts[1] || '',
        description: parts[2] || '',
        category: parts[3] || 'cardápio',
      }
    })

    const groupedRows = Object.groupBy(parsedRows, (row) => row.category)

    return Object.entries(groupedRows).map(([category, items]) => ({
      title: category.toUpperCase(),
      rows: items?.map(({ rowId, title, description }) => ({ rowId, title, description })) || [],
    }))
  }
}
