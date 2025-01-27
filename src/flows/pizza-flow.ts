import { inject, injectable } from 'tsyringe'

import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { LoggerService } from '@/services/logger-service.js'
import { OrderService } from '@/services/order-service.js'
import { ProductService } from '@/services/product-service.js'

import { FlowStep } from '@/config/enums.js'
import { productList } from '@/messages/pizza.js'
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
      [FlowStep.PIZZA_FLAVOR]: () =>
        this.handlePizzaFlavor(phoneNumber, message),
      [FlowStep.PIZZA_QUANTITY]: () =>
        this.handlePizzaQuantity(phoneNumber, message),
    }

    return actions[step]?.() || this.handleInvalidStep()
  }

  // ###
  private handlePizzaType(phoneNumber: string, message: string) {
    const pizzaType = message === '1' ? 'full' : 'half'

    this.flowStateManager.updateState(phoneNumber, {
      step: FlowStep.PIZZA_FLAVOR,
      data: {
        pizzaType,
        selectedFlavors: [],
      },
    })

    const pizza = this.productService.getProducts()
    if (!pizza?.length) {
      this.flowStateManager.clearState(phoneNumber)
      return ['❌ Desculpe, não encontramos sabores disponíveis no momento.']
    }

    const menuTitle =
      pizzaType === 'full'
        ? '🍕 *ESCOLHA O SABOR DA PIZZA:*\n'
        : '🍕 *ESCOLHA O PRIMEIRO SABOR DA PIZZA:*\n'

    return [
      menuTitle,
      ...productList(pizza),
      '\n✍️ *Digite o número da opção desejada:*',
    ]
  }

  private handlePizzaFlavor(phoneNumber: string, message: string) {
    const { data } = this.flowStateManager.getState(phoneNumber)
    const pizzas = this.productService.getProducts()

    const selectedPizza = Number.parseInt(message) - 1

    if (Number.isNaN(selectedPizza) || !pizzas?.[selectedPizza]) {
      return [
        '❌ OPÇÃO INVÁLIDA!',
        'Por favor, digite o número válido da opção desejada.\n',
        '✍️ *Digite o número da opção desejada:*',
      ]
    }

    const selectedFlavors = [
      ...(data?.selectedFlavors || []),
      pizzas[selectedPizza],
    ]

    if (data?.pizzaType === 'half' && selectedFlavors.length === 1) {
      this.flowStateManager.updateState(phoneNumber, {
        step: FlowStep.PIZZA_FLAVOR,
        data: {
          ...data,
          selectedFlavors,
        },
      })

      return [
        '🍕 *ESCOLHA O SEGUNDO SABOR DA PIZZA:*\n',
        ...productList(pizzas),
        '✍\n️ *Digite o número do segundo sabor:*',
      ]
    }

    this.flowStateManager.updateState(phoneNumber, {
      step: FlowStep.PIZZA_QUANTITY,
    })

    return ['🍕 Digite a quantidade da pizza escolhida:']
  }

  private handlePizzaQuantity(phoneNumber: string, message: string) {
    const { data } = this.flowStateManager.getState(phoneNumber)

    console.log('teste de quantidade: %o', data)
    return ['🍕 Pizza Flow: Pizza Quantity']
  }

  private handleInvalidStep() {
    return ['🍕 Pizza Flow: Invalid option']
  }
}
