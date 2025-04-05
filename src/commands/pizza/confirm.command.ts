import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/response/text.builder.js'
import { FlowKeys } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { orderMenu } from '@/templates/menus.js'

import type { CommandParams, ICommand } from '@/types/index.js'

const MESSAGES = {
  CANCELED: '❌ PEDIDO CANCELADO',
  SUCCESS: '✅ Pizza adicionada ao carrinho com sucesso.',
} as const

@injectable()
export class ConfirmCommand implements ICommand {
  constructor(
    @inject(TextResponseBuilder) private readonly textResponseBuilder: TextResponseBuilder,
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public async execute({ message, phone }: CommandParams) {
    this.state.clearData(phone)
    this.state.updateStep(phone, FlowKeys.ORDER)

    const isCanceled = message === '0'

    return this.textResponseBuilder
      .addText(isCanceled ? MESSAGES.CANCELED : MESSAGES.SUCCESS)
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
