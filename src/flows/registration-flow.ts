import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { MenuMessage } from '@/config/messages.js'
import { CustomerService } from '@/services/customer-service.js'
import { FlowStateManager } from '@/states/flow-state-manager.js'
import { isValidAddress, isValidName } from '@/utils/validations.js'

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

      default:
        throw new Error('Estado inválido para registro')
    }
  }

  //*
  private handleNameInput(phoneNumber: string, name: string) {
    if (!isValidName(name)) {
      return 'Por favor, digite um nome válido:'
    }

    this.flowState.setState(phoneNumber, FlowStep.AWAITING_ADDRESS, {
      name,
    })

    return 'Ótimo! Agora preciso do seu endereço completo para entrega:'
  }

  private handleAddressInput(phoneNumber: string, address: string, data: any) {
    if (!isValidAddress(address)) {
      return 'Por favor, digite um endereço completo com rua, número e bairro:'
    }

    this.customer.createCustomer({
      ...data,
      address,
    })

    this.flowState.setState(phoneNumber, FlowStep.MENU)
    return MenuMessage.MAIN
  }
  //
}
