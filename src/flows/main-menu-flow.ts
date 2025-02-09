import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { LoggerService } from '@/services/logger-service.js'

import type { FlowActions, FlowHandler } from '@/types.js'

@injectable()
export class MainMenuFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  // ###
  public handle(phone: string, message: string): string[] {
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
      '1️⃣ - Pizza inteira 🍕',
      '2️⃣ - Pizza dois sabores 🍕🍕',
      '3️⃣ - Bebidas 🍺',
      '4️⃣ - Finalizar pedido 🛒',
      '0️⃣ - Cancelar pedido ❌',
      //
      '\n✍🏻 *Digite o número da opção desejada:*',
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
      'Se precisar de algo, estamos aqui para ajudar.',
      '👋 Até a próxima!',
    ]
  }

  private handleInvalidOption(): string[] {
    return [
      '❌ OPÇÃO INVÁLIDA:\n',
      //
      '📝 *MENU PRINCIPAL:*\n',
      //
      '1️⃣ - Fazer Pedido 🛒',
      '2️⃣ - Acompanhar Pedido 🚚',
      '3️⃣ - Histórico de Pedidos 📜',
      '4️⃣ - Atualizar Cadastro 📝',
      '5️⃣ - Falar com Atendente 👨‍💼',
      '0️⃣ - Sair ❌',
      //
      '\n✍🏻 *Digite o número da opção desejada:*',
    ]
  }
}
