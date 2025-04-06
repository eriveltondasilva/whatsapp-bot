import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list.builder.js'
import { TextResponseBuilder } from '@/builder/response/text.builder.js'
import { DrinkSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { DrinkRepository } from '@/repositories/drink.repository.js'
import { buildDrinkList } from '@/templates/list-builders.js'
import { parseIndex } from '@/utils/parse-index.js'

import type { FlowParams } from '@/types/flows.js'
import type { Command } from '@/types/interfaces.js'

@injectable()
export class TypeCommand implements Command {
  constructor(
    @inject(DrinkRepository) private readonly drinkRepository: DrinkRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private readonly textResponseBuilder: TextResponseBuilder,
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public async execute({ phone, message }: FlowParams) {
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
      step: DrinkSteps.QUANTITY,
    })

    return this.textResponseBuilder.addText('🔢 Digite a quantidade desejada (1-10):').build()
  }
}
