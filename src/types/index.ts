import type { FlowStep, MessageType } from '@/config/enums.js'
import type { Customer } from '@prisma/client'

type CustomerData = Pick<Customer, 'name' | 'address'>

type StateData = Record<string, unknown>

export type Response = {
  type: MessageType
  content: string[]
}

export type FlowState = {
  step: FlowStep
  customer?: Partial<CustomerData>
  order?: StateData
  pizza?: StateData
  drink?: StateData
}

export type FlowHandlerProps = {
  state: FlowState
  phone: string
  message: string
}

export interface FlowHandler {
  handle(props: FlowHandlerProps): Promise<Response> | Response
}

type ActionMap = () => Promise<void> | void
export type ActionsMap<K extends string = string> = Partial<Record<K, ActionMap>>

export type FlowActions<K extends string = string> = Record<K, () => Response | Promise<Response>>
