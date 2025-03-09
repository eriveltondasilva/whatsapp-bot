import type { FlowStep, MessageType } from '@/config/enums.js'
import type { Customer } from '@prisma/client'

type User = {
  name: string
  age: number
}

export type Response = {
  type: MessageType
  content: string[]
}

export type FlowState = {
  step: FlowStep
  customer?: Partial<Pick<Customer, 'name' | 'address'>>
  order?: {
    id: string
    status: string
  }
  pizza?: Partial<Record<string, unknown>>
  drink?: Partial<Record<string, unknown>>
}

export type FlowHandlerProps = {
  state: FlowState
  phone: string
  message: string
}

export interface FlowHandler {
  handle({ state, phone, message }: FlowHandlerProps): Promise<Response> | Response
}

type ActionMap = () => Promise<void> | void
export type ActionsMap<K extends string = string> = Partial<Record<K, ActionMap>>

type FlowAction = () => Promise<Response> | Response
export type FlowActions<K extends string = string> = Partial<Record<K, FlowAction>>
