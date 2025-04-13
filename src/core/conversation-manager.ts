import { inject, injectable } from 'tsyringe'

import { FlowFactory } from '@/flows/flow.factory.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { StateFacade } from './state.facade.js'

import type { FlowResponse } from '@/types/flows.js'

@injectable()
export class ConversationManager {
  constructor(
    @inject(FlowFactory) private readonly flowFactory: FlowFactory,
    @inject(StateFacade) private readonly state: StateFacade,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  public async handle(phone: string, message: string): Promise<FlowResponse> {
    this.logger.info('📌 Conversation Manager', { phone })

    try {
      const { context } = this.state.getState(phone)
      this.logger.info(`🔄️ Handling flow: ((${context.flow}))`, { phone })

      const flow = this.flowFactory.create(context.flow)
      return await flow.handle({ context, phone, message })
    } catch (error) {
      this.state.resetState(phone)
      throw error
    }
  }
}
