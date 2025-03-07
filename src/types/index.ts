import type { FlowStep } from '@/config/enums.js'

export type FlowState = {
  step: FlowStep
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data?: Record<string, any>
}

export interface FlowHandler {
  handle(phone: string, message: string): Promise<string[]> | string[]
}

type ActionMap = () => Promise<void> | void
export type ActionsMap<K extends string = string> = Partial<Record<K, ActionMap>>

type FlowAction = () => Promise<string[]> | string[]
export type FlowActions<K extends string = string> = Partial<Record<K, FlowAction>>
