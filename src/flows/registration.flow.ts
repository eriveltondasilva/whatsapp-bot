import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { FlowKeys, RegistrationSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { LoggerProvider } from '@/providers/@index.js'
import { CustomerRepository } from '@/repositories/@index.js'
import { mainMenu } from '@/templates/main-menu.js'
import { getFirstName, getGreeting, isValidAddress, isValidName } from '@/utils/@index.js'

import type { FlowActions, FlowHandlerProps, FlowState, IFlowHandler } from '@/types/index.js'

@injectable()
export class RegistrationFlow implements IFlowHandler {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(CustomerRepository) private customerRepository: CustomerRepository,
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(TextResponseBuilder) private responseBuilder: TextResponseBuilder,
  ) {}

  // ###
  public handle({ state, phone, message }: FlowHandlerProps) {
    this.logger.info('📌 Registration Flow')

    const actions: FlowActions<RegistrationSteps> = {
      [RegistrationSteps.INITIAL]: () => this.initializeFlow(phone),
      [RegistrationSteps.COLLECT_NAME]: () => this.handleNameInput(phone, message),
      [RegistrationSteps.COLLECT_ADDRESS]: () => this.handleAddressInput(state, phone, message),
    }

    return actions[state.context.step as RegistrationSteps]()
  }

  // ###
  private initializeFlow(phone: string) {
    this.stateManager.updateStep(phone, RegistrationSteps.COLLECT_NAME)

    return this.responseBuilder
      .addText('🍕 Olá! Bem-vindo(a) à *Pizzaria Bella Pizza*!')
      .addText('Estamos prontos para transformar a sua fome em felicidade.')
      .addText('Antes de começar, precisamos fazer um _*rápido*_ cadastro. 🏃💨')
      .addLineBreak()
      .addText('Por favor, me informe o seu nome completo:')
      .addText('> exemplo: _"João da Silva"_')
      .build()
  }

  private handleNameInput(phone: string, name: string) {
    if (!isValidName(name)) {
      return this.responseBuilder
        .addTitle('❌ NOME INVÁLIDO')
        .addLineBreak()
        .addText('Por favor, informe seu nome completo:')
        .addText('> exemplo: _"João da Silva"_')
        .build()
    }

    this.stateManager.updateStep(phone, RegistrationSteps.COLLECT_ADDRESS)
    this.stateManager.updateCustomer(phone, { name })

    return this.responseBuilder
      .addText(`${getGreeting()}, ${getFirstName(name)}!`)
      .addText('Agora me diga onde vamos entregar suas delícias?')
      .addLineBreak()
      .addText('Qual o seu endereço completo?')
      .addText('> exemplo: _"Rua das Flores, n° 83, Centro"_')
      .build()
  }

  private handleAddressInput(state: FlowState, phone: string, message: string) {
    if (!isValidAddress(message)) {
      return this.responseBuilder
        .addTitle('❌ ENDEREÇO INVÁLIDO')
        .addLineBreak()
        .addText('Por favor, informe seu endereço completo:')
        .addText('> exemplo: _"Rua das Flores, n° 83, Centro"_')
        .build()
    }

    const customer = state.customer

    if (!customer?.name) {
      return this.resetFlow(phone)
    }

    const newCustomer = this.customerRepository.create({
      phone: phone,
      name: customer.name,
      address: message,
    })
    this.logger.ok('New customer registered', { newCustomer })

    this.stateManager.resetState(phone)
    this.stateManager.updateStep(phone, FlowKeys.MENU)

    return this.responseBuilder
      .addText(`🎉 Cadastro concluído com sucesso, ${getFirstName(customer?.name || 'cliente')}!`)
      .addText('Agora, vamos ao que interessa: _*escolher algo gostoso*_! 😋')
      .addLineBreak()
      .addMenu(mainMenu)
      .build()
  }

  private resetFlow(phone: string) {
    this.stateManager.resetState(phone)
    return this.responseBuilder
      .addText('❌ Ops! Algo deu errado. Por favor, tente novamente.')
      .build()
  }
}
