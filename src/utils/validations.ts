import { type Message, MessageType } from '@wppconnect-team/wppconnect'

import { Validation } from '@/config/enums.js'
// import { LoggerService } from '@/services/logger-service.js'

// const logger = new LoggerService()

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

export function isListDataValid(title: string, description: string, content: string[]): boolean {
  if (!title || !description || !content?.length) {
    // logger.error('🚫 Invalid list data')
    return false
  }

  return true
}

export function isValidMessage(message: Message): boolean {
  if (!message || !message.body) {
    // logger.error('🚫 Invalid message')
    return false
  }

  if (![MessageType.CHAT, MessageType.LIST_RESPONSE].includes(message.type)) {
    // logger.error('🚫 Invalid message type:', message.type)
    return false
  }

  if (message.fromMe || message.isGroupMsg) {
    // logger.error('🚫 Invalid message from:', message.from)
    return false
  }

  if (!message.isNewMsg) {
    // logger.error('🚫 Invalid message isNewMsg:', message.isNewMsg)
    return false
  }

  const messageLength = message.body.length
  return (
    messageLength >= Validation.MESSAGE_MIN_LENGTH && messageLength <= Validation.MESSAGE_MAX_LENGTH
  )
}
