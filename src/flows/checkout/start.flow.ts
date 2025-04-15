import { injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { orderMenu, paymentMenu } from '@/templates/menus.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class CheckoutStartFlow extends BaseFlow {
  public async handle({ phone }: FlowParams) {
    const { customer, cart } = this.state.getState(phone)
    const orderTotal = this.calculateOrderTotal()

    if (!cart || cart.length === 0) {
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

    if (!customer.address) {
      this.state.updateFlow(phone, Flows.ORDER)
      return this.responseBuilder
        .addText('📍 Precisamos do seu endereço para entrega.')
        .addEmptyLine()
        .addText('Por favor, digite seu endereço completo:')
        .build()
    }

    //*>
    this.state.updateFlow(phone, Flows.CHECKOUT_PAYMENT)

    return this.responseBuilder
      .addMono()
      .addText('# RESUMO DO PEDIDO')
      .addLine()
      .addText('Itens do pedido:')
      .addText('- item 1')
      .addText('- item 2')
      .addText('- item 3')
      .addEmptyLine()
      .addText('Endereço:', customer.address)
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
