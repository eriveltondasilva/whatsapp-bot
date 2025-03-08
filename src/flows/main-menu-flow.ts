import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { mainMenu, orderMenu } from '@/messages/index.js'
import { logger } from '@/providers/logger-provider.js'

import type { FlowActions, FlowHandler } from '@/types/index.js'

@injectable()
export class MainMenuFlow implements FlowHandler {
  constructor(@inject(StateManager) private flowStateManager: StateManager) { }

  // ###
  public handle(phone: string, message: string) {
    logger.info('👋 Main Menu Flow: %o', { phone, message })

    const actions: FlowActions = {
      1: () => this.showOrderMenu(phone),
      0: () => this.exitFlow(phone),
    }

    return actions[message]?.() || this.handleInvalidOption()
  }

  // ###
  private showOrderMenu(phone: string): string[] {
    this.flowStateManager.updateState(phone, { step: FlowStep.ORDER })

    return [...orderMenu]
  }

  private tackOrder(phone: string): string[] {
    return ['🚧 Esta funcionalidade está em desenvolvimento.', 'Por favor, aguarde novidades!']
  }

  private showOrderHistory(phone: string): string[] {
    return ['🚧 Esta funcionalidade está em desenvolvimento.', 'Por favor, aguarde novidades!']
  }

  private updateProfile(phone: string): string[] {
    return ['🚧 Esta funcionalidade está em desenvolvimento.', 'Por favor, aguarde novidades!']
  }

  private contactSupport(phone: string): string[] {
    return ['🚧 Esta funcionalidade está em desenvolvimento.', 'Por favor, aguarde novidades!']
  }

  private exitFlow(phone: string): string[] {
    this.flowStateManager.clearState(phone)
    return [
      '✨ Obrigado por utilizar nossos serviços!',
      'Se precisar de algo, estamos aqui para ajudar.\n',
      '👋 Até a próxima!',
    ]
  }

  // ###
  private handleInvalidOption(): string[] {
    return [
      '❌ OPÇÃO INVÁLIDA:\n',
      //
      ...mainMenu,
    ]
  }
}
