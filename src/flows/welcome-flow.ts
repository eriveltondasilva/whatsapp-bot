import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { mainMenu } from '@/messages/main-menu.js'
import { CustomerRepository } from '@/repositories/index.js'
import { LoggerService } from '@/services/index.js'
import { getGreeting } from '@/utils/get-greeting.js'
import { RegistrationFlow } from './registration-flow.js'

import type { FlowHandler } from '@/types.js'

@injectable()
export class WelcomeFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(CustomerRepository) private customerRepo: CustomerRepository,
    @inject(RegistrationFlow) private registrationFlow: RegistrationFlow,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  public async handle(phone: string, message: string) {
    this.logger.info('👋 Welcome Flow: %o', { phone, message })
    const customer = await this.customerRepo.findByPhone(phone)

    if (!customer) {
      this.flowStateManager.updateState(phone, {
        step: FlowStep.REGISTRATION,
      })
      return this.registrationFlow.handle(phone, message)
    }

    this.flowStateManager.updateState(phone, { step: FlowStep.MAIN_MENU })
    const customerName = customer.name.split(' ')[0]

    return [
      `🍕 ${getGreeting()}, ${customerName}! Que bom ter você de volta!`,
      'Estamos ansiosos para preparar algo delicioso para você. 😋🍽\n',
      //
      ...mainMenu,
    ]
  }
}
