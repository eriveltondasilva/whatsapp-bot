import { type Message, MessageType } from '@wppconnect-team/wppconnect'

import { Validation } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/@index.js'
import { container } from 'tsyringe'

const logger = container.resolve(LoggerProvider)

export function isValidName(name: string): boolean {
  return name.length >= Validation.NAME_MIN_LENGTH
}

export function isValidAddress(address: string): boolean {
  return address.length >= Validation.ADDRESS_MIN_LENGTH
}

export function isValidQuantity(quantity: number): boolean {
  return (
    Number.isFinite(quantity) &&
    quantity >= Validation.QUANTITY_MIN &&
    quantity <= Validation.QUANTITY_MAX
  )
}

export function isValidMessage(message: Message): boolean {
  if (!message || !message.body) {
    logger.error('🚫 Invalid message')
    return false
  }

  if (message.fromMe || message.isGroupMsg) {
    logger.error('🚫 Invalid message from: %o', { from: message.from })
    return false
  }

  if (![MessageType.CHAT, MessageType.LIST_RESPONSE].includes(message.type)) {
    logger.error('🚫 Invalid message type: %o', { type: message.type })
    return false
  }

  if (!message.isNewMsg) {
    logger.error('🚫 Invalid message isNewMsg: %o', { isNewMsg: message.isNewMsg })
    return false
  }

  const messageLength = message.body.length
  return (
    messageLength >= Validation.MESSAGE_MIN_LENGTH && messageLength <= Validation.MESSAGE_MAX_LENGTH
  )
}
