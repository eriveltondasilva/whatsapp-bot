import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list.builder.js'
import { TextResponseBuilder } from '@/builder/response/text.builder.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { CrustRepository } from '@/repositories/crust.repository.js'
import { buildCrustList } from '@/templates/list-builders.js'
import { isValidQuantity } from '@/utils/@index.js'

import type { FlowParams } from '@/types/flows.js'
import type { Command } from '@/types/interfaces.js'

@injectable()
export class QuantityCommand implements Command {
  constructor(
    @inject(CrustRepository) private readonly crustRepository: CrustRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private readonly textResponseBuilder: TextResponseBuilder,
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public async execute({ phone, message }: FlowParams) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return this.textResponseBuilder
        .addBold('❌ QUANTIDADE INVÁLIDA')
        .addText('Por favor, digite um número entre 1 e 10.')
        .build()
    }

    this.state.updateContext(phone, {
      data: { quantity },
      step: PizzaSteps.CRUST,
    })

    const crusts = await this.crustRepository.getAllCrusts()

    return this.listResponseBuilder
      .addBold('🍕 ESCOLHA A BORDA DA SUA PIZZA')
      .addQuote('Por favor, aperte no botão abaixo para escolher o sabor da sua pizza.')
      .addList(buildCrustList(crusts))
      .build()
  }
}
