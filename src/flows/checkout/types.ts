import type { PAYMENT_METHODS } from '@/config/enums.js'

export type PaymentContextData = {
  paymentMethod: PAYMENT_METHODS
  orderTotal: number
  orderItems?: Array<{
    id: string
    name: string
    quantity: number
    price: number
  }>
}
