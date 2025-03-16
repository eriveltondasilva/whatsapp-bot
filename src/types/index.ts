import type { FlowKeys, ItemType, MessageType } from '@/config/enums.js'

export type FlowContext = {
  flow: FlowKeys
  step: string
  data: Record<string, unknown>
}

type Customer = {
  name: string
  phone: string
  address: string
}

type CartItem = {
  id: string
  type: ItemType
  name: string
  price: number
  quantity: number
}

export type FlowState = {
  context: FlowContext
  customer: Partial<Customer>
  cart: CartItem[]
  history: string[]
  lastInteraction: Date
}

export type FlowHandlerProps = {
  state: FlowState
  phone: string
  message: string
}

export type Response = {
  type: MessageType
  content: string[]
}

export type ActionsMap<K extends string = string> = Partial<Record<K, () => Promise<void> | void>>

export type FlowActions<K extends string = string> = Record<K, () => Response | Promise<Response>>

export interface IFlowHandler {
  handle(props: FlowHandlerProps): Response | Promise<Response>
}

export interface IFlowFactory {
  createFlow(flow: string): IFlowHandler
}
