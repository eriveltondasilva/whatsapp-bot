import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { LoggerProvider } from '@/providers/@index.js'
import { CustomerRepository } from '@/repositories/@index.js'
import { mainMenu } from '@/templates/main-menu.js'
import { createResponse, getGreeting, isValidAddress, isValidName } from '@/utils/@index.js'

import type { FlowActions, FlowHandler } from '@/types/index.js'

@injectable()
export class RegistrationFlow implements FlowHandler {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(CustomerRepository) private customerRepository: CustomerRepository,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  // ###
  public handle(phone: string, message: string) {
    this.logger.info('👋 Registration Flow: %o', { phone, message })
    const { step } = this.stateManager.getState(phone)

    const actions: FlowActions<FlowStep> = {
      [FlowStep.REGISTRATION]: () => this.initializeFlow(phone),
      [FlowStep.COLLECT_NAME]: () => this.handleNameInput(phone, message),
      [FlowStep.COLLECT_ADDRESS]: () => this.handleAddressInput(phone, message),
    }

    return actions[step]?.() || this.resetFlow(phone)
  }

  // ###
  private initializeFlow(phone: string) {
    this.stateManager.updateStep(phone, FlowStep.COLLECT_NAME)

    return createResponse(
      '🍕 Olá! Bem-vindo(a) à *Pizzaria Bella Pizza*!',
      'Estamos prontos para transformar a sua fome em felicidade.',
      'Antes de começar, precisamos fazer um _*rápido*_ cadastro. 🏃💨\n',
      '✍️ Qual o seu nome completo?',
      '> Exemplo: _"João da Silva"_',
    )
  }

  private handleNameInput(phone: string, name: string) {
    if (!isValidName(name)) {
      return createResponse(
        '❌ *NOME INVÁLIDO*',
        'Por favor, informe seu nome completo:',
        '> Exemplo: _"João da Silva"_',
      )
    }

    this.stateManager.updateStep(phone, FlowStep.COLLECT_ADDRESS)
    this.stateManager.updateCustomer(phone, { name })

    return createResponse(
      `${getGreeting()}, ${this.getFirstName(name)}!`,
      'Agora me diga onde vamos entregar suas delícias?\n',
      '✍️ Qual o seu endereço completo?',
      '> Exemplo: _"Rua das Flores, n° 83, Centro"_',
    )
  }

  private handleAddressInput(phone: string, address: string) {
    if (!isValidAddress(address)) {
      return createResponse(
        '❌ *ENDEREÇO INVÁLIDO*',
        'Por favor, informe seu endereço completo:',
        '> Exemplo: _"Rua das Flores, n° 83, Centro"_',
      )
    }

    const { data } = this.stateManager.getState(phone)

    const newCustomer = this.customerRepository.create({
      phone: phone,
      name: data?.name || '',
      address,
    })
    this.logger.ok('New customer registered', { newCustomer })

    this.stateManager.resetState(phone)
    this.stateManager.updateStep(phone, FlowStep.MAIN_MENU)

    return createResponse(
      `🎉 Cadastro concluído com sucesso, ${this.getFirstName(data?.name || 'cliente')}!`,
      'Agora, vamos ao que interessa: _*escolher algo gostoso*_! 😋\n',
      //
      ...mainMenu,
    )
  }

  private resetFlow(phone: string) {
    this.stateManager.resetState(phone)

    return createResponse('❌ Ops! Algo deu errado. Por favor, tente novamente.')
  }

  // ###
  private getFirstName(name: string): string {
    return name.split(' ')[0]
  }
}
