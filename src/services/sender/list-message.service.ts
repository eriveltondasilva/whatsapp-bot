import { inject, injectable } from 'tsyringe'

import { ClientProvider } from '@/providers/client.provider.js'

import type { ResponseContent, ResponseList } from '@/types/responses.js'
import type { MessageSendStrategy } from './message-sender.js'

@injectable()
export class ListMessageService implements MessageSendStrategy {
  constructor(@inject(ClientProvider) private client: ClientProvider) {}

  public async send(phone: string, content: ResponseContent): Promise<void> {
    if (!content.text || !content.list?.length) throw new Error('Invalid list content')

    const client = await this.client.getClient()
    await client.sendListMessage(phone, {
      buttonText: 'Clique Aqui',
      description: `[BOT]\n${content.text}`,
      sections: this.createListSections(content.list),
    })
  }

  public async sendErrorMessage(phone: string, messageError: string) {
    const client = await this.client.getClient()
    await client.sendText(phone, `[BOT]\n${messageError}`)
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
