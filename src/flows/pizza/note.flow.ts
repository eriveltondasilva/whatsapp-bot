import type { Prisma } from '@prisma/client'
import { injectable } from 'tsyringe'

import { FLOWS } from '@/config/enums.js'
import { formatCurrency } from '@/utils/format-currency.js'
import { BaseFlow } from '../base.flow.js'
import { type ContextData, STEP_INDICATORS } from './@pizza.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class PizzaNoteFlow extends BaseFlow {
  public async handle({ phone, message, context }: FlowParams) {
    const data = context.data as ContextData

    if (!this.validateOrderData(data)) {
      this.state.resetState(phone)
      return this.responseBuilder
      .addBold('❌ ERRO NO PEDIDO')
      .addText('Não foi possível processar seu pedido devido a dados incompletos.')
      .addText('Por favor, inicie seu pedido novamente.')
      .build()
    }

    const note = message === '0' ? undefined : message
    const order = this.calculateOrder(data)

    const formattedCrustPrice = order.pizzaPrice === 0 ? 'grátis' : formatCurrency(order.pizzaPrice)
    const formattedPizzaPrice = formatCurrency(order.pizzaPrice)
    const formattedUnitPrice = formatCurrency(order.unitPrice)
    const formattedSubtotalPrice = formatCurrency(order.subtotal)
    const formattedQuantity = data.quantity.toString()

    this.state.updateContext(phone, {
      data: {
        unitPrice: order.unitPrice,
        subtotal: order.subtotal,
        note,
      },
      flow: FLOWS.PIZZA_FINISH,
    })

    return this.responseBuilder
      .addCode(STEP_INDICATORS.FINISH)
      .addMono()
      .addText('# RESUMO DO PEDIDO')
      .addLine()
      .addText('Sabor:', this.getFlavorNames(data.selectedFlavors), `(${formattedPizzaPrice})`)
      .addText('Borda:', data.selectedCrust.name, `(${formattedCrustPrice})`)
      .addEmptyLine()
      .addText('Quantidade:', formattedQuantity)
      .addText('Preço Unit.:', formattedUnitPrice)
      .addText('Total:', formattedSubtotalPrice)
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
    const crustPrice = Number(selectedCrust.price || 0)
    const unitPrice = pizzaPrice + crustPrice
    const subtotal = unitPrice * quantity

    return { crustPrice, pizzaPrice, unitPrice, subtotal }
  }
}
