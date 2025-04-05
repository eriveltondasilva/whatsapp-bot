import { inject, injectable } from 'tsyringe'

import { MessageType } from '@/config/enums.js'
import { ClientProvider } from '@/providers/client.provider.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { getDelay } from '@/utils/@index.js'

import type { ActionsMap, ContentResponse, FlowResponse, ListResponse } from '@/types/index.js'

@injectable()
export class MessageSender {
  constructor(
    @inject(ClientProvider) private client: ClientProvider,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public async send(phone: string, response: FlowResponse): Promise<void> {
    const { type, content } = response

    const actionMap: ActionsMap<MessageType> = {
      [MessageType.TEXT]: () => this.sendText(phone, content),
      [MessageType.LIST]: () => this.sendList(phone, content),
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
    await this.sendText(phone, {
      text: [
        '❌ Desculpe, ocorreu um erro ao processar sua mensagem.',
        'Por favor, tente novamente em alguns instantes.',
      ].join('\n'),
    })
  }

  private async sendText(phone: string, content: ContentResponse): Promise<void> {
    const client = await this.client.getClient()
    await client.sendText(phone, `[BOT]\n${content.text}`, { delay: getDelay() })
  }

  private async sendList(phone: string, content: ContentResponse): Promise<void> {
    const { text, list } = content

    if (!text || !list?.length) throw new Error('Invalid list content')

    const client = await this.client.getClient()
    await client.sendListMessage(phone, {
      buttonText: 'Clique Aqui',
      description: text,
      sections: this.createListSections(list),
    })
  }

  //#
  private createListSections(list: ListResponse[]) {
    const groupedRows = Object.groupBy(list, (row) => row.category)
    console.log(groupedRows)

    return Object.entries(groupedRows).map(([category, items]) => ({
      title: category.toUpperCase(),
      rows: items?.map(({ rowId, title, description }) => ({ rowId, title, description })) || [],
    }))
  }
}
