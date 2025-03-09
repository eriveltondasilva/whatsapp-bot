import { inject, injectable } from 'tsyringe'

import { StateManager } from '@/managers/state-manager.js'
import { LoggerProvider } from '@/providers/@index.js'

import { FlowManager } from './flow-manager.js'

@injectable()
export class ConversationManager {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(FlowManager) private flowManager: FlowManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  public async handle(phone: string, message: string): Promise<string[]> {
    this.logger.info('👋 Handling Message', { phone, message })

    const { step } = this.stateManager.getState(phone)
    const flow = this.flowManager.getFlow(step)

    return await flow.handle(phone, message)
  }
}
