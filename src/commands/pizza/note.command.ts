import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { FlowKeys } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { orderMenu } from '@/templates/@index.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class NoteCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
  ) {}

  public async execute({ phone, message }: CommandParams) {
    const note = message === '0' ? undefined : message

    this.stateManager.updateStep(phone, FlowKeys.ORDER)
    this.stateManager.updateContextData(phone, { note })

    return this.textResponseBuilder
      .addText('✅ Pizza adicionada ao carrinho com sucesso!')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
