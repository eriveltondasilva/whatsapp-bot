import { randomUUID } from 'node:crypto'
import { injectable } from 'tsyringe'

import { orderMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class PaymentConfirmFlow extends BaseFlow {
  public async handle({ phone, message }: FlowParams) {
    const isCanceled = message === '0'

    this.state.resetState(phone)

    if (isCanceled) {
      return this.responseBuilder
        .addBold('❌ PAGAMENTO CANCELADO')
        .addText('Você pode continuar comprando ou fechar o pedido.')
        .addEmptyLine()
        .addMenu(orderMenu)
        .build()
    }

    return this.responseBuilder
      .addBold('✅ PEDIDO REGISTRADO!')
      .addText('Obrigado pela sua compra.', 'Seu pedido foi registrado e será preparado em breve.')
      .addEmptyLine()
      .addText('Tempo estimado de entrega: *30-45 minutos*')
      .addText('Número do pedido:', this.generateOrderNumber())
      .build()
  }

  private generateOrderNumber(): string {
    return `*#${randomUUID()}*`
  }
}
