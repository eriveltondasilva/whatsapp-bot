import type { FlowParams, FlowResponse } from './flows.js'
import type { ResponseContent } from './responses.js'

export interface Flow {
  handle(params: FlowParams): FlowResponse | Promise<FlowResponse>
}

export interface MessageSendStrategy {
  send(phone: string, content: ResponseContent): Promise<void>
}
