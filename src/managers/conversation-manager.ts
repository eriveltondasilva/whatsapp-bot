import { inject, injectable } from 'tsyringe'

import { FlowFactory } from '@/flows/@factory.js'
import { LoggerProvider } from '@/providers/@index.js'
import { StateFacade } from './state.facade.js'

import type { Response } from '@/types/index.js'

@injectable()
export class ConversationManager {
  constructor(
    @inject(FlowFactory) private flowFactory: FlowFactory,
    @inject(StateFacade) private stateManager: StateFacade,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  public async handle(phone: string, message: string): Promise<Response> {
    this.logger.info('📌 Conversation Manager', { phone })

    try {
      const { context } = this.stateManager.getState(phone)
      const flow = this.flowFactory.createFlow(context.flow)

      return await flow.handle({ context, phone, message })
    } catch (error) {
      this.logger.error('Error handling conversation:', error)
      this.stateManager.resetState(phone)

      throw error
    }
  }
}
