import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/response/text.builder.js'
import { FlowKeys } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { orderMenu } from '@/templates/menus.js'
import { isValidQuantity } from '@/utils/validations.js'

import type { FlowParams } from '@/types/flows.js'
import type { Command } from '@/types/interfaces.js'

@injectable()
export class QuantityCommand implements Command {
  constructor(
    @inject(TextResponseBuilder) private readonly textResponseBuilder: TextResponseBuilder,
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public async execute({ phone, message }: FlowParams) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return this.textResponseBuilder
        .addBold('❌ QUANTIDADE INVÁLIDA!')
        .addText('Por favor, digite um número entre 1 e 10.')
        .build()
    }

    this.state.updateStep(phone, FlowKeys.ORDER)

    return this.textResponseBuilder
      .addText('✅ Bebida adicionada ao carrinho com sucesso!')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
