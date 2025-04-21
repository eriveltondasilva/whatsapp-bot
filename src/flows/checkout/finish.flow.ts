import { randomUUID } from 'node:crypto'
import { injectable } from 'tsyringe'

import { FLOWS } from '@/config/enums.js'
import { mainMenu, orderMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class CheckoutFinishFlow extends BaseFlow {
  public async handle({ phone, message }: FlowParams) {
    const isCanceled = message === '0'

    this.state.deleteState(phone)

    if (isCanceled) {
      return this.responseBuilder
        .addBold('❌ PAGAMENTO CANCELADO')
        .addText('Você pode continuar comprando ou fechar o pedido.')
        .addEmptyLine()
        .addMenu(orderMenu)
        .build()
    }

    this.state.updateFlow(phone, FLOWS.MENU)

    return this.responseBuilder
      .addBold('✅ PEDIDO REGISTRADO!')
      .addText('Obrigado pela sua compra.', 'Seu pedido foi registrado e será preparado em breve.')
      .addEmptyLine()
      .addText('Tempo estimado de entrega: *30-45 minutos*')
      .addText('Número do pedido:', this.generateOrderNumber())
      .addEmptyLine()
      .addMenu(mainMenu)
      .build()
  }

  private generateOrderNumber(): string {
    return `*#${randomUUID()}*`
  }
}
