import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { LoggerService } from '@/services/logger-service.js'

import type { FlowHandler } from '@/types.js'

@injectable()
export class MenuFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  public handle(phoneNumber: string, message: string): string[] {
    this.logger.debug('👋 Menu Flow: %o', { phoneNumber, message })

    switch (message) {
      case '1':
        return this.makeOrder(phoneNumber)

      case '0':
        return this.exitFlow(phoneNumber)

      default:
        return [
          '❌ OPÇÃO INVÁLIDA',
          'Por favor, selecione uma das opções abaixo:\n',
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

  // ###
  private makeOrder(phoneNumber: string): string[] {
    this.flowStateManager.updateState(phoneNumber, { step: FlowStep.ORDER })
    return [
      '🍕 Está com vontade de comer uma pizza?',
      '1️⃣ - Pizza inteira',
      '2️⃣ - Pizza dois sabores',
      '3️⃣ - Bebidas',
      '4️⃣ - Finalizar pedido',
      '0️⃣ - Cancelar pedido',
    ]
  }

  private tackOrder(phoneNumber: string): string[] {
    return [
      '🚧 Esta funcionalidade está em desenvolvimento. Por favor, aguarde novidades!',
    ]
  }

  private showOrderHistory(phoneNumber: string): string[] {
    return [
      '🚧 Esta funcionalidade está em desenvolvimento. Por favor, aguarde novidades!',
    ]
  }

  private updateProfile(phoneNumber: string): string[] {
    return [
      '🚧 Esta funcionalidade está em desenvolvimento. Por favor, aguarde novidades!',
    ]
  }

  private contactSupport(phoneNumber: string): string[] {
    return [
      '🚧 Esta funcionalidade está em desenvolvimento. Por favor, aguarde novidades!',
    ]
  }

  private exitFlow(phoneNumber: string): string[] {
    this.flowStateManager.clearState(phoneNumber)
    return [
      '✨ Obrigado por utilizar nossos serviços!',
      'Se precisar de algo, estamos aqui para ajudar.',
      '👋 Até a próxima!',
    ]
  }
}
