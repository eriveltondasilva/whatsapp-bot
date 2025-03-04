import { inject, injectable } from 'tsyringe'

import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { LoggerService } from '@/services/index.js'

import { HandlerManager } from './handler-manager.js'

@injectable()
export class DialogManager {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(HandlerManager) private handlerManager: HandlerManager,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  public async handleMessage(phone: string, message: string): Promise<string[]> {
    this.logger.info('👋 Handling Message: %o', { phone, message })
    const { step } = this.flowStateManager.getState(phone)
    const handler = this.handlerManager.getHandler(step)

    if (!handler) {
      this.logger.error('No handler found for current step: %o', {
        phone,
        step,
      })
      return ['❌ Fluxo inválido']
    }

    return handler.handle(phone, message)
  }
}
