import { injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { orderMenu } from '@/templates/menus.js'
import { isValidQuantity } from '@/utils/validations.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class DrinkQuantityFlow extends BaseFlow {
  public async handle({ phone, message }: FlowParams) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return this.responseBuilder
        .addBold('❌ QUANTIDADE INVÁLIDA!')
        .addText('Por favor, digite um número entre 1 e 10.')
        .build()
    }

    this.state.updateFlow(phone, Flows.ORDER)

    return this.responseBuilder
      .addText('✅ Bebida adicionada ao carrinho com sucesso!')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
