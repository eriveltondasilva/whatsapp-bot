import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list-response.builder.js'
import { Flows } from '@/config/enums.js'
import { FlavorRepository } from '@/repositories/flavor.repository.js'
import { buildFlavorList } from '@/templates/list-builders.js'
import { deduplicateFlavor } from '@/utils/deduplicate-flavor.js'
import { parseIndex } from '@/utils/parse-index.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'
import type { ContextData } from './types.js'

@injectable()
export class PizzaFlavorFlow extends BaseFlow {
  constructor(
    @inject(FlavorRepository) private readonly flavorRepository: FlavorRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
  ) {
    super()
  }

  public async handle({ context, phone, message }: FlowParams) {
    const { data } = context as unknown as { data: ContextData }
    const flavors = await this.flavorRepository.getAllFlavors()
    const selectedIndex = parseIndex(message)

    if (!flavors[selectedIndex]) {
      return this.listResponseBuilder
        .addBold('❌ OPÇÃO INVÁLIDA!')
        .addText('Por favor, escolha uma das opções disponíveis abaixo.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    const selectedFlavors = [...(data.selectedFlavors || []), flavors[selectedIndex]]

    if (!data.isSingleFlavor && selectedFlavors.length === 1) {
      this.state.updateData(phone, { selectedFlavors })

      return this.listResponseBuilder
        .addCode('Etapa: 1/5')
        .addEmptyLine()
        .addBold('🍕 ESCOLHA O 2° SABOR DA SUA PIZZA')
        .addQuote('Por favor, aperte o botão abaixo para escolher o sabor da sua pizza.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    this.state.updateContext(phone, {
      data: { selectedFlavors: deduplicateFlavor(selectedFlavors) },
      flow: Flows.PIZZA_QUANTITY,
    })

    return this.responseBuilder
      .addCode('Etapa: 2/5')
      .addEmptyLine()
      .addText('🔢 Digite a quantidade de pizza desejada (1-10):')
      .build()
  }
}
