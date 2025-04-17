import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list-response.builder.js'
import { Flows } from '@/config/enums.js'
import { CrustRepository } from '@/repositories/crust.repository.js'
import { buildCrustList } from '@/templates/list-builders.js'
import { isValidQuantity } from '@/utils/@index.js'
import { BaseFlow } from '../base.flow.js'
import { STEP_INDICATORS } from './@pizza.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class PizzaQuantityFlow extends BaseFlow {
  constructor(
    @inject(CrustRepository) private readonly crustRepository: CrustRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
  ) {
    super()
  }

  public async handle({ phone, message }: FlowParams) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return this.responseBuilder
        .addBold('❌ QUANTIDADE INVÁLIDA')
        .addText('Por favor, digite um número entre 1 e 10.')
        .build()
    }

    this.state.updateContext(phone, {
      data: { quantity },
      flow: Flows.PIZZA_CRUST,
    })

    const crusts = await this.crustRepository.getAllCrusts()

    return this.listResponseBuilder
      .addCode(STEP_INDICATORS.CRUST)
      .addEmptyLine()
      .addBold('🍕 ESCOLHA A BORDA DA SUA PIZZA')
      .addQuote('Por favor, aperte o botão abaixo para escolher a borda da sua pizza.')
      .addList(buildCrustList(crusts))
      .build()
  }
}
