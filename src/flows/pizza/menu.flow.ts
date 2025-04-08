import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list-response.builder.js'
import { Flows } from '@/config/enums.js'
import { FlavorRepository } from '@/repositories/flavor.repository.js'
import { buildFlavorList } from '@/templates/list-builders.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class PizzaMenuFlow extends BaseFlow {
  constructor(
    @inject(FlavorRepository) private readonly flavorRepository: FlavorRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
  ) {
    super()
  }

  //#
  public async handle({ phone, message }: FlowParams) {
    console.log('estou no PizzaMenuFlow')
    const isSingleFlavor = message === '1'
    const flavors = await this.flavorRepository.getAllFlavors()

    if (!flavors?.length) {
      this.state.deleteState(phone)
      return this.responseBuilder
        .addText('❌ Desculpe, não encontramos sabores disponíveis no momento.')
        .build()
    }

    this.state.updateContext(phone, {
      data: { isSingleFlavor },
      flow: Flows.PIZZA_FLAVOR,
    })

    const title = isSingleFlavor
      ? '🍕 ESCOLHA O SABOR DA SUA PIZZA'
      : '🍕 ESCOLHA O 1° SABOR DA SUA PIZZA'

    return this.listResponseBuilder
      .addCode('Etapa: 1/5')
      .addEmptyLine()
      .addBold(title)
      .addQuote('Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
      .addList(buildFlavorList(flavors))
      .build()
  }
}
