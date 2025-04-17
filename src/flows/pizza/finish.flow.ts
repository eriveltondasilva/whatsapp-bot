import { ITEM_TYPES } from '@/config/enums.js'
import { injectable } from 'tsyringe'

import { FLOWS } from '@/config/enums.js'
import { orderMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'
import { type ContextData, MESSAGES } from './@pizza.js'

import type { CartItem } from '@/types/entities.js'
import type { FlowParams } from '@/types/flows.js'

@injectable()
export class PizzaFinishFlow extends BaseFlow {
  public async handle({ message, phone, context }: FlowParams) {
    const isCanceled = message === '0'

    if (!isCanceled) {
      const contextData = context.data as ContextData
      const itemName = this.createItemName(contextData)
      const cartItem = this.createCartItem(itemName, contextData)
      this.state.addToCart(phone, cartItem)
    }

    this.state.updateFlow(phone, FLOWS.ORDER)
    this.state.clearData(phone)

    return this.responseBuilder
      .addText(isCanceled ? MESSAGES.CANCELED : MESSAGES.SUCCESS)
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }

  //# region Private Methods
  private createCartItem(name: string, item: ContextData): CartItem {
    const { selectedFlavors, selectedCrust, quantity, note, unitPrice, subtotal } = item
    return {
      type: ITEM_TYPES.PIZZA,
      name,
      quantity,
      unitPrice,
      subtotal,
      details: {
        crust: selectedCrust,
        flavors: selectedFlavors,
        note,
      },
    }
  }

  private createItemName({ selectedFlavors, selectedCrust }: ContextData): string {
    const flavorNames = selectedFlavors.map((flavor) => flavor.name).join(' + ')
    return `Pizza ${flavorNames} (${selectedCrust.name})`
  }
}
