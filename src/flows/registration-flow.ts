import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { CustomerService } from '@/services/customer-service.js'
import { FlowStateManager } from '@/states/flow-state-manager.js'
import {
  isValidAddress,
  isValidBirthday,
  isValidName,
} from '@/utils/validations.js'

import type { FlowState } from '@/types/index.js'

@injectable()
export class RegistrationFlow {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(CustomerService) private customer: CustomerService,
  ) {}

  // ###
  handle(phoneNumber: string, message: string, state: FlowState) {
    switch (state.step) {
      case FlowStep.AWAITING_NAME:
        return this.handleNameInput(phoneNumber, message)

      case FlowStep.AWAITING_ADDRESS:
        return this.handleAddressInput(phoneNumber, message, state.data)

      case FlowStep.AWAITING_BIRTHDAY:
        return this.handleBirthdayInput(phoneNumber, message)

      default:
        throw new Error('Estado inválido para registro')
    }
  }

  // ###
  private handleNameInput(phoneNumber: string, name: string) {
    if (!isValidName(name)) {
      return 'Por favor, digite um nome válido:'
    }

    this.flowState.setState(phoneNumber, FlowStep.AWAITING_ADDRESS)

    console.log('RegistrationFlow.handleNameInput')
    console.log('name:', name)

    return 'Ótimo! Agora preciso do seu endereço completo para entrega:'
  }

  private handleAddressInput(phoneNumber: string, address: string, data: any) {
    if (!isValidAddress(address)) {
      return 'Por favor, digite um endereço completo com rua, número e bairro:'
    }
    console.log('RegistrationFlow.handleAddressInput')

    this.flowState.setState(phoneNumber, FlowStep.AWAITING_BIRTHDAY)

    console.log('\nRegistrationFlow.handleAddressInput')
    console.log('data:', data)
    console.log('address:', address)
    console.log('state:', this.flowState.getState(phoneNumber))

    return 'Excelente! Agora, qual é a sua data de nascimento (DD/MM/AAAA)?'
  }

  private handleBirthdayInput(phoneNumber: string, birthday: string) {
    if (!isValidBirthday(birthday)) {
      return 'Por favor, digite uma data de nascimento válida (DD/MM/AAAA):'
    }

    const { data } = this.flowState.getState(phoneNumber)
    console.log(data)

    // this.customer.createCustomer({
    //   name: data.name,
    //   phone: phoneNumber,
    //   address: data.address,
    //   birthDate: birthday,
    // })

    this.flowState.setState(phoneNumber, FlowStep.MENU)

    return 'Cadastro concluído com sucesso! Bem-vindo(a) ao menu principal.'
  }
  //
}
