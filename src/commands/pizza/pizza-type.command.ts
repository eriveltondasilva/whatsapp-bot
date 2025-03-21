import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder, TextResponseBuilder } from '@/builder/@index.js'
import { PizzaSteps, PizzaType } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { FlavorRepository } from '@/repositories/@index.js'
import { buildFlavorList } from '@/templates/@index.js'

import type { CommandParams, ICommand } from '@/commands/command.interface.js'

@injectable()
export class PizzaTypeCommand implements ICommand {
  constructor(
    @inject(FlavorRepository) private flavorRepository: FlavorRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    @inject(StateManager) private stateManager: StateManager,
  ) {}

  async execute({ phone, message }: CommandParams) {
    const pizzaType = message === '1' ? PizzaType.FULL : PizzaType.HALF
    const flavors = await this.flavorRepository.getAllFlavors()

    if (!flavors?.length) {
      this.stateManager.resetState(phone)
      return this.textResponseBuilder
        .addText('❌ Desculpe, não encontramos sabores disponíveis no momento.')
        .build()
    }

    this.stateManager.updateStep(phone, PizzaSteps.FLAVOR)
    this.stateManager.updateContextData(phone, { pizzaType })

    const text = pizzaType === PizzaType.FULL ? 'O SABOR' : 'O PRIMEIRO SABOR'

    return this.listResponseBuilder
      .addTitle(`🍕 *ESCOLHA ${text} DA SUA PIZZA*`)
      .addDescription('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
      .addList(buildFlavorList(flavors))
      .build()
  }
}
