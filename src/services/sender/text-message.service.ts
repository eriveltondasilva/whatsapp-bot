import { inject, injectable } from 'tsyringe'

import { ClientProvider } from '@/providers/client.provider.js'
import { getDelay } from '@/utils/get-delay.js'

import type { ResponseContent } from '@/types/responses.js'
import type { MessageSendStrategy } from './message-sender.js'

@injectable()
export class TextMessageService implements MessageSendStrategy {
  constructor(@inject(ClientProvider) private client: ClientProvider) {}

  public async send(phone: string, content: ResponseContent) {
    const client = await this.client.getClient()
    await client.sendText(phone, `[BOT]\n${content.text}`, { delay: getDelay() })
  }

  public async sendErrorMessage(phone: string, messageError: string) {
    const client = await this.client.getClient()
    await client.sendText(phone, `[BOT]\n${messageError}`)
  }
}
