import { inject, injectable } from 'tsyringe'

import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { LoggerService } from '@/services/logger-service.js'
import { OrderService } from '@/services/order-service.js'
import { ProductService } from '@/services/product-service.js'

import { FlowStep } from '@/config/enums.js'
import type { FlowHandler } from '@/types.js'

@injectable()
export class PizzaFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(ProductService) private productService: ProductService,
    @inject(OrderService) private orderService: OrderService,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  handle(phoneNumber: string, message: string): string[] {
    this.logger.info('🍕 Pizza Flow: %o', { phoneNumber, message })
    const { step } = this.flowStateManager.getState(phoneNumber)

    switch (step) {
      case FlowStep.PIZZA:
        return this.getPizzaType(phoneNumber, message)

      case FlowStep.PIZZA_TYPE:
        return this.handlePizzaType(phoneNumber, message)

      case FlowStep.PIZZA_FLAVOR:
        return this.handlePizzaFlavor(phoneNumber, message)

      case FlowStep.PIZZA_QUANTITY:
        return this.handlePizzaQuantity(phoneNumber, message)

      default:
        return ['']
    }
  }

  // ###
  private getPizzaType(phoneNumber: string, message: string) {
    return [`🍕 Pizza Flow: Pizza Type ${message}`]
  }

  private handlePizzaType(phoneNumber: string, message: string) {
    return ['🍕 Pizza Flow: Pizza Type']
  }

  private handlePizzaFlavor(phoneNumber: string, message: string) {
    return ['🍕 Pizza Flow: Pizza Flavor']
  }

  private handlePizzaQuantity(phoneNumber: string, message: string) {
    return ['🍕 Pizza Flow: Pizza Quantity']
  }
}
