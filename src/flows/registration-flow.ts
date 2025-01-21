import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { CustomerService } from '@/services/customer-service.js'
import { FlowStateManager } from '@/states/flow-state-manager.js'
import type { FlowState } from '@/types/index.js'
import { getGreeting } from '@/utils/get-greeting.js'
import { isValidName } from '@/utils/validations.js'

@injectable()
export class RegistrationFlow {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(CustomerService) private customer: CustomerService,
  ) {}

  // ###
  handle(phoneNumber: string, message: string, state: FlowState): string {
    switch (state.step) {
      case FlowStep.INITIAL:
        return this.handleInitial(phoneNumber)

      case FlowStep.COLLECT_NAME:
        return this.handleNameInput(phoneNumber, message)

      case FlowStep.COLLECT_ADDRESS:
        return this.handleAddressInput(phoneNumber, message)

      case FlowStep.COLLECT_BIRTHDAY:
        return this.handleBirthdayInput(phoneNumber, message)

      default:
        return 'Ops! Algo deu errado. Por favor, tente novamente.'
    }
  }

  // ###
  private handleInitial(phoneNumber: string): string {
    this.flowState.setState(phoneNumber, FlowStep.COLLECT_NAME)

    return [
      '🍕 Olá! Bem-vindo(a) à *Pizzaria #####*!\n',
      'Estamos prontos para transformar sua fome em felicidade. 😊',
      'Antes de começar, precisamos fazer um rápido cadastro!',
      'Vamos lá?\n',
      '✍🏻 Qual o seu nome completo?',
    ].join('\n')
  }

  private handleNameInput(phoneNumber: string, name: string): string {
    if (!isValidName(name)) {
      return [
        '❌ *Nome inválido.*',
        'Por favor, informe um nome completo.\n',
        '> Exemplo: _"João da Silva"_',
      ].join('\n')
    }

    this.flowState.setState(phoneNumber, FlowStep.COLLECT_ADDRESS, { name })

    return [
      this.getGreeting(name),
      'Agora me diga onde vamos entregar suas delícias?\n',
      '✍🏻 Informe o endereço completo _(Rua, número, bairro)_:',
    ].join('\n')
  }

  private handleAddressInput(phoneNumber: string, address: string): string {
    if (!address) {
      return [
        '❌ *Endereço inválido*.',
        'Por favor, informe um endereço completo.\n',
        '> Exemplo: _"Rua das Flores, 123, Centro"_',
      ].join('\n')
    }

    this.flowState.setState(phoneNumber, FlowStep.COLLECT_BIRTHDAY, {
      address,
    })

    return [
      'Excelente, muito bem!\n',
      '✍🏻 Informe a sua data de nascimento _(DD/MM/AAAA)_:',
    ].join('\n')
  }

  private handleBirthdayInput(phoneNumber: string, birthday: string): string {
    if (!birthday) {
      return [
        '❌ *Data inválida.*',
        'Por favor, informe uma data válida.\n',
        '> Exemplo: _"01/01/2000"_',
      ].join('\n')
    }

    const { data } = this.flowState.getState(phoneNumber)

    // this.customer.createCustomer({
    //   phone: phoneNumber,
    //   name: data.name,
    //   address: data.address,
    //   birthday,
    // })

    this.flowState.setState(phoneNumber, FlowStep.MENU)

    return [
      `🎉 Pronto, *${this.getFirstName(data.name)}*!`,
      'Seu cadastro está completo e já está salvo para as próximas vezes.',
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
