import { inject, injectable } from 'tsyringe'

import { ClientProvider } from '@/providers/client.provider.js'

import type { MessageSendStrategy } from '@/types/interfaces.js'
import type { ResponseContent, ResponseList } from '@/types/responses.js'

@injectable()
export class ListMessageService implements MessageSendStrategy {
  constructor(@inject(ClientProvider) private client: ClientProvider) {}

  public async send(phone: string, content: ResponseContent) {
    // if (!content.text || !content.list?.length) throw new Error('Invalid list content')

    console.log('content', content)

    const client = await this.client.getClient()
    // await client.sendText(phone, `[BOT]\n${content.text}`)
    await client
      .sendListMessage(phone, {
        buttonText: 'Click here',
        description: 'Choose one option',
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
      .then(console.log)
      .catch(console.error)

    // await client.sendListMessage(phone, {
    //   buttonText: 'Clique Aqui',
    //   description: `[BOT]\n${content.text}`,
    //   sections: this.createListSections(content.list),
    // })
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
