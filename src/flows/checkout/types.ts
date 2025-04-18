import type { PAYMENT_METHODS } from '@/config/enums.js'

export type ContextData = {
  paymentMethod: PAYMENT_METHODS
  totalAmount: number
  orderId?: string
  needsChange?: boolean
  changeAmount?: number
}

// totalAmount: number
// orderId?: string
// paymentMethod?: string
// changeNeeded?: boolean
// changeAmount?: number
// changeFor?: number