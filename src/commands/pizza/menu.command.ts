import { inject, injectable } from 'tsyringe'

import { ListBuilder } from '@/builder/response/list.builder.js'
import { TextBuilder } from '@/builder/response/text.builder.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { FlavorRepository } from '@/repositories/flavor.repository.js'
import { buildFlavorList } from '@/templates/list-builders.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class MenuCommand implements ICommand {
  constructor(
    @inject(FlavorRepository) private readonly flavorRepository: FlavorRepository,
    @inject(ListBuilder) private readonly listResponseBuilder: ListBuilder,
    @inject(TextBuilder) private readonly textResponseBuilder: TextBuilder,
    //
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public async execute({ phone, message }: CommandParams) {
    const isSingleFlavor = message === '1'
    const flavors = await this.flavorRepository.getAllFlavors()

    if (!flavors?.length) {
      this.state.deleteState(phone)
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
      : '🍕 ESCOLHA O 1° SABOR DA SUA PIZZA'

    return this.listResponseBuilder
      .addBold(title)
      .addText('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
      .addList(buildFlavorList(flavors))
      .build()
  }
}
