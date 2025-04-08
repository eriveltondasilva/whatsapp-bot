import { injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { isValidQuantity } from '@/utils/validations.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'
import type { ContextData } from './types.js'

@injectable()
export class DrinkQuantityFlow extends BaseFlow {
  public async handle({ phone, message }: FlowParams) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return this.responseBuilder
        .addBold('❌ QUANTIDADE INVÁLIDA!')
        .addText('Por favor, digite um número entre 1 e 10.')
        .build()
    }

    const { context: newContext } = this.state.updateContext(phone, {
      data: { quantity },
      flow: Flows.PIZZA_CONFIRM,
    })

    const summary = this.getSummary(newContext.data as ContextData)

    return this.responseBuilder
      .addCode('Etapa: 3/3')
      .addMono()
      .addText('# RESUMO DO PEDIDO')
      .addLine()
      .addText('Bebida:', summary.drinkName)
      .addEmptyLine()
      .addText('Quantidade:', summary.quantity)
      .addText('Preço Unit.:', summary.unitPrice)
      .addText('Total:', summary.total)
      .addLine()
      .addMono()
      .addEmptyLine()
      .addText('Deseja confirmar seu pedido?')
      .addText('1️⃣ - Confirmar ✅')
      .addText('0️⃣ - Cancelar ❌')
      .build()
  }

  private getSummary(data: ContextData) {
    const { selectedDrink, quantity } = data

    const drinkName = selectedDrink.name
    const unitPrice = Number(selectedDrink.price)
    const total = unitPrice * quantity

    return {
      drinkName,
      quantity: quantity.toString(),
      unitPrice: formatCurrency(unitPrice),
      total: formatCurrency(total),
    }
  }
}
