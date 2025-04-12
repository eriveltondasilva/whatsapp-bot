import { injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { orderMenu, paymentMenu } from '@/templates/menus.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class PaymentMenuFlow extends BaseFlow {
  public async handle({ phone }: FlowParams) {
    const orderTotal = this.calculateOrderTotal()

    if (orderTotal <= 0) {
      this.state.updateFlow(phone, Flows.ORDER)
      return this.responseBuilder
        .addBold('❌ CARRINHO VAZIO')
        .addText(
          'Seu carrinho está vazio.',
          'Por favor, adicione itens antes de finalizar o pedido.',
        )
        .addEmptyLine()
        .addMenu(orderMenu)
        .build()
    }

    //*>
    this.state.updateFlow(phone, Flows.PAYMENT_METHOD)

    return this.responseBuilder
      .addMono()
      .addText('# DETALHES DO PAGAMENTO')
      .addLine()
      .addText('Total:', formatCurrency(orderTotal))
      .addLine()
      .addMono()
      .addMenu(paymentMenu)
      .build()
  }

  private calculateOrderTotal(): number {
    // Simulação - em uma implementação real, você teria uma lógica para calcular o total
    // com base nos itens no carrinho
    return 39.9 // Valor simulado
  }
}
