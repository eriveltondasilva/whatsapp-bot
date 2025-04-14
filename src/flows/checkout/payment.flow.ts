import { injectable } from 'tsyringe'

import { Flows, PaymentMethods } from '@/config/enums.js'
import { orderMenu, paymentMenu } from '@/templates/menus.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

const PAYMENT_METHODS = {
  '1': PaymentMethods.CREDIT,
  '2': PaymentMethods.DEBIT,
  '3': PaymentMethods.CASH,
} as const

@injectable()
export class CheckoutPaymentFlow extends BaseFlow {
  public async handle({ phone, message }: FlowParams) {
    const orderTotal = this.calculateOrderTotal()

    if (orderTotal <= 0) {
      this.state.updateFlow(phone, Flows.ORDER)
      return this.responseBuilder
        .addBold('❌ CARRINHO VAZIO')
        .addText('Seu carrinho está vazio. Por favor, adicione itens antes de finalizar o pedido.')
        .addEmptyLine()
        .addMenu(orderMenu)
        .build()
    }

    const paymentMethod = PAYMENT_METHODS[message as keyof typeof PAYMENT_METHODS]

    if (!paymentMethod) {
      return this.responseBuilder
        .addBold('❌ MÉTODO DE PAGAMENTO INVÁLIDO')
        .addText('Por favor, escolha uma das opções abaixo:')
        .addEmptyLine()
        .addMenu(paymentMenu)
        .build()
    }

    //*>
    this.state.updateContext(phone, {
      data: { paymentMethod },
      flow: Flows.CHECKOUT_FINISH,
    })

    return this.responseBuilder
      .addMono()
      .addText('# DETALHES DO PAGAMENTO')
      .addLine()
      .addText('Método:', paymentMethod)
      .addText('Total:', formatCurrency(orderTotal))
      .addLine()
      .addMono()
      .addText('Deseja confirmar o pagamento?')
      .addText('1️⃣ - Confirmar ✅')
      .addText('0️⃣ - Cancelar ❌')
      .build()
  }

  private calculateOrderTotal(): number {
    // Simulação - em uma implementação real, você teria uma lógica para calcular o total
    // com base nos itens no carrinho
    return 39.9 // Valor simulado
  }
}
