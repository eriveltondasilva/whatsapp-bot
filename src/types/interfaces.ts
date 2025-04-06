import type { FlowKeys } from '@/config/enums.js'
import type { FlowParams, FlowResponse } from './flows.js'

export interface Flow {
  handle(params: FlowParams): FlowResponse | Promise<FlowResponse>
}

export interface FlowFactory {
  createFlow(flow: FlowKeys): Flow
}

export interface Command {
  execute(params: FlowParams): FlowResponse | Promise<FlowResponse>
}
