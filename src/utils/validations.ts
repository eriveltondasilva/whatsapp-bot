import type { Message } from '@wppconnect-team/wppconnect'
import day from 'dayjs'

import { PaymentMethod, Validation } from '@/config/enums.js'

export function isValidPhoneNumber(phoneNumber: string): boolean {
  const regex = /^(\(?\d{2}\)?[\s]?)?(9?\d{4})[-\s]?(\d{4})$/
  return regex.test(phoneNumber.trim())
}

export function isValidBirthday(birthday: string): boolean {
  return day(birthday).isValid()
}

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

export function isValidPaymentMethod(method: PaymentMethod): boolean {
  const validMethods = Object.values(PaymentMethod)
  return validMethods.includes(method)
}

export function isValidMessage(message: Message): boolean {
  if (!message) return false

  // TODO: Add fromMe check
  if (/* message.fromMe || */ message.isGroupMsg || message.type !== 'chat')
    return false

  if (!message.body?.trim()) return false

  return (
    message.body.trim().length >= Validation.MESSAGE_MIN_LENGTH &&
    message.body.trim().length <= Validation.MESSAGE_MAX_LENGTH
  )
}
