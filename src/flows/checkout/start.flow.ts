import { injectable } from 'tsyringe'

import { FLOWS } from '@/config/enums.js'
import { orderMenu, paymentMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class CheckoutStartFlow extends BaseFlow {
  public async handle({ phone }: FlowParams) {
    const { customer, cart } = this.state.getState(phone)

    if (cart?.length === 0) {
      this.state.updateFlow(phone, FLOWS.ORDER)
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

    this.state.updateFlow(phone, FLOWS.CHECKOUT_PAYMENT)

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
      .addText('Total:')
      .addLine()
      .addMono()
      .addMenu(paymentMenu)
      .build()
  }
}
