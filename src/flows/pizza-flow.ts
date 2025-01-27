import { inject, injectable } from 'tsyringe'

import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { LoggerService } from '@/services/logger-service.js'
import { OrderService } from '@/services/order-service.js'
import { ProductService } from '@/services/product-service.js'

import { FlowStep } from '@/config/enums.js'
import { PizzaMessages } from '@/messages/pizza.js'
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

    const actions: Record<string, () => string[]> = {
      [FlowStep.PIZZA_TYPE]: () => this.handlePizzaType(phoneNumber, message),
      [FlowStep.PIZZA_FLAVOR]: () => this.handlePizzaFlavor(phoneNumber, message),
      [FlowStep.PIZZA_QUANTITY]: () => this.handlePizzaQuantity(phoneNumber, message),
    }

    return actions[step]?.() || PizzaMessages.INVALID_STEP
  }

  // ###
  private handlePizzaType(phoneNumber: string, message: string) {
    const pizzaType = message === '1' ? 'full' : 'half'
    const pizzas = this.productService.getProducts()

    if (!pizzas?.length) {
      this.flowStateManager.clearState(phoneNumber)
      return PizzaMessages.NO_FLAVORS_AVAILABLE
    }

    this.flowStateManager.updateState(phoneNumber, {
      step: FlowStep.PIZZA_FLAVOR,
      data: {
        pizzaType,
      },
    })

    return [
      pizzaType === 'full' ? PizzaMessages.SELECT_FLAVOR_FULL : PizzaMessages.SELECT_FIRST_FLAVOR,
      ...PizzaMessages.buildProductList(pizzas),
      PizzaMessages.TYPE_NUMBER,
    ]
  }

  private handlePizzaFlavor(phoneNumber: string, message: string) {
    const { data } = this.flowStateManager.getState(phoneNumber)
    const pizzas = this.productService.getProducts()

    const selectedIndex = Number.parseInt(message) - 1

    if (Number.isNaN(selectedIndex) || !pizzas?.[selectedIndex]) {
      return PizzaMessages.INVALID_FLAVOR
    }

    const selectedFlavors = [...(data?.selectedFlavors || []), pizzas[selectedIndex]]

    if (data?.pizzaType === 'half' && selectedFlavors.length === 1) {
      this.flowStateManager.updateState(phoneNumber, {
        step: FlowStep.PIZZA_FLAVOR,
        data: {
          selectedFlavors,
        },
      })

      return [
        PizzaMessages.SELECT_SECOND_FLAVOR,
        ...PizzaMessages.buildProductList(pizzas),
        PizzaMessages.TYPE_NUMBER,
      ]
    }

    this.flowStateManager.updateState(phoneNumber, {
      step: FlowStep.PIZZA_QUANTITY,
      data: {
        selectedFlavors,
      },
    })

    return PizzaMessages.SELECT_QUANTITY
  }

  private handlePizzaQuantity(phoneNumber: string, message: string) {
    if (!['1', '2', '3', '4', '5'].includes(message)) {
      return PizzaMessages.INVALID_QUANTITY
    }

    const { data } = this.flowStateManager.getState(phoneNumber)
    const quantity = Number.parseInt(message)

    this.flowStateManager.updateState(phoneNumber, {
      step: FlowStep.ORDER,
      data: {
        quantity,
      },
    })

    this.logger.info('🍕 Pizza Flow: %o', { phoneNumber, quantity })
    return PizzaMessages.ORDER_OPTIONS
  }
}
