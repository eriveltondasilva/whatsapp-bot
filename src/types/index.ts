import type { FlowKeys, ItemType, MessageType } from '@/config/enums.js'

export type FlowContext = {
  flow: FlowKeys
  step: string
  data: Record<string, unknown>
  history: string[]
}

export type Customer = {
  name: string
  phone: string
  address: string
}

export type CartItem = {
  id: string
  type: ItemType
  name: string
  price: number
  quantity: number
}

export type FlowState = {
  context: FlowContext
  customer: Customer
  cart: CartItem[]
  lastInteraction: Date
}

export type FlowHandle = {
  context: FlowContext
  phone: string
  message: string
}

export type CommandParams = {
  context: FlowContext
  phone: string
  message: string
}

export type ListResponse = {
  rowId: string
  title: string
  description: string
  category: string
}

export type ContentResponse = {
  text: string
  list?: ListResponse[]
}

export type FlowResponse = {
  type: MessageType
  content: ContentResponse
}

export type ActionsMap<K extends string = string> = Partial<Record<K, () => Promise<void> | void>>

export type FlowActions<K extends string = string> = Record<
  K,
  () => FlowResponse | Promise<FlowResponse>
>

export interface IFlowHandler {
  handle(props: FlowHandle): FlowResponse | Promise<FlowResponse>
}

export interface IFlowFactory {
  createFlow(flow: string): IFlowHandler
}

export interface ICommand {
  execute({ context, phone, message }: CommandParams): Promise<FlowResponse>
}

type CommandMap = Record<string, ICommand>
