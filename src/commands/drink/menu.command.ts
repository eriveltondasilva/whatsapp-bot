import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/list-response.builder.js'
import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { DrinkSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { DrinkRepository } from '@/repositories/drink.repository.js'
import { buildDrinkList } from '@/templates/list-builders.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class MenuCommand implements ICommand {
  constructor(
    @inject(DrinkRepository) private drinkRepository: DrinkRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    //
    @inject(StateFacade) private state: StateFacade,
  ) {}

  //#
  public async execute({ phone }: CommandParams) {
    const drinks = await this.drinkRepository.getAllDrinks()

    if (!drinks?.length) {
      this.state.resetState(phone)
      return this.textResponseBuilder
        .addText('❌ Desculpe, não encontramos bebidas disponíveis no momento.')
        .build()
    }

    this.state.updateStep(phone, DrinkSteps.TYPE)

    return this.listResponseBuilder
      .addBold('🍹 ESCOLHA SUA BEBIDA')
      .addText('> Por favor, aperte no botão abaixo para escolher a sua bebida.')
      .addList(buildDrinkList(drinks))
      .build()
  }
}
