import type { FlowContext, Response } from '@/types/index.js'

export type CommandParams = {
  context: FlowContext
  phone: string
  message: string
}

export interface ICommand {
  execute({ context, phone, message }: CommandParams): Promise<Response>
}
