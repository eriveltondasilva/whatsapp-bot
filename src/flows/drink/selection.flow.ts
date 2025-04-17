import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list-response.builder.js'
import { FLOWS } from '@/config/enums.js'
import { DrinkRepository } from '@/repositories/drink.repository.js'
import { buildDrinkList } from '@/templates/list-builders.js'
import { parseIndex } from '@/utils/parse-index.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class DrinkSelectionFlow extends BaseFlow {
  constructor(
    @inject(DrinkRepository) private readonly drinkRepository: DrinkRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
  ) {
    super()
  }

  public async handle({ phone, message }: FlowParams) {
    const drinks = await this.drinkRepository.getAllDrinks()
    const selectedIndex = parseIndex(message)

    if (!drinks[selectedIndex]) {
      return this.listResponseBuilder
        .addBold('❌ OPÇÃO INVÁLIDA!')
        .addText('Por favor, escolha uma das opções disponíveis abaixo.')
        .addList(buildDrinkList(drinks))
        .build()
    }

    const selectedDrink = drinks[selectedIndex]

    this.state.updateContext(phone, {
      data: { selectedDrink },
      flow: FLOWS.DRINK_QUANTITY,
    })

    return this.responseBuilder
      .addCode('Etapa: 2/3')
      .addEmptyLine()
      .addText('🔢 Digite a quantidade desejada (1-10):')
      .build()
  }
}
