import { inject, injectable } from 'tsyringe'

import { Category, FlowStep } from '@/config/enums.js'
import { MenuMessage, Message } from '@/config/messages.js'
import { ProductService } from '@/services/product-service.js'
import { FlowStateManager } from '@/states/flow-state-manager.js'
import { formatProductList } from '@/utils/message-formatter.js'
import type { Product } from '@/types/index.js'

@injectable()
export class MenuFlow {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(ProductService) private product: ProductService,
  ) {}

  handle(phoneNumber: string, message: string) {
    switch (message) {
      case '1':
        return this.showPizzaMenu(phoneNumber)
      case '2':
        return this.showDrinksMenu(phoneNumber)
      case '3':
        return this.trackOrder()
      case '4':
        return this.contactSupport()
      default:
        return Message.INVALID_OPTION + MenuMessage.MAIN
    }
  }

  private showPizzaMenu(phoneNumber: string) {
    const pizzas = this.product.getProducts(Category.FOOD)
    this.flowState.setState(phoneNumber, FlowStep.SELECTING_PIZZA)

    return formatProductList(pizzas as Product[])
  }

  private showDrinksMenu(phoneNumber: string) {
    const drinks = this.product.getProducts(Category.DRINK)
    this.flowState.setState(phoneNumber, FlowStep.SELECTING_DRINK)

    return formatProductList(drinks as Product[])
  }

  private trackOrder() {
    // TODO: Implementar lógica de rastreamento
    return 'Funcionalidade em desenvolvimento: trackerOrder'
  }

  private contactSupport() {
    // TODO: Implementar lógica de contato com o suporte
    return 'Funcionalidade em desenvolvimento: contactSupport'
  }
}
