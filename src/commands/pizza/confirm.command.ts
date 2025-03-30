import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { FlowKeys } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { orderMenu } from '@/templates/menus.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class ConfirmCommand implements ICommand {
  constructor(
    @inject(StateFacade) private state: StateFacade,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
  ) {}

  //#
  public async execute({ message, phone }: CommandParams) {
    if (message === '0') {
      this.state.resetState(phone)
      return this.textResponseBuilder.addText('❌ Pedido cancelado.').build()
    }

    this.state.clearData(phone)
    this.state.updateStep(phone, FlowKeys.ORDER)

    return this.textResponseBuilder
      .addText('✅ Pizza adicionada ao carrinho com sucesso!')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
