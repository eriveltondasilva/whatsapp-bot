import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list-response.builder.js'
import { FLOWS } from '@/config/enums.js'
import { CrustRepository } from '@/repositories/crust.repository.js'
import { buildCrustList } from '@/templates/list-builders.js'
import { parseIndex } from '@/utils/parse-index.js'
import { BaseFlow } from '../base.flow.js'
import { STEP_INDICATORS } from './@pizza.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class PizzaCrustFlow extends BaseFlow {
  constructor(
    @inject(CrustRepository) private readonly crustRepository: CrustRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
  ) {
    super()
  }

  public async handle({ phone, message }: FlowParams) {
    const crusts = await this.crustRepository.getAllCrusts()
    const selectedIndex = parseIndex(message)

    if (!crusts[selectedIndex]) {
      return this.listResponseBuilder
        .addBold('❌ BORDA INVÁLIDA')
        .addText('Por favor, escolha uma das opções disponíveis abaixo.')
        .addList(buildCrustList(crusts))
        .build()
    }

    const selectedCrust = crusts[selectedIndex]

    this.state.updateContext(phone, {
      data: { selectedCrust },
      flow: FLOWS.PIZZA_NOTE,
    })

    return this.responseBuilder
      .addCode(STEP_INDICATORS.NOTE)
      .addEmptyLine()
      .addText('Deseja adicionar alguma observação ao seu pedido?')
      .addQuote('Exemplo: retirar cebola, mais queijo, etc.')
      .addEmptyLine()
      .addText('0️⃣ - Não desejo adicionar observações')
      .build()
  }
}
