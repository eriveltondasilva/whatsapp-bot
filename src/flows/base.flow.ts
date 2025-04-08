import { container } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/response/text-response.builder.js'
import { StateFacade } from '@/core/state.facade.js'

import type { FlowParams, FlowResponse } from '@/types/flows.js'

export abstract class BaseFlow {
  constructor(
    protected readonly state = container.resolve(StateFacade),
    protected readonly responseBuilder = new TextResponseBuilder(),
  ) {}

  public abstract handle(params: FlowParams): FlowResponse | Promise<FlowResponse>
}
