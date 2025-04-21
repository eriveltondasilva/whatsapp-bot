import { injectable } from 'tsyringe'

import { FLOWS, PAYMENT_METHODS } from '@/config/enums.js'
import { paymentMenu } from '@/templates/menus.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

const METHODS_MAP = {
  1: PAYMENT_METHODS.CREDIT,
  2: PAYMENT_METHODS.DEBIT,
  3: PAYMENT_METHODS.CASH,
  4: PAYMENT_METHODS.PIX,
} as const

@injectable()
export class CheckoutPaymentFlow extends BaseFlow {
  public async handle({ phone, message, context }: FlowParams) {
    if (message === '0') {
      this.state.resetState(phone)
      return this.responseBuilder.addText('❌ Pedido cancelado!').build()
    }

    const selectedIndex = Number.parseInt(message, 10)
    const paymentMethod = METHODS_MAP[selectedIndex as keyof typeof METHODS_MAP]

    if (!paymentMethod) {
      return this.responseBuilder
        .addBold('❌ MÉTODO DE PAGAMENTO INVÁLIDO')
        .addText('Por favor, escolha uma das opções abaixo:')
        .addEmptyLine()
        .addMenu(paymentMenu)
        .build()
    }

    const { totalAmount } = context.data as { totalAmount: number }

    this.state.updateContext(phone, {
      data: { paymentMethod },
      flow: FLOWS.CHECKOUT_FINISH,
    })

    return this.responseBuilder
      .addMono()
      .addText('# DETALHES DO PAGAMENTO')
      .addLine()
      .addText('Método:', paymentMethod)
      .addText('Total:', formatCurrency(totalAmount))
      .addLine()
      .addMono()
      .addText('Deseja confirmar o pagamento?')
      .addText('1️⃣ - Confirmar ✅')
      .addText('0️⃣ - Cancelar ❌')
      .build()
  }
}
