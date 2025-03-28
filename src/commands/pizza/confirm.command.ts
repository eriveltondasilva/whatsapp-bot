import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { FlowKeys } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { orderMenu } from '@/templates/@index.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class ConfirmCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
  ) {}

  //#
  public async execute({ message, phone }: CommandParams) {
    if (message === '0') {
      this.stateManager.resetState(phone)
      return this.textResponseBuilder.addText('❌ Pedido cancelado.').build()
    }

    // this.stateManager.
    this.stateManager.updateStep(phone, FlowKeys.ORDER)

    return this.textResponseBuilder
      .addText('✅ Pizza adicionada ao carrinho com sucesso!')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
