import { inject, injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { CustomerRepository } from '@/repositories/customer.repository.js'
import { mainMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'
import { RegistrationInitialFlow } from '../registration/initial.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class WelcomeFlow extends BaseFlow {
  constructor(
    @inject(CustomerRepository) private readonly customerRepository: CustomerRepository,
    @inject(RegistrationInitialFlow)
    private readonly registrationInitialFlow: RegistrationInitialFlow,
  ) {
    super()
  }

  //#
  public async handle({ phone, message }: FlowParams) {
    const customer = await this.customerRepository.findByPhone(phone)

    if (!customer) {
      const { context } = this.state.updateFlow(phone, Flows.REGISTRATION_INITIAL)
      return this.registrationInitialFlow.handle({ context, phone, message })
    }

    this.state.updateFlow(phone, Flows.MENU)

    return this.responseBuilder
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
