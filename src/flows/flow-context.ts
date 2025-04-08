import { inject, injectable } from 'tsyringe'

import { LoggerProvider } from '@/providers/logger.provider.js'
import type { FlowParams } from '@/types/flows.js'
import type { BaseFlow } from './base.flow.js'

@injectable()
export class FlowContext {
  private flow?: BaseFlow

  constructor(@inject(LoggerProvider) private readonly logger: LoggerProvider) {}

  public setFlow(flow: BaseFlow): void {
    if (!flow) throw new Error('Empty flow')

    this.logger.info(`🔄️ Context: Transition to ${flow.constructor.name}.`)
    this.flow = flow
  }

  public handle(params: FlowParams) {
    if (!this.flow) throw new Error('Invalid flow')

    return this.flow.handle(params)
  }
}
