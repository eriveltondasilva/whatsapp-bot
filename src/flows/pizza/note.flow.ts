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

    if (!this.validateOrderData(context.data as ContextData)) {
      this.state.resetState(phone)
      return this.responseBuilder.addText('❌ Não foi possível processar seu pedido.').build()
    }

    const order = this.calculateOrder(context.data as ContextData)
    const note = message === '0' ? undefined : message

    const crustPrice = order.pizzaPrice === 0 ? 'grátis' : formatCurrency(order.pizzaPrice)
    const pizzaPrice = formatCurrency(order.pizzaPrice)
    const unitPrice = formatCurrency(order.unitPrice)
    const subtotalPrice = formatCurrency(order.subtotal)

    this.state.updateContext(phone, {
      data: {
        unitPrice: order.unitPrice,
        subtotal: order.subtotal,
        note,
      },
      flow: Flows.PIZZA_FINISH,
    })

    return this.responseBuilder
      .addCode('Etapa: 5/5')
      .addMono()
      .addText('# RESUMO DO PEDIDO')
      .addLine()
      .addText('Sabor:', this.getFlavorNames(selectedFlavors), `(${pizzaPrice})`)
      .addText('Borda:', selectedCrust.name, `(${crustPrice})`)
      .addEmptyLine()
      .addText('Quantidade:', quantity.toString())
      .addText('Preço Unit.:', unitPrice)
      .addText('Total:', subtotalPrice)
      .addEmptyLine()
      .addText('Observação:', note || 'nenhuma')
      .addLine()
      .addMono()
      .addText('Deseja confirmar seu pedido?')
      .addText('1️⃣ - Confirmar ✅')
      .addText('0️⃣ - Cancelar ❌')
      .build()
  }

  //#
  private getFlavorNames(flavors: Prisma.FlavorCreateInput[]) {
    return flavors.map((flavor) => flavor.name).join(' + ')
  }

  private validateOrderData({ selectedFlavors, selectedCrust, quantity }: ContextData): boolean {
    return Boolean(selectedFlavors?.length > 0 && selectedCrust && quantity && quantity > 0)
  }

  private calculateAverageFlavorsPrice(flavors: Prisma.FlavorCreateInput[]) {
    if (flavors.length === 0) return 0
    const totalPrice = flavors.reduce((acc, flavor) => acc + Number(flavor.price || 0), 0)
    return totalPrice / flavors.length
  }

  private calculateOrder({ selectedFlavors, selectedCrust, quantity }: ContextData) {
    const pizzaPrice = this.calculateAverageFlavorsPrice(selectedFlavors)
    const crustPrice = Number(selectedCrust.price)
    const unitPrice = pizzaPrice + crustPrice
    const subtotal = unitPrice * quantity

    return { crustPrice, pizzaPrice, unitPrice, subtotal }
  }
}
