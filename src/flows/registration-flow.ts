import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/states/flow-state-manager.js'

import type { FlowState } from '@/types/index.js'

@injectable()
export class RegistrationFlow {
  constructor(@inject(FlowStateManager) private flowState: FlowStateManager) {}

  // ###
  handle(phoneNumber: string, message: string, state: FlowState) {
    switch (state.step) {
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
  private handleNameInput(phoneNumber: string, name: string) {
    this.flowState.setState(phoneNumber, FlowStep.AWAITING_ADDRESS, { name })
    
    return 'Ótimo! Agora preciso do seu endereço completo para entrega:'
  }

  private handleAddressInput(phoneNumber: string, address: string) {
    this.flowState.setState(phoneNumber, FlowStep.AWAITING_BIRTHDAY, {
      address,
    })

    return 'Excelente! Agora, qual é a sua data de nascimento (DD/MM/AAAA)?'
  }

  private handleBirthdayInput(phoneNumber: string, birthday: string) {
    this.flowState.setState(phoneNumber, FlowStep.MENU, {
      birthday,
    })

    return 'Cadastro concluído com sucesso! Bem-vindo(a) ao menu principal.'
  }
  //
}
