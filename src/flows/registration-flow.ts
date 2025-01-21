import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { CustomerService } from '@/services/customer-service.js'
import { getGreeting, isValidAddress, isValidName } from '@/utils/index.js'

import type { FlowState } from '@/types/index.js'

@injectable()
export class RegistrationFlow {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(CustomerService) private customer: CustomerService,
  ) {}

  // ###
  public handle(
    phoneNumber: string,
    message: string,
    state: FlowState,
  ): string {
    switch (state.step) {
      case FlowStep.INITIAL:
        return this.initiateRegistration(phoneNumber)

      case FlowStep.COLLECT_NAME:
        return this.handleNameInput(phoneNumber, message)

      case FlowStep.COLLECT_ADDRESS:
        return this.handleAddressInput(phoneNumber, message)

      default:
        return 'Ops! Algo deu errado. Por favor, tente novamente.'
    }
  }

  // ###
  private initiateRegistration(phoneNumber: string): string {
    this.flowState.setState(phoneNumber, FlowStep.COLLECT_NAME)

    return [
      '🍕 Olá! Bem-vindo(a) à *Pizzaria #####*!\n',
      'Estamos prontos para transformar a sua fome em felicidade. 😊',
      'Antes de começar, precisamos fazer um rápido cadastro. 🏃🏻‍➡️\n',
      '✍🏻 *Qual o seu nome completo?*',
      '> Exemplo: _"João da Silva"_',
    ].join('\n')
  }

  private handleNameInput(phoneNumber: string, name: string): string {
    if (!isValidName(name)) {
      return [
        '❌ *NOME INVÁLIDO*',
        'Por favor, informe um nome completo.\n',
        '> Exemplo: _"João da Silva"_',
      ].join('\n')
    }

    this.flowState.setState(phoneNumber, FlowStep.COLLECT_ADDRESS, { name })

    return [
      this.getGreeting(name),
      'Agora me diga onde vamos entregar suas delícias?\n',
      '✍🏻 *Qual o seu endereço completo?*',
      '> Exemplo: _"Rua das Flores, 123, Centro"_',
    ].join('\n')
  }

  private handleAddressInput(phoneNumber: string, address: string): string {
    if (!isValidAddress(address)) {
      return [
        '❌ *ENDEREÇO INVÁLIDO*',
        'Por favor, informe um endereço completo.\n',
        '> Exemplo: _"Rua das Flores, 123, Centro"_',
      ].join('\n')
    }

    return this.finalizeRegistration(phoneNumber)
  }

  // TODO: implementar data de nascimento, caso preciso
  // private handleBirthdayInput(phoneNumber: string, birthday: string): string {}

  private finalizeRegistration(phoneNumber: string): string {
    const { data } = this.flowState.getState(phoneNumber)

    this.customer.createCustomer({
      phone: phoneNumber,
      name: data.name,
      address: data.address,
    })

    this.flowState.setState(phoneNumber, FlowStep.MENU)

    return [
      `🎉 Cadastro concluído com sucesso, ${this.getFirstName(data.name)}!`,
      'Agora, vamos ao que interessa: escolher algo gostoso! 😋',
    ].join('\n')
  }

  // ###
  private getFirstName(name: string): string {
    return name.split(' ')[0]
  }

  private getGreeting(name: string): string {
    return `${getGreeting()}, ${this.getFirstName(name)}!`
  }
}
