import { injectable } from 'tsyringe'

import { FLOWS } from '@/config/enums.js'
import { orderMenu, paymentMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'

import type { CartItem } from '@/types/entities.js'
import type { FlowParams } from '@/types/flows.js'
import { formatCurrency } from '@/utils/format-currency.js'

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

    const totalAmount = this.calculateTotal(cart)
    this.state.updateFlow(phone, FLOWS.CHECKOUT_PAYMENT)

    return this.responseBuilder
      .addMono()
      .addText('# RESUMO DO PEDIDO')
      .addLine()
      .addText('Itens do pedido:')
      .addBulletList(this.formatCartItems(cart))
      .addEmptyLine()
      .addText('Endereço:', customer.address)
      .addText('Total:', formatCurrency(totalAmount))
      .addLine()
      .addMono()
      .addMenu(paymentMenu)
      .build()
  }

  private calculateTotal(cart: CartItem[]): number {
    return cart.reduce((total, item) => {
      return total + item.subtotal
    }, 0)
  }

  private formatCartItems(cart: CartItem[]): string[] {
    return cart.map((item) => {
      return `${item.quantity}x ${item.name} = ${formatCurrency(item.subtotal)}`
    })
  }
}
