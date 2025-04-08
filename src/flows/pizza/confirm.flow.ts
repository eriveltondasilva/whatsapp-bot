import { injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { orderMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

const MESSAGES = {
  CANCELED: '❌ PEDIDO CANCELADO',
  SUCCESS: '✅ Pizza adicionada ao carrinho com sucesso.',
} as const

@injectable()
export class PizzaConfirmFlow extends BaseFlow {
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
