import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { FlowKeys } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { orderMenu } from '@/templates/@index.js'
import { isValidQuantity } from '@/utils/validations.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class QuantityCommand implements ICommand {
  constructor(
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    @inject(StateManager) private stateManager: StateManager,
  ) {}

  //#
  public async execute({ phone, message }: CommandParams) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return this.textResponseBuilder
        .addTitle('❌ QUANTIDADE INVÁLIDA!')
        .addText('Por favor, digite um número entre 1 e 10.')
        .build()
    }

    this.stateManager.updateStep(phone, FlowKeys.ORDER)

    return this.textResponseBuilder
      .addText('✅ Bebida adicionada ao carrinho com sucesso!')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
