import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list-response.builder.js'
import { Flows } from '@/config/enums.js'
import { DrinkRepository } from '@/repositories/drink.repository.js'
import { buildDrinkList } from '@/templates/list-builders.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class DrinkStartFlow extends BaseFlow {
  constructor(
    @inject(DrinkRepository) private readonly drinkRepository: DrinkRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
  ) {
    super()
  }

  public async handle({ phone }: FlowParams) {
    const drinks = await this.drinkRepository.getAllDrinks()

    if (!drinks?.length) {
      this.state.resetState(phone)
      return this.responseBuilder
        .addText('❌ Desculpe, não encontramos bebidas disponíveis no momento.')
        .build()
    }

    this.state.updateFlow(phone, Flows.DRINK_SELECTION)

    return this.listResponseBuilder
      .addCode('Etapa: 1/3')
      .addEmptyLine()
      .addBold('🍹 ESCOLHA SUA BEBIDA')
      .addQuote('Por favor, aperte o botão abaixo para escolher a sua bebida.')
      .addList(buildDrinkList(drinks))
      .build()
  }
}
