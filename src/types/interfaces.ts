import type { FlowKeys } from '@/config/enums.js'
import type { FlowParams, FlowResponse } from './flows.js'
import type { ResponseContent } from './responses.js'

export interface Flow {
  handle(params: FlowParams): FlowResponse | Promise<FlowResponse>
}

export interface FlowFactory {
  createFlow(flow: FlowKeys): Flow
}
