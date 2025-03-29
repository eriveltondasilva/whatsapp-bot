import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/list-response.builder.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateFacade } from '@/managers/state.facade.js'
import { CrustRepository} from '@/repositories/crust.repository.js'
import { FlavorRepository } from '@/repositories/flavor.repository.js'
import { buildCrustList, buildFlavorList } from '@/templates/@index.js'
import { parseIndex } from '@/utils/parse-index.js'

import type { CommandParams, ICommand } from '@/types/index.js'
import type { ContextData } from './type.js'

@injectable()
export class FlavorCommand implements ICommand {
  constructor(
    @inject(CrustRepository) private crustRepository: CrustRepository,
    @inject(FlavorRepository) private flavorRepository: FlavorRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
    //
    @inject(StateFacade) private stateManager: StateFacade,
  ) {}

  //#
  public async execute({ context, phone, message }: CommandParams) {
    const { data } = context as unknown as { data: ContextData }
    const flavors = await this.flavorRepository.getAllFlavors()
    const selectedIndex = parseIndex(message)

    if (!flavors[selectedIndex]) {
      return this.listResponseBuilder
        .addTitle('❌ OPÇÃO INVÁLIDA!')
        .addDescription('Por favor, escolha uma opção válida.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    const selectedFlavors = [...(data.selectedFlavors || []), flavors[selectedIndex]]

    if (!data.isSingleFlavor && selectedFlavors.length === 1) {
      this.stateManager.updateData(phone, { selectedFlavors })

      return this.listResponseBuilder
        .addTitle('🍕🍕 ESCOLHA O SEGUNDO SABOR DA PIZZA')
        .addDescription('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    this.stateManager.updateContext(phone, {
      data: { selectedFlavors },
      step: PizzaSteps.CRUST,
    })

    const crusts = await this.crustRepository.getAllCrusts()

    return this.listResponseBuilder
      .addTitle('🍕 ESCOLHA A BORDA DA SUA PIZZA')
      .addDescription('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
      .addList(buildCrustList(crusts))
      .build()
  }
}
