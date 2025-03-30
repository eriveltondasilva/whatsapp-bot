import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/list-response.builder.js'
import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { FlavorRepository } from '@/repositories/flavor.repository.js'
import { buildFlavorList } from '@/templates/list-builders.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class MenuCommand implements ICommand {
  constructor(
    @inject(FlavorRepository) private flavorRepository: FlavorRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    //
    @inject(StateFacade) private state: StateFacade,
  ) {}

  //#
  public async execute({ phone, message }: CommandParams) {
    const isSingleFlavor = message === '1'
    const flavors = await this.flavorRepository.getAllFlavors()

    if (!flavors?.length) {
      this.state.resetState(phone)
      return this.textResponseBuilder
        .addText('❌ Desculpe, não encontramos sabores disponíveis no momento.')
        .build()
    }

    this.state.updateContext(phone, {
      data: { isSingleFlavor },
      step: PizzaSteps.FLAVOR,
    })

    const title = isSingleFlavor
      ? '🍕 ESCOLHA O SABOR DA SUA PIZZA'
      : '🍕 ESCOLHA O PRIMEIRO SABOR DA SUA PIZZA'

    return this.listResponseBuilder
      .addTitle(title)
      .addDescription('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
      .addList(buildFlavorList(flavors))
      .build()
  }
}
