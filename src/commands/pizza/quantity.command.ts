import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { isValidQuantity } from '@/utils/@index.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class QuantityCommand implements ICommand {
  constructor(
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    @inject(StateFacade) private state: StateFacade,
  ) {}

  //#
  public async execute({ phone, message }: CommandParams) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return this.textResponseBuilder
        .addBold('❌ QUANTIDADE INVÁLIDA')
        .addText('Por favor, digite um número entre 1 e 10.')
        .build()
    }

    this.state.updateContext(phone, {
      data: { quantity },
      step: PizzaSteps.NOTE,
    })

    return this.textResponseBuilder
      .addText('Deseja adicionar alguma observação?')
      .addQuote('Exemplo: retirar cebola, mais queijo, etc.')
      .addEmptyLine()
      .addText('0️⃣ - Não desejo adicionar observações')
      .build()
  }
}
