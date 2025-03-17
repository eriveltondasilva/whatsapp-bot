import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { StateManager } from '@/managers/@index.js'
import { LoggerProvider } from '@/providers/@index.js'
import { CustomerRepository } from '@/repositories/customer.repository.js'
import { mainMenu } from '@/templates/@index.js'
import { getFirstName, getGreeting } from '@/utils/@index.js'
// import { MenuState } from './menu.state.js'
// import { RegistrationState } from './registration/registration-name.state.js'

import type { IState } from './state.interface.js'

@injectable()
export class WelcomeState implements IState {
  constructor(
    @inject(TextResponseBuilder) private responseBuilder: TextResponseBuilder,
    @inject(StateManager) private stateManager: StateManager,
    @inject(CustomerRepository) private customerRepository: CustomerRepository,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  async handle(phone: string, message: string) {
    this.logger.debug('📌 Welcome State')

    const customer = await this.customerRepository.findByPhone(phone)

    if (!customer) {
      return this.responseBuilder
        .addText('🍕 Olá! Bem-vindo(a) à *Pizzaria Bella Pizza*!')
        .addText('Estamos prontos para transformar a sua fome em felicidade.')
        .addText('Antes de começar, precisamos fazer um _*rápido*_ cadastro. 🏃💨')
        .addLineBreak()
        .addText('Por favor, me informe o seu nome completo:')
        .addText('> exemplo: _"João da Silva"_')
        .build()
    }

    return this.responseBuilder
      .addText(`🍕 ${getGreeting()}, ${getFirstName(String(customer.name))}!`)
      .addText(
        'Que bom ter você de volta por aqui!',
        'Estamos ansiosos para preparar algo delicioso para você. 😋🍽',
        'Para começar, escolha uma das opções abaixo:',
      )
      .addLineBreak()
      .addMenu(mainMenu)
      .build()
  }

  async next(phone: string, message: string) {
    const customer = await this.customerRepository.findByPhone(phone)

    if (!customer) {
      //   return new RegistrationState(this.logger, this.responseBuilder, this.stateManager)
    }

    // return new MenuState()
  }
}
