import type { Message } from '@wppconnect-team/wppconnect'
import day from 'dayjs'
import { PaymentMethod, Validation } from '../config/enums.js'

export function isValidPhoneNumber(phoneNumber: string) {
  const regex = /^(\(?\d{2}\)?[\s]?)?(9?\d{4})[-\s]?(\d{4})$/
  return regex.test(phoneNumber.trim())
}

export function isValidBirthday(birthday: string) {
  return day(birthday).isValid()
}

export function isValidName(name: string) {
  return name.trim().length >= Validation.NAME_MIN_LENGTH
}

export function isValidAddress(address: string) {
  return address.trim().length >= Validation.ADDRESS_MIN_LENGTH
}

export function isValidQuantity(quantity: number) {
  return (
    Number.isFinite(quantity) &&
    quantity >= Validation.QUANTITY_MIN &&
    quantity <= Validation.QUANTITY_MAX
  )
}

export function isValidPaymentMethod(method: PaymentMethod) {
  const validMethods = Object.values(PaymentMethod)
  return validMethods.includes(method)
}

export function isValidMessage(message: Message) {
  const { body } = message
  if (!body || typeof body !== 'string') return false

  return (
    body.trim().length >= Validation.MESSAGE_MIN_LENGTH &&
    body.trim().length <= Validation.MESSAGE_MAX_LENGTH
  )
}
