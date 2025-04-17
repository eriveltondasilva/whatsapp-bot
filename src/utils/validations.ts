import { type Message, MessageType } from '@wppconnect-team/wppconnect'
import { container } from 'tsyringe'

import { ERIVELTON_NUMBER } from '@/config/constants.js'
import { VALIDATION } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

const logger = container.resolve(LoggerProvider)

export function isValidName(name: string): boolean {
  if (name.length < VALIDATION.MIN_LENGTH || name.length > VALIDATION.MAX_LENGTH) {
    logger.warn(
      `Name validation failed: name is missing (${VALIDATION.MIN_LENGTH} - ${VALIDATION.MAX_LENGTH})`,
      { name },
    )
    return false
  }

  return true
}

export function isValidAddress(address: string): boolean {
  if (address.length < VALIDATION.MIN_LENGTH || address.length > VALIDATION.MAX_LENGTH) {
    logger.warn(
      `Address validation failed: address is missing (${VALIDATION.MIN_LENGTH} - ${VALIDATION.MAX_LENGTH})`,
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

  if (quantity < VALIDATION.QUANTITY_MIN || quantity > VALIDATION.QUANTITY_MAX) {
    logger.warn(
      `Quantity validation failed: quantity must be between (${VALIDATION.QUANTITY_MIN} - ${VALIDATION.QUANTITY_MAX})`,
      { quantity },
    )
    return false
  }

  return true
}

export function isValidMessage(message: Message): boolean {
  // TODO: add validation for message.from
  // if (message.fromMe) {
  //   logger.warn('Message validation failed: message is sent by self', {
  //     from: message.from,
  //     body: message.body,
  //   })
  //   return false
  // }

  // TODO: Remove validation
  if (message.from !== ERIVELTON_NUMBER) {
    // logger.warn('Message validation failed: message is not from Erivelton', {
    // from: message.from,
    // })
    return false
  }

  if (message.isGroupMsg) {
    logger.warn('Message validation failed: group messages are not supported', {
      from: message.from,
    })
    return false
  }

  if (![MessageType.CHAT, MessageType.LIST_RESPONSE].includes(message.type)) {
    logger.warn('Message validation failed: unsupported message type', {
      type: message.type,
      body: message.body,
    })
    return false
  }

  if (message.isPSA || message.isMMS || message.isMedia) {
    logger.warn('Message validation failed: message is a PSA, MMS or media', {
      from: message.from,
      type: message.type,
      body: message.body,
    })
    return false
  }

  if (!message.isNewMsg) {
    logger.warn('Message validation failed: message is not marked as new', {
      isNewMsg: message.isNewMsg,
      from: message.from,
      body: message.body,
    })
    return false
  }

  if (message.body?.startsWith('[BOT]')) {
    // logger.warn('Message validation failed: message starts with [BOT]', {
    // from: message.from,
    // })
    return false
  }

  const messageLength = message.body?.length || 0
  if (messageLength < VALIDATION.MIN_LENGTH || messageLength > VALIDATION.MAX_LENGTH) {
    logger.warn(
      `Message validation failed: message length must be between (${VALIDATION.MIN_LENGTH} - ${VALIDATION.MAX_LENGTH})`,
      {
        from: message.from,
        message: message.body?.slice(0, 50),
        length: messageLength,
      },
    )
    return false
  }

  return true
}
