import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { isValidQuantity } from '@/utils/@index.js'

import type { CommandParams, ICommand } from '../command.interface.js'

@injectable()
export class QuantityCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
  ) {}

  public async execute({ phone, message }: CommandParams) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return this.textResponseBuilder
        .addTitle('❌ QUANTIDADE INVÁLIDA!')
        .addText('Por favor, digite um número entre 1 e 5.')
        .build()
    }

    this.stateManager.updateStep(phone, PizzaSteps.NOTE)
    this.stateManager.updateContextData(phone, { quantity })

    return this.textResponseBuilder
      .addText('Deseja adicionar alguma observação?')
      .addText('> Exemplo: retirar cebola, mais queijo, etc.')
      .addEmptyLine()
      .addText('0 - Não desejo adicionar observações')
      .build()
  }
}
