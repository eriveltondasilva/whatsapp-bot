import { randomUUID } from 'node:crypto'
import { injectable } from 'tsyringe'

import { orderMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

const MESSAGES = {
  CANCELED: '❌ PAGAMENTO CANCELADO',
  SUCCESS: '✅ Pagamento confirmado com sucesso! Seu pedido foi registrado.',
} as const

@injectable()
export class PaymentConfirmationFlow extends BaseFlow {
  public async handle({ phone, message }: FlowParams) {
    const isCanceled = message === '0'

    this.state.resetState(phone)

    if (isCanceled) {
      return this.responseBuilder
        .addBold(MESSAGES.CANCELED)
        .addText('Você pode continuar comprando ou fechar o pedido.')
        .addEmptyLine()
        .addMenu(orderMenu)
        .build()
    }

    return this.responseBuilder
      .addBold(MESSAGES.SUCCESS)
      .addEmptyLine()
      .addText('🎉 Obrigado pela sua compra!')
      .addText('Seu pedido foi registrado e será preparado em breve.')
      .addEmptyLine()
      .addText('Tempo estimado de entrega: 30-45 minutos')
      .addText('Acompanhe o status do seu pedido pelo número:', this.generateOrderNumber())
      .build()
  }

  private generateOrderNumber(): string {
    return `#${randomUUID()}`
  }
}
