import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { FlowKeys, RegistrationSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { LoggerProvider } from '@/providers/@index.js'
import { CustomerRepository } from '@/repositories/@index.js'
import { getFirstName, getGreeting } from '@/utils/@index.js'
import { RegistrationFlow } from './registration.flow.js'

import { mainMenu } from '@/templates/@index.js'
import type { FlowHandlerProps, IFlowHandler, Response } from '@/types/index.js'

@injectable()
export class WelcomeFlow implements IFlowHandler {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(CustomerRepository) private customerRepository: CustomerRepository,
    @inject(RegistrationFlow) private registrationFlow: RegistrationFlow,
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(TextResponseBuilder) private responseBuilder: TextResponseBuilder,
  ) {}

  // ###
  public async handle({ phone, message }: FlowHandlerProps): Promise<Response> {
    this.logger.info('📌 Welcome Flow')
    const customer = await this.customerRepository.findByPhone(phone)

    if (!customer) {
      const state = this.stateManager.updateStep(phone, RegistrationSteps.INITIAL)
      return this.registrationFlow.handle({ state, phone, message })
    }

    this.stateManager.updateStep(phone, FlowKeys.MENU)

    return this.responseBuilder
      .addText(`🍕 ${getGreeting()}, ${getFirstName(String(customer.name))}!`)
      .addText(
        'Que bom ter você de volta por aqui!',
        'Estamos ansiosos para preparar algo delicioso para você. 😋🍽',
      )
      .addText('Para começar, escolha uma das opções abaixo:')
      .addLineBreak()
      .addMenu(mainMenu)
      .build()
  }
}
