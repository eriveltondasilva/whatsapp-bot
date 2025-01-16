import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { OrderService, ProductService } from '@/services/index.js'
import { FlowStateManager } from '@/states/flow-state-manager.js'
import type { FlowState } from '@/types/index.js'
import { isValidQuantity } from '@/utils/validations.js'

@injectable()
export class OrderFlow {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(ProductService) private product: ProductService,
    @inject(OrderService) private order: OrderService,
  ) {}

  handle(phoneNumber: string, message: string, state: FlowState) {
    switch (state.step) {
      case FlowStep.SELECTING_PIZZA:
        return this.handlePizzaSelection(phoneNumber, message, state.data)

      case FlowStep.SELECTING_QUANTITY:
        return this.handleQuantitySelection(phoneNumber, message, state.data)
      default:
        throw new Error('Estado inválido para pedido')
    }
  }

  // ###
  private handlePizzaSelection(
    phoneNumber: string,
    message: string,
    data: any,
  ) {
    const pizzaId = Number.parseInt(message)
    const pizzas = this.product.getProduct(pizzaId)

    if (!pizzas)
      return 'Pizza não encontrada. Por favor, escolha uma opção válida:'

    const order = data?.orderId
      ? this.order.getOrder(data.orderId)
      : this.order.createOrder(Number.parseInt(phoneNumber))

    this.flowState.setState(phoneNumber, FlowStep.SELECTING_QUANTITY, {
      orderId: order?.id,
      productId: pizzas.id,
      productName: pizzas.name,
      productPrice: pizzas.price,
    })

    return `Quantas unidades de ${pizzas.name} você gostaria?`
  }

  private handleQuantitySelection(
    phoneNumber: string,
    message: string,
    data: any,
  ) {
    const quantity = Number.parseInt(message)

    if (!isValidQuantity(quantity)) {
      return 'Por favor, digite uma quantidade válida:'
    }

    const order = this.order.addItemToOrder(data.orderId, {
      productId: data?.productId,
      name: data?.productName,
      quantity,
      price: data?.productPrice,
    })

    if (!order) {
      return 'Erro ao adicionar item ao pedido. Por favor, tente novamente.'
    }

    this.flowState.setState(phoneNumber, FlowStep.SELECTING_PAYMENT, {
      orderId: order.id,
    })

    return 'Qual o método de pagamento?'
  }

  //
}
