import type { Prisma } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/@index.js'
import { PizzaSteps, PizzaType } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { CrustRepository, FlavorRepository } from '@/repositories/@index.js'
import { buildCrustList, buildFlavorList } from '@/templates/@index.js'

import type { CommandParams, ICommand } from '../command.interface.js'

@injectable()
export class PizzaFlavorCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(CrustRepository) private crustRepository: CrustRepository,
    @inject(FlavorRepository) private flavorRepository: FlavorRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
  ) {}

  async execute({ context, phone, message }: CommandParams) {
    const { data } = context
    const flavors = await this.flavorRepository.getAllFlavors()
    const crusts = await this.crustRepository.getAllCrusts()

    const selectedIndex = Number.parseInt(message, 10) - 1

    if (Number.isNaN(selectedIndex) || !flavors?.[selectedIndex]) {
      return this.listResponseBuilder
        .addTitle('❌ OPÇÃO INVÁLIDA!')
        .addDescription('Por favor, escolha uma opção válida.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    const selectedFlavor = (data.selectedFlavor as Prisma.FlavorCreateInput[]) || []
    selectedFlavor.push(flavors[selectedIndex])

    if (context.data.pizzaType === PizzaType.HALF && selectedFlavor.length === 1) {
      this.stateManager.updateStep(phone, PizzaSteps.FLAVOR)
      this.stateManager.updateContextData(phone, { selectedFlavor })

      return this.listResponseBuilder
        .addTitle('🍕🍕 ESCOLHA O SEGUNDO SABOR DA PIZZA')
        .addDescription('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    this.stateManager.updateStep(phone, PizzaSteps.CRUST)
    this.stateManager.updateContextData(phone, { selectedFlavor })

    return this.listResponseBuilder
      .addTitle('🍕 *ESCOLHA A BORDA DA SUA PIZZA*')
      .addDescription('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
      .addList(buildCrustList(crusts))
      .build()
  }
}
