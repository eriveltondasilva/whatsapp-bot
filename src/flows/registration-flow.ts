import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { CustomerService } from '@/services/customer-service.js'
import { getGreeting, isValidAddress, isValidName } from '@/utils/index.js'

import { MainMenu } from '@/config/messages.js'
import type { FlowHandler, FlowState } from '@/types.js'

@injectable()
export class RegistrationFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(CustomerService) private customer: CustomerService,
  ) {}

  // ###
  public handle(
    phoneNumber: string,
    message: string,
    state: FlowState,
  ): string[] {
    switch (state.step) {
      case FlowStep.INITIAL:
        return this.initiateRegistration(phoneNumber)

      case FlowStep.COLLECT_NAME:
        return this.handleNameInput(phoneNumber, message)

      case FlowStep.COLLECT_ADDRESS:
        return this.handleAddressInput(phoneNumber, message)

      default:
        return ['Ops! Algo deu errado. Por favor, tente novamente.']
    }
  }

  // ###
  private initiateRegistration(phoneNumber: string): string[] {
    this.flowState.setState(phoneNumber, FlowStep.COLLECT_NAME)

    return [
      '🍕 Olá! Bem-vindo(a) à *Pizzaria [Nome da Pizzaria]*!\n',
      'Estamos prontos para transformar a sua fome em felicidade. 😊',
      'Antes de começar, precisamos fazer um _rápido_ cadastro. 🏃🏻💨\n',
      '✍🏻 *Qual o seu nome completo?*',
      '> Exemplo: _"João da Silva"_',
    ]
  }

  private handleNameInput(phoneNumber: string, name: string): string[] {
    if (!isValidName(name)) {
      return [
        '❌ *NOME INVÁLIDO*\n',
        'Por favor, informe seu nome completo:',
        '> Exemplo: _"João da Silva"_',
      ]
    }

    this.flowState.setState(phoneNumber, FlowStep.COLLECT_ADDRESS, { name })

    return [
      this.getGreeting(name),
      'Agora me diga onde vamos entregar suas delícias?\n',
      '✍🏻 *Qual o seu endereço completo?*',
      '> Exemplo: _"Rua das Flores, 123, Centro"_',
    ]
  }

  private handleAddressInput(phoneNumber: string, address: string): string[] {
    if (!isValidAddress(address)) {
      return [
        '❌ *ENDEREÇO INVÁLIDO*\n',
        'Por favor, informe seu endereço completo:',
        '> Exemplo: _"Rua das Flores, 123, Centro"_',
      ]
    }

    return this.finalizeRegistration(phoneNumber)
  }

  // TODO: implementar data de nascimento, caso preciso
  // private handleBirthdayInput(phoneNumber: string, birthday: string): string {}

  private finalizeRegistration(phoneNumber: string): string[] {
    const { data } = this.flowState.getState(phoneNumber)

    this.customer.createCustomer({
      phone: phoneNumber,
      name: data.name,
      address: data.address,
    })

    this.flowState.setState(phoneNumber, FlowStep.MENU)

    return [
      `🎉 Cadastro concluído com sucesso, ${this.getFirstName(data.name)}!`,
      'Agora, vamos ao que interessa: _escolher algo gostoso_! 😋\n',
      ...MainMenu,
    ]
  }

  // ###
  private getFirstName(name: string): string {
    return name.split(' ')[0]
  }

  private getGreeting(name: string): string {
    return `${getGreeting()}, ${this.getFirstName(name)}!`
  }
}
