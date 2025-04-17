import { inject, injectable } from 'tsyringe'

import { MESSAGE_TYPES } from '@/config/enums.js'
import { ListMessageService } from './list-message.service.js'
import { TextMessageService } from './text-message.service.js'

@injectable()
export class MessageSenderFactory {
  constructor(
    @inject(TextMessageService) private textMessageService: TextMessageService,
    @inject(ListMessageService) private listMessageService: ListMessageService,
  ) {}

  public create(type: MESSAGE_TYPES) {
    switch (type) {
      case MESSAGE_TYPES.TEXT:
        return this.textMessageService
      case MESSAGE_TYPES.LIST:
        return this.listMessageService
      default:
        throw new Error(`Invalid message type: ${type}`)
    }
  }

  public createDefault() {
    return this.textMessageService
  }
}
