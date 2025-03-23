import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder, TextResponseBuilder } from '@/builder/@index.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { CrustRepository } from '@/repositories/@index.js'
import { buildCrustList } from '@/templates/@index.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class CrustCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(CrustRepository) private crustRepository: CrustRepository,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
  ) {}

  public async execute({ phone, message }: CommandParams) {
    const crusts = await this.crustRepository.getAllCrusts()
    const selectedIndex = Number.parseInt(message, 10) - 1

    if (Number.isNaN(selectedIndex) || !crusts?.[selectedIndex]) {
      return this.listResponseBuilder
        .addTitle('❌ BORDA INVÁLIDA!')
        .addDescription('Por favor, escolha uma opção válida.')
        .addList(buildCrustList(crusts))
        .build()
    }

    const selectedCrust = crusts[selectedIndex]

    this.stateManager.updateStep(phone, PizzaSteps.QUANTITY)
    this.stateManager.updateContextData(phone, { selectedCrust })

    return this.textResponseBuilder.addText('🔢 Digite a quantidade desejada (1-5):').build()
  }
}
