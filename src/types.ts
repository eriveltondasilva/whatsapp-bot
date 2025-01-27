import type { Category, FlowStep, OrderStatus, PaymentMethod } from '@/config/enums.js'

export type Customer = {
  id: number
  name: string
  phone: string
  address: string
  createdAt: string
}

export type Pizza = {
  id: number
  name: string
  ingredients: string[]
  price: number
  category: string
  isAvailable: boolean
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
  createdAt: string
  observation?: string
  paymentMethod?: PaymentMethod
  change?: number
}

type FlowData = {
  name: string
  address: string
  pizzaType: 'full' | 'half'
  selectedFlavors: Pizza[]
  quantity: number
}

export type FlowState = {
  step: FlowStep
  data?: Partial<FlowData>
}

export type FlowHandler = {
  handle(phoneNumber: string, message: string): string[]
}
