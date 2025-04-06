import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list.builder.js'
import { TextResponseBuilder } from '@/builder/response/text.builder.js'
import { DrinkSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { DrinkRepository } from '@/repositories/drink.repository.js'
import { buildDrinkList } from '@/templates/list-builders.js'

import type { FlowParams } from '@/types/flows.js'
import type { Command } from '@/types/interfaces.js'

@injectable()
export class MenuCommand implements Command {
  constructor(
    @inject(DrinkRepository) private readonly drinkRepository: DrinkRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private readonly textResponseBuilder: TextResponseBuilder,
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public async execute({ phone }: FlowParams) {
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
      .addQuote('Por favor, aperte no botão abaixo para escolher a sua bebida.')
      .addList(buildDrinkList(drinks))
      .build()
  }
}
