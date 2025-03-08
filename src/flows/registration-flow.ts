import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { CustomerRepository } from '@/repositories/@index.js'
import { mainMenu } from '@/templates/main-menu.js'
import { getGreeting, isValidAddress, isValidName, logger } from '@/utils/@index.js'

import type { FlowActions, FlowHandler } from '@/types/index.js'

@injectable()
export class RegistrationFlow implements FlowHandler {
  constructor(
    @inject(StateManager) private flowStateManager: StateManager,
    @inject(CustomerRepository) private customerRepository: CustomerRepository,
  ) { }

  // ###
  public handle(phone: string, message: string) {
    logger.info('👋 Registration Flow: %o', { phone, message })
    const { step } = this.flowStateManager.getState(phone)

    const actions: FlowActions<FlowStep> = {
      [FlowStep.REGISTRATION]: () => this.initializeFlow(phone),
      [FlowStep.COLLECT_NAME]: () => this.handleNameInput(phone, message),
      [FlowStep.COLLECT_ADDRESS]: () => this.handleAddressInput(phone, message),
    }

    return actions[step]?.() || this.resetFlow(phone)
  }

  // ###
  private initializeFlow(phone: string): string[] {
    this.flowStateManager.updateState(phone, { step: FlowStep.COLLECT_NAME })

    return [
      '🍕 Olá! Bem-vindo(a) à *Pizzaria Bella Pizza*!',
      'Estamos prontos para transformar a sua fome em felicidade.',
      'Antes de começar, precisamos fazer um _*rápido*_ cadastro. 🏃💨\n',
      //
      '✍️ Qual o seu nome completo?',
      '> Exemplo: _"João da Silva"_',
    ]
  }

  private handleNameInput(phone: string, name: string): string[] {
    if (!isValidName(name)) {
      return [
        '❌ *NOME INVÁLIDO*',
        'Por favor, informe seu nome completo:',
        '> Exemplo: _"João da Silva"_',
      ]
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.COLLECT_ADDRESS,
      data: { name },
    })

    return [
      `${getGreeting()}, ${this.getFirstName(name)}!`, // Bom dia, nome do usuário
      'Agora me diga onde vamos entregar suas delícias?\n',
      //
      '✍️ Qual o seu endereço completo?',
      '> Exemplo: _"Rua das Flores, n° 83, Centro"_',
    ]
  }

  private handleAddressInput(phone: string, address: string): string[] {
    if (!isValidAddress(address)) {
      return [
        '❌ *ENDEREÇO INVÁLIDO*',
        'Por favor, informe seu endereço completo:',
        '> Exemplo: _"Rua das Flores, n° 83, Centro"_',
      ]
    }

    const { data } = this.flowStateManager.getState(phone)

    const newCustomer = this.customerRepository.create({
      phone: phone,
      name: data?.name || '',
      address,
    })
    logger.info('📝 New customer registered: %o', { newCustomer })

    this.flowStateManager.clearState(phone)
    this.flowStateManager.updateState(phone, { step: FlowStep.MAIN_MENU })

    return [
      `🎉 Cadastro concluído com sucesso, ${this.getFirstName(data?.name || 'cliente')}!`,
      'Agora, vamos ao que interessa: _*escolher algo gostoso*_! 😋\n',
      //
      ...mainMenu,
    ]
  }

  private resetFlow(phone: string): string[] {
    this.flowStateManager.clearState(phone)

    return ['❌ Ops! Algo deu errado. Por favor, tente novamente.']
  }

  // ###
  private getFirstName(name: string): string {
    return name.split(' ')[0]
  }
}
