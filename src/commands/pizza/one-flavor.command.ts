import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/@index.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { CrustRepository, FlavorRepository } from '@/repositories/@index.js'
import { buildCrustList, buildFlavorList } from '@/templates/@index.js'

import type { CommandParams, ICommand } from '@/types/index.js'
import { parseIndex } from '@/utils/parse-index.js'

@injectable()
export class OneFlavorCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(CrustRepository) private crustRepository: CrustRepository,
    @inject(FlavorRepository) private flavorRepository: FlavorRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
  ) {}

  public async execute({ phone, message }: CommandParams) {
    const flavors = await this.flavorRepository.getAllFlavors()
    const selectedIndex = parseIndex(message)

    if (!flavors[selectedIndex]) {
      return this.listResponseBuilder
        .addTitle('❌ OPÇÃO INVÁLIDA!')
        .addDescription('Por favor, escolha uma opção válida.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    const selectedFlavors = [flavors[selectedIndex]]

    this.stateManager.updateStep(phone, PizzaSteps.CRUST)
    this.stateManager.updateContextData(phone, { selectedFlavors })

    const crusts = await this.crustRepository.getAllCrusts()

    return this.listResponseBuilder
      .addTitle('🍕 ESCOLHA A BORDA DA SUA PIZZA')
      .addDescription('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
      .addList(buildCrustList(crusts))
      .build()
  }
}
