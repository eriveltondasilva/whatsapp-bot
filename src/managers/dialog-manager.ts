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

  public async handleMessage(phoneNumber: string, message: string): Promise<string[]> {
    this.logger.debug('👋 Handling Message: %o', { phoneNumber, message })
    const { step } = this.flowStateManager.getState(phoneNumber)
    const handler = this.handlerManager.getHandler(step)

    if (!handler) {
      this.logger.error('No handler found for current step: %o', {
        phoneNumber,
        step,
      })
      return ['❌ Fluxo inválido']
    }

    return handler.handle(phoneNumber, message)
  }
}
