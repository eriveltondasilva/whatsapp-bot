import type { FlowStep } from '@/config/enums.js'

export type FlowState = {
  step: FlowStep
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data?: Record<string, any>
}

export type FlowHandler = {
  handle(phone: string, msg: string): string[] | Promise<string[]>
}

type ActionMap = () => void | Promise<void>
export type ActionsMap<T extends string = string> = Partial<Record<T, ActionMap>>

type FlowAction = () => string[] | Promise<string[]>
export type FlowActions<T extends string = string> = Partial<Record<T, FlowAction>>
