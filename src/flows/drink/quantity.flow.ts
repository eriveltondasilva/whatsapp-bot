import { injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { isValidQuantity } from '@/utils/validations.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'
import { formatCurrency } from '@/utils/format-currency.js'
import type { ContextData } from './types.js'

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

    const { selectedDrink } = context.data as ContextData
    const summary = this.getSummary(context.data as ContextData)

    this.state.updateContext(phone, {
      data: {
        unitPrice: summary.unitPrice,
        subtotal: summary.subtotal,
        quantity,
      },
      flow: Flows.DRINK_FINISH,
    })

    return this.responseBuilder
      .addCode('Etapa: 3/3')
      .addMono()
      .addText('# RESUMO DO PEDIDO')
      .addLine()
      .addText('Bebida:', selectedDrink.name)
      .addEmptyLine()
      .addText('Quantidade:', quantity.toString())
      .addText('Preço Unit.:', formatCurrency(summary.unitPrice))
      .addText('Total:', formatCurrency(summary.subtotal))
      .addLine()
      .addMono()
      .addText('Deseja confirmar seu pedido?')
      .addText('1️⃣ - Confirmar ✅')
      .addText('0️⃣ - Cancelar ❌')
      .build()
  }

  private getSummary({ quantity, selectedDrink }: ContextData) {
    const unitPrice = Number(selectedDrink.price)
    const subtotal = unitPrice * quantity

    return {
      unitPrice,
      subtotal,
    }
  }
}
