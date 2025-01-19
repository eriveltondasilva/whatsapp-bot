import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { PIZZERIA_NAME } from '@/config/env.js'
import { CustomerService } from '@/services/customer-service.js'
import { FlowStateManager } from '@/states/flow-state-manager.js'
import type { FlowState } from '@/types/index.js'
import { isValidName } from '@/utils/validations.js'

@injectable()
export class RegistrationFlow {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(CustomerService) private customer: CustomerService,
  ) {}

  // ###
  handle(phoneNumber: string, message: string, state: FlowState) {
    switch (state.step) {
      case FlowStep.INITIAL:
        return this.handleInitial(phoneNumber)

      case FlowStep.AWAITING_NAME:
        return this.handleNameInput(phoneNumber, message)

      case FlowStep.AWAITING_ADDRESS:
        return this.handleAddressInput(phoneNumber, message)

      case FlowStep.AWAITING_BIRTHDAY:
        return this.handleBirthdayInput(phoneNumber, message)

      default:
        throw new Error('Estado inválido para registro')
    }
  }

  // ###
  private handleInitial(phoneNumber: string): string {
    this.flowState.setState(phoneNumber, FlowStep.AWAITING_NAME)

    return [
      `🍕 Olá! Bem-vindo(a) à *Pizzaria ${PIZZERIA_NAME}*!\n`,
      'Estamos prontos para transformar sua fome em felicidade. 😊',
      'Antes de começar, vamos precisar fazer um rápido cadastro!',
      'Vamos lá?\n',
      '✍🏻 Qual o seu nome completo?',
    ].join('\n')
  }

  private handleNameInput(phoneNumber: string, name: string): string {
    if (!isValidName(name)) {
      return '❌ Nome inválido. Por favor, informe um nome completo.'
    }

    this.flowState.setState(phoneNumber, FlowStep.AWAITING_ADDRESS, { name })

    return [
      `Legal, *${this.getFirstName(name)}*!`,
      'Agora me diga onde vamos entregar suas delícias?\n',
      '✍🏻 Informe o endereço completo _(Rua, número, bairro)_:',
    ].join('\n')
  }

  private handleAddressInput(phoneNumber: string, address: string): string {
    if (!address) {
      return '❌ Endereço inválido. Por favor, informe um endereço completo.'
    }

    this.flowState.setState(phoneNumber, FlowStep.AWAITING_BIRTHDAY, {
      address,
    })

    return [
      'Excelente, muito bem!\n',
      '✍🏻 Informe a sua data de nascimento _(DD/MM/AAAA)_:',
    ].join('\n')
  }

  private handleBirthdayInput(phoneNumber: string, birthday: string): string {
    if (!birthday) {
      return '❌ Data inválida. Por favor, informe uma data válida.'
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
      `Pronto, *${this.getFirstName(data.name)}*!`,
      'Seu cadastro está completo e já está salvo para as próximas vezes.',
      'Agora, vamos ao que interessa: escolher algo gostoso! 😋',
    ].join('\n')
  }

  // ###
  private getFirstName(name: string): string {
    return name.split(' ')[0]
  }
}
