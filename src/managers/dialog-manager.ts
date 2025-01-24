import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { CustomerService, LoggerService } from '@/services/index.js'
import { HandlerManager } from './handler-manager.js'

@injectable()
export class DialogManager {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(CustomerService) private customerService: CustomerService,
    @inject(HandlerManager) private handlerManager: HandlerManager,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  // ###
  public async handleMessage(
    phoneNumber: string,
    message: string,
  ): Promise<string[]> {
    this.logger.debug('handling message', { phoneNumber, message })
    const customer = this.customerService.getCustomer(phoneNumber)

    if (!customer) {
      this.flowStateManager.updateState(phoneNumber, { step: FlowStep.INITIAL })
    }

    return this.processFlow(phoneNumber, message)
  }

  private processFlow(phoneNumber: string, message: string): string[] {
    this.logger.debug('👋 processFlow: %o', {
      phoneNumber,
      message,
    })
    const { step } = this.flowStateManager.getState(phoneNumber)
    const handler = this.handlerManager.getHandler(step)

    if (!handler) {
      return ['❌ Invalid flow step']
    }

    return handler.handle(phoneNumber, message)
  }

  // ###

}
