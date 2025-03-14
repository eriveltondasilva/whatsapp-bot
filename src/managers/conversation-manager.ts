import { inject, injectable } from 'tsyringe'

import { StateManager } from '@/managers/state-manager.js'
import { LoggerProvider } from '@/providers/@index.js'
import { FlowManager } from './flow-manager.js'

import type { Response } from '@/types/index.js'

@injectable()
export class ConversationManager {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(FlowManager) private flowManager: FlowManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  public async handle(phone: string, message: string): Promise<Response> {
    this.logger.debug('📌 Conversation Manager')

    try {
      const state = this.stateManager.getState(phone)
      const flow = this.flowManager.getFlow(state.context)

      return await flow.handle({ state, phone, message })
    } catch (error) {
      this.logger.error('Error handling message:', error)
      this.stateManager.resetState(phone)

      throw error
    }
  }
}
