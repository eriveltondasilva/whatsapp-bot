import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/list-response.builder.js'
import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { FlavorRepository } from '@/repositories/flavor.repository.js'
import { buildFlavorList } from '@/templates/list-builders.js'
import { parseIndex } from '@/utils/parse-index.js'

import type { CommandParams, ICommand } from '@/types/index.js'
import type { ContextData } from './type.js'

@injectable()
export class FlavorCommand implements ICommand {
  constructor(
    @inject(FlavorRepository) private readonly flavorRepository: FlavorRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private readonly textResponseBuilder: TextResponseBuilder,
    //
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public async execute({ context, phone, message }: CommandParams) {
    const { data } = context as unknown as { data: ContextData }
    const flavors = await this.flavorRepository.getAllFlavors()
    const selectedIndex = parseIndex(message)

    if (!flavors[selectedIndex]) {
      return this.listResponseBuilder
        .addBold('❌ OPÇÃO INVÁLIDA!')
        .addText('Por favor, escolha uma opção válida.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    const selectedFlavors = [...(data.selectedFlavors || []), flavors[selectedIndex]]

    if (!data.isSingleFlavor && selectedFlavors.length === 1) {
      this.state.updateData(phone, { selectedFlavors })

      return this.listResponseBuilder
        .addBold('🍕 ESCOLHA O 2° SABOR DA PIZZA')
        .addText('> Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    this.state.updateContext(phone, {
      data: { selectedFlavors },
      step: PizzaSteps.QUANTITY,
    })

    return this.textResponseBuilder
      .addText('🔢 Digite a quantidade de pizza desejada (1-10):')
      .build()
  }
}
