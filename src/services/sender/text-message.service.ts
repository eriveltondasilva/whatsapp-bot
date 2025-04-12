import { inject, injectable } from 'tsyringe'

import { ClientProvider } from '@/providers/client.provider.js'

import type { MessageSendStrategy } from '@/types/interfaces.js'
import type { ResponseContent } from '@/types/responses.js'

@injectable()
export class TextMessageService implements MessageSendStrategy {
  constructor(@inject(ClientProvider) private client: ClientProvider) {}

  public async send(phone: string, content: ResponseContent) {
    const client = await this.client.getClient()
    await client.sendText(phone, `[BOT]\n${content.text}` /* { delay: getDelay() } */)
  }

  public async sendErrorMessage(phone: string) {
    await this.send(phone, {
      text: '❌ Ocorreu um erro ao processar a mensagem. Por favor, tente novamente mais tarde.',
    })
  }
}
