import { inject, injectable } from 'tsyringe'

import { FlowKeys, RegistrationStep } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { LoggerProvider } from '@/providers/@index.js'
import { CustomerRepository } from '@/repositories/@index.js'
import { mainMenu } from '@/templates/main-menu.js'
import { createResponse, getFirstName, getGreeting } from '@/utils/@index.js'
import { RegistrationFlow } from './registration.flow.js'

import type { FlowHandler, FlowHandlerProps } from '@/types/index.js'

@injectable()
export class WelcomeFlow implements FlowHandler {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(CustomerRepository) private customerRepository: CustomerRepository,
    @inject(RegistrationFlow) private registrationFlow: RegistrationFlow,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  // ###
  public async handle({ phone, message }: FlowHandlerProps) {
    this.logger.info('📌 Welcome Flow')
    const customer = await this.customerRepository.findByPhone(phone)

    if (!customer) {
      const state = this.stateManager.updateStep(phone, RegistrationStep.INITIAL)
      return this.registrationFlow.handle({ state, phone, message })
    }

    this.stateManager.updateStep(phone, FlowKeys.MENU)

    return createResponse(
      `🍕 ${getGreeting()}, ${getFirstName(customer.name)}!`,
      'Que bom ter você de volta por aqui! Estamos ansiosos para preparar algo delicioso para você. 😋🍽\n',
      //
      ...mainMenu,
    )
  }
}
