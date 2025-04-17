// TODO: Implement drink confirm flow
import { injectable } from 'tsyringe'

import { FLOWS, ITEM_TYPES } from '@/config/enums.js'
import { orderMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'
import { type ContextData, MESSAGES } from './@drink.js'

import type { CartItem } from '@/types/entities.js'
import type { FlowParams } from '@/types/flows.js'

@injectable()
export class DrinkFinishFlow extends BaseFlow {
  public async handle({ message, phone, context }: FlowParams) {
    const isCanceled = message === '0'

    if (!isCanceled) {
      const data = context.data as ContextData
      const cartItem = this.createCartItem(data)

      this.state.addToCart(phone, cartItem)
    }

    this.state.clearData(phone)
    this.state.updateFlow(phone, FLOWS.ORDER)

    return this.responseBuilder
      .addText(isCanceled ? MESSAGES.CANCELED : MESSAGES.SUCCESS)
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }

  //#
  private createCartItem(item: ContextData): CartItem {
    const { selectedDrink, quantity, unitPrice, subtotal } = item
    return {
      type: ITEM_TYPES.DRINK,
      name: selectedDrink.name,
      quantity,
      unitPrice,
      subtotal,
      details: {
        drink: selectedDrink,
      },
    }
  }
}
