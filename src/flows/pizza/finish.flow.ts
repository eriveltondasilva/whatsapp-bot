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
export class PizzaFinishFlow extends BaseFlow {
  public async handle({ message, phone, context }: FlowParams) {
    const isCanceled = message === '0'

    this.state.updateFlow(phone, Flows.ORDER)
    this.state.clearData(phone)

    return this.responseBuilder
      .addText(isCanceled ? MESSAGES.CANCELED : MESSAGES.SUCCESS)
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
