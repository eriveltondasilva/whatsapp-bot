import type { ItemType, MessageType } from '@/config/enums.js'
import type { Customer, Prisma } from '@prisma/client'

export type FlowContext = {
  flow: string
  step: string
  data: Record<string, unknown>
}

export type FlowState = {
  context: FlowContext
  customer: Prisma.CustomerCreateInput
  cart: Array<{
    id: string
    type: ItemType
    name: string
    price: number
    quantity: number
  }>
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

export interface FlowHandler {
  handle(props: FlowHandlerProps): Response | Promise<Response>
}

export type ActionsMap<K extends string = string> = Partial<Record<K, () => Promise<void> | void>>

export type FlowActions<K extends string = string> = Record<K, () => Response | Promise<Response>>
