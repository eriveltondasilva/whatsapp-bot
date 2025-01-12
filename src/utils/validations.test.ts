import { PaymentMethod, Validation } from '../config/enums.js'
import {
  isValidAddress,
  isValidBirthday,
  isValidMessage,
  isValidName,
  isValidPaymentMethod,
  isValidPhoneNumber,
  isValidQuantity,
} from './validations.js'

describe('isValidPhoneNumber:', () => {
  // !!!
  it('should return false if phone number is invalid', () => {
    const result = isValidPhoneNumber('')
    expect(result).toBe(false)
  })
  // ###
  it.each([
    '2717-8150',
    '90552-5282',
    '82 5227-2670',
    '(60) 0489 5710',
    '(91)4748-0559',
  ])('should return true if phone number is valid (%s)', (phoneNumber) => {
    const result = isValidPhoneNumber(phoneNumber)
    expect(result).toBe(true)
  })
})

describe('isValidBirthdate:', () => {
  // !!!
  it('should return false for an empty string', () => {
    const result = isValidBirthday('')
    expect(result).toBe(false)
  })
  it('should return false if birth date is invalid', () => {
    const result = isValidBirthday('not a date')
    expect(result).toBe(false)
  })
  it('should return false for a malformed date', () => {
    const result = isValidBirthday('32/01/2000')
    expect(result).toBe(false)
  })
  // ###
  it('should return true if birth date is valid', () => {
    const result = isValidBirthday('01/01/2000')
    expect(result).toBe(true)
  })
})

describe('isValidName:', () => {
  // !!!
  it('should return false if name is invalid', () => {
    const result = isValidName('')
    expect(result).toBe(false)
  })
  // ###
  it('should return true if name is valid', () => {
    const result = isValidName('John Doe')
    expect(result).toBe(true)
  })
})

describe('isValidAddress:', () => {
  // !!!
  it('should return false if address is invalid', () => {
    const result = isValidAddress('')
    expect(result).toBe(false)
  })
  // ###
  it('should return true if address is valid', () => {
    const result = isValidAddress('123 Main St')
    expect(result).toBe(true)
  })
})

describe('isValidQuantity:', () => {
  // !!!
  it.each([Validation.QUANTITY_MIN - 1, Validation.QUANTITY_MAX + 1])(
    'should return false for invalid quantity (%i)',
    (quantity) => {
      const result = isValidQuantity(quantity)
      expect(result).toBe(false)
    },
  )
  // ###
  it.each([Validation.QUANTITY_MIN, Validation.QUANTITY_MAX])(
    'should return true for valid quantity (%i)',
    (quantity) => {
      const result = isValidQuantity(quantity)
      expect(result).toBe(true)
    },
  )
})

describe('isValidPaymentMethod:', () => {
  // !!!
  it('should return false for invalid payment method', () => {
    const result = isValidPaymentMethod('invalid' as PaymentMethod)
    expect(result).toBe(false)
  })
  // ###
  it.each(Object.values(PaymentMethod))(
    'should return true for valid payment method (%s)',
    (method) => {
      const result = isValidPaymentMethod(method)
      expect(result).toBe(true)
    },
  )
})

describe('isValidMessage:', () => {
  // !!!
  it('should return false for an empty string', () => {
    const result = isValidMessage('')
    expect(result).toBe(false)
  })
  it.each([
    Validation.MESSAGE_MIN_LENGTH - 1,
    Validation.MESSAGE_MAX_LENGTH + 1,
  ])('should return false for invalid message length (%i)', (length) => {
    const result = isValidMessage('a'.repeat(length))
    expect(result).toBe(false)
  })
  // ###
  it('should return true if message is valid', () => {
    const result = isValidMessage('Hello, world!')
    expect(result).toBe(true)
  })
  it.each([Validation.MESSAGE_MIN_LENGTH, Validation.MESSAGE_MAX_LENGTH])(
    'should return true for valid message length (%i)',
    (length) => {
      const result = isValidMessage('a'.repeat(length))
      expect(result).toBe(true)
    },
  )
})
