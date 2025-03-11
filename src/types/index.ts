import type { FlowStep, MessageType, ItemType } from '@/config/enums.js'
import type { Customer } from '@prisma/client'

type CustomerData = Pick<Customer, 'name' | 'address'>

export type FlowContext = {
  flow: string
  step: FlowStep
  data?: Record<string, unknown>
}

export type FlowState = {
  context: FlowContext
  customer: Partial<CustomerData>
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
