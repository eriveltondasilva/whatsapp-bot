import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list-response.builder.js'
import { Flows } from '@/config/enums.js'
import { DrinkRepository } from '@/repositories/drink.repository.js'
import { buildDrinkList } from '@/templates/list-builders.js'
import { parseIndex } from '@/utils/parse-index.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class DrinkTypeFlow extends BaseFlow {
  constructor(
    @inject(DrinkRepository) private readonly drinkRepository: DrinkRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
  ) {
    super()
  }

  //#
  public async handle({ phone, message }: FlowParams) {
    const drinks = await this.drinkRepository.getAllDrinks()
    const selectedIndex = parseIndex(message)

    if (!drinks[selectedIndex]) {
      return this.listResponseBuilder
        .addBold('❌ OPÇÃO INVÁLIDA!')
        .addText('Selecione uma opção válida.')
        .addList(buildDrinkList(drinks))
        .build()
    }

    const selectedDrink = drinks[selectedIndex]

    this.state.updateContext(phone, {
      data: { selectedDrink },
      flow: Flows.DRINK_QUANTITY,
    })

    return this.responseBuilder
      .addCode('Etapa: 2/2')
      .addEmptyLine()
      .addText('🔢 Digite a quantidade desejada (1-10):')
      .build()
  }
}
