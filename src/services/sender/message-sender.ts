import type { ResponseContent } from '@/types/responses.js'

export interface MessageSendStrategy {
  send(phone: string, content: ResponseContent): Promise<void>
  sendErrorMessage(phone: string, messageError: string): Promise<void>
}

export class MessageSender {
  private strategy?: MessageSendStrategy

  public set(strategy: MessageSendStrategy) {
    if (!strategy) throw new Error('Strategy is required')
    this.strategy = strategy
  }

  public async send(phone: string, content: ResponseContent) {
    if (!this.strategy) throw new Error('Strategy is not set')
    await this.strategy.send(phone, content)
  }

  public sendErrorMessage(phone: string) {
    if (!this.strategy) throw new Error('Strategy is not set')
    return this.strategy.sendErrorMessage(
      phone,
      '❌ Ocorreu um erro ao processar a mensagem. Por favor, tente novamente mais tarde.',
    )
  }
}
