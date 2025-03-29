import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder,} from '@/builder/list-response.builder.js'
import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateFacade } from '@/managers/state.facade.js'
import { CrustRepository } from '@/repositories/@index.js'
import { buildCrustList } from '@/templates/@index.js'
import { parseIndex } from '@/utils/parse-index.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class CrustCommand implements ICommand {
  constructor(
    @inject(CrustRepository) private crustRepository: CrustRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    //
    @inject(StateFacade) private stateManager: StateFacade,
  ) {}

  //#
  public async execute({ phone, message }: CommandParams) {
    const crusts = await this.crustRepository.getAllCrusts()
    const selectedIndex = parseIndex(message)

    if (!crusts[selectedIndex]) {
      return this.listResponseBuilder
        .addTitle('❌ BORDA INVÁLIDA!')
        .addDescription('Por favor, escolha uma opção válida.')
        .addList(buildCrustList(crusts))
        .build()
    }

    const selectedCrust = crusts[selectedIndex]

    this.stateManager.updateContext(phone, {
      data: { selectedCrust },
      step: PizzaSteps.QUANTITY,
    })

    return this.textResponseBuilder.addText('🔢 Digite a quantidade desejada (1-10):').build()
  }
}
