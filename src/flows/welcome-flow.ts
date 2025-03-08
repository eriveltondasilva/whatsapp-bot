import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { CustomerRepository } from '@/repositories/@index.js'
import { mainMenu } from '@/templates/main-menu.js'
import { getGreeting, logger } from '@/utils/@index.js'
import { RegistrationFlow } from './registration-flow.js'

import type { FlowHandler } from '@/types/index.js'

@injectable()
export class WelcomeFlow implements FlowHandler {
  constructor(
    @inject(StateManager) private flowStateManager: StateManager,
    @inject(CustomerRepository) private customerRepository: CustomerRepository,
    @inject(RegistrationFlow) private registrationFlow: RegistrationFlow,
  ) { }

  public async handle(phone: string, message: string) {
    logger.info('👋 Welcome Flow: %o', { phone, message })
    const customer = await this.customerRepository.findByPhone(phone)

    if (!customer) {
      this.flowStateManager.updateState(phone, { step: FlowStep.REGISTRATION })
      return this.registrationFlow.handle(phone, message)
    }

    this.flowStateManager.updateState(phone, { step: FlowStep.MAIN_MENU })
    const customerName = customer.name.split(' ')[0]

    return [
      `🍕 ${getGreeting()}, ${customerName}!`,
      'Que bom ter você de volta por aqui! Estamos ansiosos para preparar algo delicioso para você. 😋🍽\n',
      //
      ...mainMenu,
    ]
  }
}
