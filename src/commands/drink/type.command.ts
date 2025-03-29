import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder, } from '@/builder/list-response.builder.js'
import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { DrinkSteps } from '@/config/enums.js'
import { StateFacade } from '@/managers/state.facade.js'
import { DrinkRepository } from '@/repositories/@index.js'
import { buildDrinkList } from '@/templates/@index.js'
import { parseIndex } from '@/utils/parse-index.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class TypeCommand implements ICommand {
  constructor(
    @inject(DrinkRepository) private drinkRepository: DrinkRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    //
    @inject(StateFacade) private stateManager: StateFacade,
  ) {}

  //#
  public async execute({ phone, message }: CommandParams) {
    const drinks = await this.drinkRepository.getAllDrinks()
    const selectedIndex = parseIndex(message)

    if (!drinks[selectedIndex]) {
      return this.listResponseBuilder
        .addTitle('❌ OPÇÃO INVÁLIDA!')
        .addDescription('Selecione uma opção válida.')
        .addList(buildDrinkList(drinks))
        .build()
    }

    const selectedDrink = drinks[selectedIndex]

    this.stateManager.updateContext(phone, {
      data: { selectedDrink },
      step: DrinkSteps.QUANTITY,
    })

    return this.textResponseBuilder.addText('🔢 Digite a quantidade desejada (1-10):').build()
  }
}
