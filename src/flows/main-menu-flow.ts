import { inject, injectable } from 'tsyringe'

import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { FlowStep } from '@/config/enums.js'
import { LoggerService } from '@/services/logger-service.js'
import { mainMenu } from '@/messages/main-menu.js'
import { orderMenu } from '@/messages/order-menu.js'

import type { FlowActions, FlowHandler } from '@/types.js'

@injectable()
export class MainMenuFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  // ###
  public handle(phone: string, message: string) {
    this.logger.debug('👋 Menu Flow: %o', { phone, message })

    const actions: FlowActions = {
      1: () => this.showOrderMenu(phone),
      0: () => this.exitFlow(phone),
    }

    return actions[message]?.() || this.handleInvalidOption()
  }

  // ###
  private showOrderMenu(phone: string): string[] {
    this.flowStateManager.updateState(phone, { step: FlowStep.ORDER })

    return [
      'Está com vontade de comer uma pizza?\n',
      //
      ...orderMenu,
    ]
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
