import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { FlowKeys, RegistrationSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { LoggerProvider } from '@/providers/@index.js'
import { CustomerRepository } from '@/repositories/@index.js'
import { mainMenu } from '@/templates/@index.js'
import { RegistrationFlow } from './registration.flow.js'

import type { FlowHandle, IFlowHandler, Response } from '@/types/index.js'

@injectable()
export class WelcomeFlow implements IFlowHandler {
  constructor(
    @inject(CustomerRepository) private customerRepository: CustomerRepository,
    @inject(RegistrationFlow) private registrationFlow: RegistrationFlow,
    @inject(StateManager) private stateManager: StateManager,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public async handle({ phone, message }: FlowHandle): Promise<Response> {
    this.logger.info('📌 Welcome Flow')
    const customer = await this.customerRepository.findByPhone(phone)

    if (!customer) {
      const { context } = this.stateManager.updateStep(phone, RegistrationSteps.INITIAL)
      return this.registrationFlow.handle({ context, phone, message })
    }

    this.stateManager.updateStep(phone, FlowKeys.MENU)

    return this.textResponseBuilder
      .addGreeting(customer.name)
      .addText(
        'Que bom ter você de volta por aqui!',
        'Estamos ansiosos para preparar algo delicioso para você. 😋🍽',
      )
      .addText('Para começar, escolha uma das opções abaixo:')
      .addEmptyLine()
      .addMenu(mainMenu)
      .build()
  }
}
