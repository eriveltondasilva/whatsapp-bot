import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list-response.builder.js'
import { FLOWS } from '@/config/enums.js'
import { FlavorRepository } from '@/repositories/flavor.repository.js'
import { buildFlavorList } from '@/templates/list-builders.js'
import { BaseFlow } from '../base.flow.js'
import { STEP_INDICATORS } from './@pizza.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class PizzaStartFlow extends BaseFlow {
  constructor(
    @inject(FlavorRepository) private readonly flavorRepository: FlavorRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
  ) {
    super()
  }

  public async handle({ phone, message }: FlowParams) {
    const flavors = await this.flavorRepository.getAllFlavors()
    const isSingleFlavor = message === '1'

    if (!flavors?.length) {
      this.state.deleteState(phone)
      return this.responseBuilder
        .addText('❌ Desculpe, não encontramos sabores disponíveis no momento.')
        .build()
    }

    this.state.updateContext(phone, {
      data: { isSingleFlavor },
      flow: FLOWS.PIZZA_FLAVOR,
    })

    const title = isSingleFlavor
      ? '🍕 ESCOLHA O SABOR DA SUA PIZZA'
      : '🍕 ESCOLHA O 1° SABOR DA SUA PIZZA'

    return this.listResponseBuilder
      .addCode(STEP_INDICATORS.FLAVOR)
      .addEmptyLine()
      .addBold(title)
      .addQuote('Por favor, aperte o botão abaixo para escolher o sabor da sua pizza.')
      .addList(buildFlavorList(flavors))
      .build()
  }
}
