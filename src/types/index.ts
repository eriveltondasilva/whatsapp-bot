import type { FlowStep } from '@/config/enums.js'
import type { Customer } from '@prisma/client'

type User = {
  name: string
  age: number
}

export type FlowState = {
  step: FlowStep
  customer?: Partial<Pick<Customer, 'name' | 'address'>>
  order?: {
    id: string
    status: string
  }
}

export interface FlowHandler {
  handle(phone: string, message: string): Promise<string[]> | string[]
}

type ActionMap = () => Promise<void> | void
export type ActionsMap<K extends string = string> = Partial<Record<K, ActionMap>>

type FlowAction = () => Promise<string[]> | string[]
export type FlowActions<K extends string = string> = Partial<Record<K, FlowAction>>
