import type { Prisma } from '@prisma/client'
import { injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'
import type { ContextData } from './types.js'

@injectable()
export class PizzaNoteFlow extends BaseFlow {
  public async handle({ phone, message, context }: FlowParams) {
    const { selectedFlavors, selectedCrust, quantity } = context.data as ContextData

    if (!selectedFlavors?.length || !selectedCrust || !quantity || quantity < 1) {
      this.state.resetState(phone)
      return this.responseBuilder.addText('❌ Não foi possível processar seu pedido.').build()
    }

    const note = message === '0' ? undefined : message

    this.state.updateContext(phone, {
      data: { note },
      flow: Flows.PIZZA_CONFIRM,
    })

    const flavorNames = this.getFlavorNames(selectedFlavors)
    const crustPrice = Number(selectedCrust.price)
    const pizzaPrice = this.calculateAverageFlavorsPrice(selectedFlavors)
    const unitPrice = pizzaPrice + crustPrice
    const total = unitPrice * quantity

    return this.responseBuilder
      .addCode('Etapa: 5/5')
      .addMono()
      .addText('# RESUMO DO PEDIDO')
      .addLine()
      .addText('Sabor:', flavorNames, `(${formatCurrency(pizzaPrice)})`)
      .addText('Borda:', selectedCrust.name, `(${formatCurrency(crustPrice)})`)
      .addEmptyLine()
      .addText('Quantidade:', quantity.toString())
      .addText('Preço Unit.:', formatCurrency(unitPrice))
      .addText('Total:', formatCurrency(total))
      .addEmptyLine()
      .addText('Observação:', note || 'nenhuma')
      .addLine()
      .addMono()
      .addEmptyLine()
      .addText('Deseja confirmar seu pedido?')
      .addText('1️⃣ - Confirmar ✅')
      .addText('0️⃣ - Cancelar ❌')
      .build()
  }

  private getFlavorNames(flavors: Prisma.FlavorCreateInput[]) {
    return flavors.map((flavor) => flavor.name).join(' + ')
  }

  private calculateAverageFlavorsPrice(flavors: Prisma.FlavorCreateInput[]) {
    if (!flavors.length) return 0
    const totalPrice = flavors.reduce((acc, flavor) => acc + Number(flavor.price || 0), 0)

    return totalPrice / flavors.length
  }
}
