import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { CustomerRepository } from '@/repositories/@index.js'
import { mainMenu } from '@/templates/main-menu.js'
import { createResponse, getGreeting } from '@/utils/@index.js'
import { RegistrationFlow } from './registration-flow.js'

import { LoggerProvider } from '@/providers/@index.js'
import type { FlowHandler } from '@/types/index.js'

@injectable()
export class WelcomeFlow implements FlowHandler {
  constructor(
    @inject(StateManager) private flowStateManager: StateManager,
    @inject(CustomerRepository) private customerRepository: CustomerRepository,
    @inject(RegistrationFlow) private registrationFlow: RegistrationFlow,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  public async handle(phone: string, message: string) {
    this.logger.info('👋 Welcome Flow', { phone, message })
    const customer = await this.customerRepository.findByPhone(phone)

    if (!customer) {
      this.flowStateManager.updateStep(phone, FlowStep.REGISTRATION)
      return this.registrationFlow.handle(phone, message)
    }

    this.flowStateManager.updateStep(phone, FlowStep.MAIN_MENU)
    const customerName = customer.name.split(' ')[0]

    return createResponse(
      `🍕 ${getGreeting()}, ${customerName}!`,
      'Que bom ter você de volta por aqui! Estamos ansiosos para preparar algo delicioso para você. 😋🍽\n',
      //
      ...mainMenu,
    )
  }
}
