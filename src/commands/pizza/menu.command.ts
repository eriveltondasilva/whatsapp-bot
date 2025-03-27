import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder, TextResponseBuilder } from '@/builder/@index.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { FlavorRepository } from '@/repositories/@index.js'
import { buildFlavorList } from '@/templates/@index.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class MenuCommand implements ICommand {
  constructor(
    @inject(FlavorRepository) private flavorRepository: FlavorRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    @inject(StateManager) private stateManager: StateManager,
  ) {}

  //#
  public async execute({ phone, message }: CommandParams) {
    const isSingleFlavor = message === '1'
    const flavors = await this.flavorRepository.getAllFlavors()

    if (!flavors?.length) {
      this.stateManager.resetState(phone)
      return this.textResponseBuilder
        .addText('❌ Desculpe, não encontramos sabores disponíveis no momento.')
        .build()
    }

    this.stateManager.updateStep(phone, PizzaSteps.FLAVOR)
    this.stateManager.updateContextData(phone, { isSingleFlavor })

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
