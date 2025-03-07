import { inject, injectable } from 'tsyringe'

import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { logger } from '@/utils/index.js'

import { HandlerManager } from './handler-manager.js'

@injectable()
export class DialogManager {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(HandlerManager) private handlerManager: HandlerManager,
  ) {}

  public async handle(phone: string, message: string): Promise<string[]> {
    logger.info('👋 Handling Message: %o', { phone, message })
    const { step } = this.flowStateManager.getState(phone)
    const handler = this.handlerManager.getHandler(step)

    if (!handler) {
      logger.error('No handler found for current step:', { phone, step })
      return ['❌ Fluxo inválido']
    }

    return handler.handle(phone, message)
  }
}
