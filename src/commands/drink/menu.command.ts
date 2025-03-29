import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder, TextResponseBuilder } from '@/builder/@index.js'
import { DrinkSteps } from '@/config/enums.js'
import { StateFacade } from '@/managers/state.facade.js'
import { DrinkRepository } from '@/repositories/@index.js'
import { buildDrinkList } from '@/templates/@index.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class MenuCommand implements ICommand {
  constructor(
    @inject(DrinkRepository) private drinkRepository: DrinkRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    //
    @inject(StateFacade) private stateManager: StateFacade,
  ) {}

  //#
  public async execute({ phone }: CommandParams) {
    const drinks = await this.drinkRepository.getAllDrinks()

    if (!drinks?.length) {
      this.stateManager.resetState(phone)
      return this.textResponseBuilder
        .addText('❌ Desculpe, não encontramos bebidas disponíveis no momento.')
        .build()
    }

    this.stateManager.updateStep(phone, DrinkSteps.TYPE)

    return this.listResponseBuilder
      .addTitle('🍹 ESCOLHA SUA BEBIDA')
      .addDescription('> Por favor, aperte no botão abaixo para escolher a sua bebida.')
      .addList(buildDrinkList(drinks))
      .build()
  }
}
