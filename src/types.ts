import type { FlowStep } from '@/config/enums.js'
export type {
  Crust,
  Customer,
  Drink,
  Flavor,
  FlavorCategory,
  ItemType,
  Order,
  OrderItem,
  OrderPizza,
  OrderStatus,
  PaymentMethod,
} from '@prisma/client'

export type FlowState = {
  step: FlowStep
  data?: Record<string, any>
}

export type FlowHandler = {
  handle(phone: string, msg: string): string[] | Promise<string[]>
}

export type FlowAction = () => string[] | Promise<string[]>
export type FlowActions = Record<string | number, FlowAction>


export type ActionMap<T extends string = string> = Partial<
  Record<T | '_default', () => Promise<void>>
>;