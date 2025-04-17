import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list-response.builder.js'
import { FLOWS } from '@/config/enums.js'
import { FlavorRepository } from '@/repositories/flavor.repository.js'
import { buildFlavorList } from '@/templates/list-builders.js'
import { deduplicateFlavor } from '@/utils/deduplicate-flavor.js'
import { parseIndex } from '@/utils/parse-index.js'
import { BaseFlow } from '../base.flow.js'
import { type ContextData, STEP_INDICATORS } from './@pizza.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class PizzaFlavorFlow extends BaseFlow {
  constructor(
    @inject(FlavorRepository) private readonly flavorRepository: FlavorRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
  ) {
    super()
  }

  public async handle({ context, phone, message }: FlowParams) {
    const flavors = await this.flavorRepository.getAllFlavors()
    const selectedIndex = parseIndex(message)
    const data = context.data as ContextData

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
        .addCode(STEP_INDICATORS.FLAVOR)
        .addEmptyLine()
        .addBold('🍕 ESCOLHA O 2° SABOR DA SUA PIZZA')
        .addQuote('Por favor, aperte o botão abaixo para escolher o sabor da sua pizza.')
        .addList(buildFlavorList(flavors))
        .build()
    }

    this.state.updateContext(phone, {
      data: { selectedFlavors: deduplicateFlavor(selectedFlavors) },
      flow: FLOWS.PIZZA_QUANTITY,
    })

    return this.responseBuilder
      .addCode(STEP_INDICATORS.QUANTITY)
      .addEmptyLine()
      .addText('🔢 Digite a quantidade de pizza desejada (1-10):')
      .build()
  }
}
