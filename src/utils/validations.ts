import { Validation } from '@/config/enums.js'
import { type Message, MessageType } from '@wppconnect-team/wppconnect'

export function isValidName(name: string): boolean {
  return name.trim().length >= Validation.NAME_MIN_LENGTH
}

export function isValidAddress(address: string): boolean {
  return address.trim().length >= Validation.ADDRESS_MIN_LENGTH
}

export function isValidQuantity(quantity: number): boolean {
  return (
    Number.isFinite(quantity) &&
    quantity >= Validation.QUANTITY_MIN &&
    quantity <= Validation.QUANTITY_MAX
  )
}

export function isListDataValid(title: string, description: string, content: string[]): boolean {
  if (!title || !description || content.length === 0) {
    console.log('🚫 Invalid list data')
    return false
  }

  return true
}

export function isValidMessage(message: Message): boolean {
  if (!message || !message.body) {
    console.log('🚫 Invalid message')
    return false
  }

  if (!isValidMessage(message) || !message.body) {
    console.log('🚫 Invalid message:', message)

    return false
  }

  if (![MessageType.CHAT, MessageType.LIST_RESPONSE].includes(message.type)) {
    console.log('🚫 Invalid message type:', message.type)
    return false
  }

  if (message.fromMe || message.isGroupMsg) {
    console.log('🚫 Invalid message from:', message.from)
    return false
  }

  if (!message.isNewMsg) {
    console.log('🚫 Invalid message isNewMsg:', message.isNewMsg)
    return false
  }

  const messageLength = message.body.length
  return (
    messageLength >= Validation.MESSAGE_MIN_LENGTH && messageLength <= Validation.MESSAGE_MAX_LENGTH
  )
}
