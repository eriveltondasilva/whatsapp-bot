import { inject, injectable } from 'tsyringe'

import { StateManager } from '@/managers/state-manager.js'
import { LoggerProvider } from '@/providers/@index.js'
import { FlowFactory } from './flow-factory.js'

import type { Response } from '@/types/index.js'

@injectable()
export class ConversationManager {
  constructor(
    @inject(FlowFactory) private flowFactory: FlowFactory,
    @inject(StateManager) private stateManager: StateManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  public async handle(phone: string, message: string): Promise<Response> {
    this.logger.info('📌 Conversation Manager')

    try {
      const state = this.stateManager.getState(phone)
      const flow = this.flowFactory.createFlow(state.context.flow)

      return await flow.handle({ state, phone, message })
    } catch (error) {
      this.logger.error('Error handling message:', error)
      this.stateManager.resetState(phone)

      throw error
    }
  }
}
