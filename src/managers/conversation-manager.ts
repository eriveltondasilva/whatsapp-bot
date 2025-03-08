import { inject, injectable } from 'tsyringe'

import { StateManager } from '@/managers/state-manager.js'
import { LoggerProvider } from '@/providers/index.js'

import { HandlerManager } from './handler-manager.js'

@injectable()
export class ConversationManager {
  constructor(
    @inject(StateManager) private flowStateManager: StateManager,
    @inject(HandlerManager) private handlerManager: HandlerManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) { }

  public async handle(phone: string, message: string): Promise<string[]> {
    this.logger.info('👋 Handling Message: %o', { phone, message })
    const { step } = this.flowStateManager.getState(phone)
    const handler = this.handlerManager.getHandler(step)

    if (!handler) {
      this.logger.error('No handler found for current step:', { phone, step })
      return ['❌ Fluxo inválido']
    }

    return handler.handle(phone, message)
  }
}
