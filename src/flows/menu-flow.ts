import { inject, injectable } from 'tsyringe'

import { MainMenu } from '@/messages/main-menu.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { ProductService } from '@/services/product-service.js'

import { FlowStep } from '@/config/enums.js'
import type { FlowHandler } from '@/types.js'

@injectable()
export class MenuFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(ProductService) private productService: ProductService,
  ) {}

  public handle(phoneNumber: string, message: string): string[] {
    switch (message) {
      case FlowStep.MAIN_MENU:
        return ['👋 Bem-vindo ao nosso menu de opções!']
      case '1':
        return this.showOrderMenu(phoneNumber)

      case '2':
        return this.trackOrder(phoneNumber)

      case '3':
        return this.showOrderHistory(phoneNumber)

      case '4':
        return this.updateRegistration(phoneNumber)

      case '5':
        return this.contactSupport(phoneNumber)

      case '0':
        return this.goOut(phoneNumber)

      default:
        return [
          '❌ OPÇÃO INVÁLIDA',
          'Por favor, tente novamente.\n',
          ...MainMenu,
        ]
    }
  }

  private showOrderMenu(phoneNumber: string): string[] {
    return ['Funcionalidade em desenvolvimento: showOrderMenu']
  }

  private trackOrder(phoneNumber: string): string[] {
    return ['Funcionalidade em desenvolvimento: trackerOrder']
  }

  private showOrderHistory(phoneNumber: string): string[] {
    return ['Funcionalidade em desenvolvimento: showOrderHistory']
  }

  private updateRegistration(phoneNumber: string): string[] {
    return ['Funcionalidade em desenvolvimento: updateRegistration']
  }

  private contactSupport(phoneNumber: string): string[] {
    return ['Funcionalidade em desenvolvimento: contactSupport']
  }

  private goOut(phoneNumber: string): string[] {
    this.flowState.clearState(phoneNumber)
    return ['👋 Obrigado por utilizar nossos serviços!']
  }
}
