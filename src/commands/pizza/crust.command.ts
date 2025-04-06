import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder } from '@/builder/response/list.builder.js'
import { TextResponseBuilder } from '@/builder/response/text.builder.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { CrustRepository } from '@/repositories/crust.repository.js'
import { buildCrustList } from '@/templates/list-builders.js'
import { parseIndex } from '@/utils/parse-index.js'

import type { FlowParams } from '@/types/flows.js'
import type { Command } from '@/types/interfaces.js'

@injectable()
export class CrustCommand implements Command {
  constructor(
    @inject(CrustRepository) private readonly crustRepository: CrustRepository,
    @inject(ListResponseBuilder) private readonly listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private readonly textResponseBuilder: TextResponseBuilder,
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public async execute({ phone, message }: FlowParams) {
    const crusts = await this.crustRepository.getAllCrusts()
    const selectedIndex = parseIndex(message)

    if (!crusts[selectedIndex]) {
      return this.listResponseBuilder
        .addBold('❌ BORDA INVÁLIDA')
        .addText('Por favor, escolha uma opção válida da lista abaixo:')
        .addList(buildCrustList(crusts))
        .build()
    }

    const selectedCrust = crusts[selectedIndex]

    this.state.updateContext(phone, {
      data: { selectedCrust },
      step: PizzaSteps.NOTE,
    })

    return this.textResponseBuilder
      .addCode('Etapa: 4/5')
      .addText('Deseja adicionar alguma observação ao seu pedido?')
      .addQuote('Exemplo: retirar cebola, mais queijo, etc.')
      .addEmptyLine()
      .addText('0️⃣ - Não desejo adicionar observações')
      .addText('✍️ - Ou digite sua observação')
      .build()
  }
}
