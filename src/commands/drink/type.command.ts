import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder, TextResponseBuilder } from '@/builder/@index.js'
import { DrinkSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { DrinkRepository } from '@/repositories/@index.js'
import { buildDrinkList } from '@/templates/@index.js'
import { parseIndex } from '@/utils/parse-index.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class TypeCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(DrinkRepository) private drinkRepository: DrinkRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
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

    this.stateManager.updateStep(phone, DrinkSteps.QUANTITY)
    this.stateManager.updateContextData(phone, { selectedDrink })

    return this.textResponseBuilder.addText('🔢 Digite a quantidade desejada (1-10):').build()
  }
}
