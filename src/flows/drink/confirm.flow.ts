// TODO: Implement drink confirm flow
import { injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { orderMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

const MESSAGES = {
  CANCELED: '❌ PEDIDO CANCELADO',
  SUCCESS: '✅ Bebida adicionada ao carrinho com sucesso.',
} as const

@injectable()
export class DrinkConfirmFlow extends BaseFlow {
  public async handle({ message, phone }: FlowParams) {
    this.state.clearData(phone)
    this.state.updateFlow(phone, Flows.ORDER)

    const isCanceled = message === '0'

    return this.responseBuilder
      .addText(isCanceled ? MESSAGES.CANCELED : MESSAGES.SUCCESS)
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
