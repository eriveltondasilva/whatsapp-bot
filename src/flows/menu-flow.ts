import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { mainMenu, orderMenu } from '@/templates/@index.js'

import { LoggerProvider } from '@/providers/@index.js'
import type { FlowActions, FlowHandler } from '@/types/index.js'
import { createResponse } from '@/utils/create-response.js'

@injectable()
export class MenuFlow implements FlowHandler {
  constructor(
    @inject(StateManager) private flowStateManager: StateManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  // ###
  public handle(phone: string, message: string) {
    this.logger.info('👋 Main Menu Flow', { phone, message })

    const actions: FlowActions = {
      1: () => this.showOrderMenu(phone),
      0: () => this.exitFlow(phone),
    }

    return actions[message]?.() || this.handleInvalidOption()
  }

  // ###
  private showOrderMenu(phone: string) {
    this.flowStateManager.updateStep(phone, FlowStep.ORDER)

    return createResponse(...orderMenu)
  }

  private tackOrder(phone: string) {
    return createResponse(
      '🚧 Esta funcionalidade está em desenvolvimento.',
      'Por favor, aguarde novidades!',
    )
  }

  private showOrderHistory(phone: string) {
    return createResponse(
      '🚧 Esta funcionalidade está em desenvolvimento.',
      'Por favor, aguarde novidades!',
    )
  }

  private updateProfile(phone: string) {
    return createResponse(
      '🚧 Esta funcionalidade está em desenvolvimento.',
      'Por favor, aguarde novidades!',
    )
  }

  private contactSupport(phone: string) {
    return createResponse(
      '🚧 Esta funcionalidade está em desenvolvimento.',
      'Por favor, aguarde novidades!',
    )
  }

  private exitFlow(phone: string) {
    this.flowStateManager.resetState(phone)
    return createResponse(
      '✨ Obrigado por utilizar nossos serviços!',
      'Se precisar de algo, estamos aqui para ajudar.\n',
      '👋 Até a próxima!',
    )
  }

  // ###
  private handleInvalidOption() {
    return createResponse(
      '❌ OPÇÃO INVÁLIDA:\n',
      //
      ...mainMenu,
    )
  }
}
