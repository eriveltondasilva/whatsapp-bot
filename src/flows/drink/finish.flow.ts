// TODO: Implement drink confirm flow
import { injectable } from 'tsyringe'

import { FLOWS, ITEM_TYPES } from '@/config/enums.js'
import { orderMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'

import type { CartItem } from '@/types/entities.js'
import type { FlowParams } from '@/types/flows.js'
import type { ContextData } from './types.js'

const MESSAGES = {
  CANCELED: '❌ PEDIDO CANCELADO',
  SUCCESS: '✅ Bebida adicionada ao carrinho com sucesso.',
} as const

@injectable()
export class DrinkFinishFlow extends BaseFlow {
  public async handle({ message, phone, context }: FlowParams) {
    const isCanceled = message === '0'

    if (!isCanceled) {
      const { quantity, selectedDrink, subtotal, unitPrice } = context.data as ContextData

      const cartItem: CartItem = {
        type: ITEM_TYPES.DRINK,
        quantity,
        unitPrice,
        subtotal,
        drink: selectedDrink,
      }

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
}
