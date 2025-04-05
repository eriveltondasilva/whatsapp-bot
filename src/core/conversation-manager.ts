import { inject, injectable } from 'tsyringe'

import { FlowFactory } from '@/flows/@factory.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { StateFacade } from './state.facade.js'

import type { FlowResponse } from '@/types/index.js'

@injectable()
export class ConversationManager {
  constructor(
    @inject(FlowFactory) private flowFactory: FlowFactory,
    @inject(StateFacade) private state: StateFacade,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  public async handle(phone: string, message: string): Promise<FlowResponse> {
    this.logger.info('📌 Conversation Manager', { phone })

    try {
      const { context } = this.state.getState(phone)
      const flow = this.flowFactory.createFlow(context.flow)

      return await flow.handle({ context, phone, message })
    } catch (error) {
      this.state.resetState(phone)
      throw error
    }
  }
}
