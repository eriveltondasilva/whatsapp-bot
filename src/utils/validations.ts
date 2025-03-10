import { type Message, MessageType } from '@wppconnect-team/wppconnect'

import { Validation } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/@index.js'
import { container } from 'tsyringe'

const logger = container.resolve(LoggerProvider)

export function isValidName(name: string): boolean {
  if (name.length < Validation.MIN_LENGTH || name.length > Validation.MAX_LENGTH) {
    logger.warn(
      `Name validation failed: name is missing (${Validation.MIN_LENGTH} - ${Validation.MAX_LENGTH})`,
      { name },
    )
    return false
  }

  return true
}

export function isValidAddress(address: string): boolean {
  if (address.length < Validation.MIN_LENGTH || address.length > Validation.MAX_LENGTH) {
    logger.warn(
      `Address validation failed: address is missing (${Validation.MIN_LENGTH} - ${Validation.MAX_LENGTH})`,
      { address },
    )
    return false
  }

  return true
}

export function isValidQuantity(quantity: number): boolean {
  if (!Number.isFinite(quantity)) {
    logger.warn('Quantity validation failed: quantity is not a number', { quantity })
    return false
  }

  if (quantity < Validation.QUANTITY_MIN || quantity > Validation.QUANTITY_MAX) {
    logger.warn(
      `Quantity validation failed: quantity is out of range (${Validation.QUANTITY_MIN} - ${Validation.QUANTITY_MAX})`,
      { quantity },
    )
    return false
  }

  return true
}

export function isValidMessage(message: Message): boolean {
  if (!message || !message.body) {
    logger.error('Message validation failed: message object or body is missing', { message })
    return false
  }

  if (message.fromMe || message.isGroupMsg) {
    logger.error('Message validation failed: message is sent by self or is a group message', {
      from: message.from,
    })
    return false
  }

  if (![MessageType.CHAT, MessageType.LIST_RESPONSE].includes(message.type)) {
    logger.error('Message validation failed: unsupported message type', { type: message.type })
    return false
  }

  if (!message.isNewMsg) {
    logger.error('Message validation failed: message is not marked as new', {
      isNewMsg: message.isNewMsg,
    })
    return false
  }

  const messageLength = message.body.length

  if (messageLength < Validation.MIN_LENGTH || messageLength > Validation.MAX_LENGTH) {
    logger.error(
      `Message validation failed: message length is outside the allowed range (${Validation.MIN_LENGTH} - ${Validation.MAX_LENGTH})`,
      {
        length: messageLength,
      },
    )
    return false
  }

  return true
}
