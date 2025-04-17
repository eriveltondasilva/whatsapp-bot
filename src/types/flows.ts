import type { FLOWS, MENU_OPTIONS, MESSAGE_TYPES, ORDER_OPTIONS } from '@/config/enums.js'
import type { CartItem, Customer } from './entities.js'
import type { ResponseContent } from './responses.js'

export type FlowResponse = {
  type: MESSAGE_TYPES
  content: ResponseContent
}

export type FlowData = Record<string, unknown>

export type FlowContext = {
  flow: FLOWS
  data: FlowData
  history: string[]
}

export type FlowState = {
  context: FlowContext
  customer: Customer
  cart: CartItem[]
  lastInteraction: Date
}

export type FlowParams = {
  context: FlowContext
  phone: string
  message: string
}

export type FlowActionMap<T extends string> = Record<T, () => FlowResponse | Promise<FlowResponse>>

export type OrderActionMap = FlowActionMap<ORDER_OPTIONS>
export type MenuActionMap = FlowActionMap<MENU_OPTIONS>
