import { injectable } from 'tsyringe'

import { FLOWS } from '@/config/enums.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { isValidQuantity } from '@/utils/validations.js'
import { BaseFlow } from '../base.flow.js'
import  {type ContextData,STEP_INDICATORS } from './@drink.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class DrinkQuantityFlow extends BaseFlow {
  public async handle({ phone, message, context }: FlowParams) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return this.responseBuilder
        .addBold('❌ QUANTIDADE INVÁLIDA!')
        .addText('Por favor, digite um número entre 1 e 10.')
        .build()
    }

    const data = context.data as ContextData
    const order = this.calculateOrder(data)

    const formattedQuantity = quantity.toString()
    const formattedUnitPrice = formatCurrency(order.unitPrice)
    const formattedSubtotalPrice = formatCurrency(order.subtotal)

    this.state.updateContext(phone, {
      data: {
        unitPrice: order.unitPrice,
        subtotal: order.subtotal,
        quantity,
      },
      flow: FLOWS.DRINK_FINISH,
    })

    return this.responseBuilder
      .addCode(STEP_INDICATORS.FINISH)
      .addMono()
      .addText('# RESUMO DO PEDIDO')
      .addLine()
      .addText('Bebida:', data.selectedDrink.name)
      .addEmptyLine()
      .addText('Quantidade:', formattedQuantity)
      .addText('Preço Unit.:', formattedUnitPrice)
      .addText('Total:', formattedSubtotalPrice)
      .addLine()
      .addMono()
      .addText('Deseja confirmar seu pedido?')
      .addText('1️⃣ - Confirmar ✅')
      .addText('0️⃣ - Cancelar ❌')
      .build()
  }

  //#
  private calculateOrder({ selectedDrink, quantity }: ContextData) {
    const unitPrice = Number(selectedDrink.price || 0)
    const subtotal = unitPrice * quantity
    return { unitPrice, subtotal }
  }
}
