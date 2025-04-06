import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/response/text.builder.js'
import { FlowKeys, RegistrationSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { CustomerRepository } from '@/repositories/customer.repository.js'
import { mainMenu } from '@/templates/menus.js'
import { RegistrationFlow } from './registration.flow.js'

import type { FlowParams } from '@/types/flows.js'
import type { Flow } from '@/types/interfaces.js'

@injectable()
export class WelcomeFlow implements Flow {
  constructor(
    @inject(CustomerRepository) private customerRepository: CustomerRepository,
    @inject(RegistrationFlow) private registrationFlow: RegistrationFlow,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(StateFacade) private stateManager: StateFacade,
  ) {}

  //#
  public async handle({ phone, message }: FlowParams) {
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
