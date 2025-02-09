import type { FlowStep, OrderStatus, PaymentMethod } from '@/config/enums.js'

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
  ingredients: string
  price: number
  category: string
  isAvailable: boolean
}

export type OrderItem = {
  id: string
  productId: number
  name: string
  price: number
  quantity: number
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

type PizzaEdge = {
  id: number
  name: string
  price: number
}

type FlowData = {
  name: string
  address: string
  pizzaType: 'full' | 'half'
  selectedFlavors: Pizza[]
  quantity: number
  edge: PizzaEdge
}

export type FlowState = {
  step: FlowStep
  data?: Partial<FlowData>
}

export type FlowHandler = {
  handle(phone: string, msg: string): string[]
}

export type FlowActions = Record<string, () => string[]>
