import { inject, injectable } from 'tsyringe'

import { FlowStateManager } from '@/managers/index.js'
import { LoggerService, ProductService } from '@/services/index.js'
import { FlowStep } from '@/config/enums.js'
import { PizzaMessages } from '@/messages/pizza.js'

import type { FlowActions, FlowHandler } from '@/types.js'

@injectable()
export class PizzaFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(ProductService) private productService: ProductService,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  handle(phone: string, message: string): string[] {
    this.logger.info('🍕 Pizza Flow: %o', { phone, message })
    const { step } = this.flowStateManager.getState(phone)

    const actions: FlowActions = {
      [FlowStep.PIZZA_TYPE]: () => this.handlePizzaType(phone, message),
      [FlowStep.PIZZA_FLAVOR]: () => this.handlePizzaFlavor(phone, message),
      [FlowStep.PIZZA_QUANTITY]: () => this.handlePizzaQuantity(phone, message),
      [FlowStep.PIZZA_OBSERVATIONS]: () => this.handlePizzaObservations(phone, message),
    }

    return actions[step]?.() || this.handleDefaultAction()
  }

  // ###
  private handlePizzaType(phone: string, message: string) {
    const pizzaType = message === '1' ? 'full' : 'half'
    const pizzas = this.productService.getProducts()

    if (!pizzas?.length) {
      this.flowStateManager.clearState(phone)
      return PizzaMessages.NO_FLAVORS_AVAILABLE
    }

    this.flowStateManager.updateState(phone, {
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

  private handlePizzaFlavor(phone: string, message: string) {
    const { data } = this.flowStateManager.getState(phone)
    const pizzas = this.productService.getProducts()

    const selectedIndex = Number.parseInt(message) - 1

    if (Number.isNaN(selectedIndex) || !pizzas?.[selectedIndex]) {
      return PizzaMessages.INVALID_FLAVOR
    }

    const selectedFlavors = [...(data?.selectedFlavors || []), pizzas[selectedIndex]]

    if (data?.pizzaType === 'half' && selectedFlavors.length === 1) {
      this.flowStateManager.updateState(phone, {
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

    this.flowStateManager.updateState(phone, {
      step: FlowStep.PIZZA_QUANTITY,
      data: {
        selectedFlavors,
      },
    })

    return PizzaMessages.SELECT_QUANTITY
  }

  private handlePizzaQuantity(phone: string, message: string) {
    const quantity = Number.parseInt(message)

    if (Number.isNaN(quantity) || quantity < 1 || quantity > 5) {
      return PizzaMessages.INVALID_QUANTITY
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.ORDER,
      data: {
        quantity,
      },
    })

    return [
      '✍🏻 Deseja adicionar alguma observação? (opcional)\n',
      'Exemplo: retirar cebola, mais queijo, etc.\n',
      '0 - Não desejo adicionar observações',
    ]
  }

  private handlePizzaObservations(phone: string, message: string) {
    const observations = message === '0' ? undefined : message

    return PizzaMessages.ORDER_OPTIONS
  }

  // ###
  private handleDefaultAction() {
    return PizzaMessages.INVALID_STEP
  }
}
