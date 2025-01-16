import { inject, injectable } from 'tsyringe'

import { FlowStep, PaymentMethod } from '@/config/enums.js'
import { OrderService } from '@/services/order-service.js'
import { FlowStateManager } from '@/states/flow-state-manager.js'
import { formatCurrency } from '@/utils/message-formatter.js'
import type { FlowState } from '@/types/index.js'

@injectable()
export class PaymentFlow {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(OrderService) private order: OrderService,
  ) {}

  handle(phoneNumber: string, message: string, state: FlowState) {
    switch (state.step) {
      case FlowStep.SELECTING_PAYMENT:
        return this.handlePaymentSelection(phoneNumber, message, state.data)
      case FlowStep.AWAITING_PAYMENT:
        return this.handlePaymentInput(phoneNumber, message, state.data)

      // case FlowStep.CONFIRMING_PAYMENT:
      // return this.handlePaymentConfirmation(phoneNumber, message, state.data)
      default:
        throw new Error('Estado inválido para pagamento')
    }
  }

  handlePaymentSelection(phoneNumber: string, message: string, data: any) {
    const order = this.order.getOrder(data.orderId)

    return `
    Total do pedido: R$ ${formatCurrency(order?.totalPrice || 0)}

    Escolha a forma de pagamento:
    1 - Cartão de Crédito
    2 - Cartão de Débito
    3 - Dinheiro
  `
  }

  handlePaymentInput(phoneNumber: string, message: string, data: any) {
    const paymentMethod: Record<number, PaymentMethod> = {
      1: PaymentMethod.CREDIT,
      2: PaymentMethod.DEBIT,
      3: PaymentMethod.CASH,
    }

    const method = paymentMethod[Number.parseInt(message)]

    if (!method) {
      return 'Forma de pagamento inválida. Por favor, tente novamente.'
    }

    this.order.setPaymentMethod(data.orderId, method)
    this.flowState.setState(phoneNumber, FlowStep.CONFIRMING_ORDER, {
      orderId: data.orderId,
    })

    return `
    Confirme o pagamento:
    1 - Sim
    2 - Nao
  `
  }

  //
}
