import type {
  Category,
  FlowStep,
  OrderStatus,
  PaymentMethod,
} from '../config/enums.js'

export type Customer = {
  id: number
  name: string
  phone: string
  address: string
  birthDate: string
  createdAt: string
}

export type Product = {
  id: number
  name: string
  description: string
  price: number
  category: Category
  createdAt: string
  isAvailable: boolean
}

export type OrderItem = {
  id: number
  productId: number
  name: string
  quantity: number
  price: number
  observation?: string
}

export type Order = {
  id: number
  customerId: number
  items: OrderItem[]
  status: OrderStatus
  totalPrice: number
  createdAt: Date
  observation?: string
  paymentMethod?: PaymentMethod
  change?: number
}

export type FlowState = {
  step: FlowStep
  data: any
}
