import { ItemType } from '@/config/enums.js'
import { injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { orderMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'

import type { CartItem } from '@/types/entities.js'
import type { FlowParams } from '@/types/flows.js'
import type { ContextData } from './@pizza.js'

const MESSAGES = {
  CANCELED: '❌ PEDIDO CANCELADO',
  SUCCESS: '✅ Pizza adicionada ao carrinho com sucesso.',
} as const

@injectable()
export class PizzaFinishFlow extends BaseFlow {
  public async handle({ message, phone, context }: FlowParams) {
    const isCanceled = message === '0'

    if (!isCanceled) {
      const cartItem = this.createCartItem(context.data as ContextData)
      this.state.addToCart(phone, cartItem)
    }

    this.state.updateFlow(phone, Flows.ORDER)
    this.state.clearData(phone)

    return this.responseBuilder
      .addText(isCanceled ? MESSAGES.CANCELED : MESSAGES.SUCCESS)
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }

  //#
  private createCartItem({
    selectedFlavors,
    selectedCrust,
    quantity,
    note,
    unitPrice,
    subtotal,
  }: ContextData): CartItem {
    return {
      type: ItemType.PIZZA,
      quantity,
      unitPrice,
      subtotal,
      note,
      pizza: {
        crust: selectedCrust,
        flavors: selectedFlavors,
      },
    }
  }
}
