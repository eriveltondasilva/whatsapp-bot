import { inject, injectable } from 'tsyringe'

import { FlowStep, PaymentMethod } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { OrderService } from '@/services/order-service.js'
import { formatCurrency } from '@/utils/format-currency.js'

import type { FlowHandler } from '@/types.js'

@injectable()
export class PaymentFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(OrderService) private order: OrderService,
  ) {}

  public handle(phone: string, message: string): string[] {
    const state = this.flowState.getState(phone)
    switch (state.step) {
      case FlowStep.SELECT_PAYMENT:
        return ['']
      // case FlowStep.AWAITING_PAYMENT:
      // return this.handlePaymentInput(phone, message, state.data)

      // case FlowStep.CONFIRMING_PAYMENT:
      // return this.handlePaymentConfirmation(phone, message, state.data)
      // default:
      // throw new Error('Estado inválido para pagamento')
      default:
        return ['Estado inválido para pagamento']
    }
  }

  handlePaymentSelection(phone: string, message: string, data: any) {
    const order = this.order.getOrder(data.orderId)

    return `
    Total do pedido: R$ ${formatCurrency(order?.totalPrice || 0)}

    Escolha a forma de pagamento:
    1 - Cartão de Crédito
    2 - Cartão de Débito
    3 - Dinheiro
  `
  }

  handlePaymentInput(phone: string, message: string, data: any) {
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
    // this.flowState.updateState(phone, FlowStep.CONFIRMING_ORDER, {
    //   orderId: data.orderId,
    // })

    return `
    Confirme o pagamento:
    1 - Sim
    2 - Nao
  `
  }

  //
}
