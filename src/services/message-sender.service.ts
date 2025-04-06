import { inject, injectable } from 'tsyringe'

import { MessageType } from '@/config/enums.js'
import { ClientProvider } from '@/providers/client.provider.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { getDelay } from '@/utils/@index.js'

import type { FlowResponse } from '@/types/flows.js'
import type { ResponseContent, ResponseList } from '@/types/responses.js'

@injectable()
export class MessageSender {
  constructor(
    @inject(ClientProvider) private client: ClientProvider,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public async send(phone: string, response: FlowResponse) {
    const { type, content } = response

    const actionMap = {
      [MessageType.TEXT]: () => this.sendText(phone, content),
      [MessageType.LIST]: () => this.sendList(phone, content),
    } as const

    try {
      const action = actionMap[type as MessageType]
      action && (await action())

      this.logger.debug('📬 Mensagem enviada com sucesso', { phone, type })
    } catch (error) {
      this.logger.error('Failed to send message', { phone, type, error })
      throw error
    }
  }

  //#
  public async sendErrorMessage(phone: string) {
    await this.sendText(phone, {
      text: [
        '❌ Desculpe, ocorreu um erro ao processar sua mensagem.',
        'Por favor, tente novamente em alguns instantes.',
      ].join('\n'),
    })
  }

  private async sendText(phone: string, content: ResponseContent) {
    const client = await this.client.getClient()
    await client.sendText(phone, `[BOT]\n${content.text}`, { delay: getDelay() })
  }

  private async sendList(phone: string, content: ResponseContent) {
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
  private createListSections(list: ResponseList[]) {
    const groupedRows = Object.groupBy(list, (row) => row.category)

    return Object.entries(groupedRows).map(([category, items]) => ({
      title: category.toUpperCase(),
      rows: items?.map(({ rowId, title, description }) => ({ rowId, title, description })),
    }))
  }
}
