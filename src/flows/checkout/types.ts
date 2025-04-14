import type { PaymentMethods } from '@/config/enums.js'

export type PaymentContextData = {
  paymentMethod: PaymentMethods
  orderTotal: number
  orderItems?: Array<{
    id: string
    name: string
    quantity: number
    price: number
  }>
}
