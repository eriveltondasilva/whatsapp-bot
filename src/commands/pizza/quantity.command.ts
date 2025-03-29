import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { isValidQuantity } from '@/utils/@index.js'

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

    this.stateManager.updateContext(phone, {
      data: { quantity },
      step: PizzaSteps.NOTE,
    })

    return this.textResponseBuilder
      .addText('Deseja adicionar alguma observação?')
      .addText('> exemplo: retirar cebola, mais queijo, etc.')
      .addEmptyLine()
      .addText('0️⃣ - Não desejo adicionar observações')
      .build()
  }
}
