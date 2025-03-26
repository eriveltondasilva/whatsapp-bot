import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { StateManager } from '@/managers/state-manager.js'

import { FlowKeys } from '@/config/enums.js'
import type { CommandParams, ICommand } from '@/types/index.js'
import type { Prisma } from '@prisma/client'

type Data = {
  selectedFlavors: Prisma.FlavorCreateInput[]
  selectedCrust: Prisma.CrustCreateInput
  quantity: number
  note?: string
}

@injectable()
export class ConfirmCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
  ) {}

  //#
  public async execute({ phone, context }: CommandParams) {
    const { selectedFlavors, selectedCrust, quantity, note } = context.data as Data

    if (!selectedFlavors || !selectedCrust || !quantity) {
      this.stateManager.resetState(phone)
      return this.textResponseBuilder
        .addText('❌ Não foi possível processar seu pedido. Por favor, reinicie o pedido.')
        .build()
    }

    // Construir a mensagem de confirmação
    const flavorNames = selectedFlavors.map((flavor) => flavor.name).join(' + ')

    this.stateManager.updateStep(phone, FlowKeys.ORDER)

    return this.textResponseBuilder
      .addTitle('✅ Confirmação do Pedido:')
      .addText(`🍕 Sabor(es): ${flavorNames}`)
      .addText(`🥖 Borda: ${selectedCrust.name}`)
      .addText(`🔢 Quantidade: ${quantity}`)
      .addText(note ? `📝 Observação: ${note}` : '')
      .addEmptyLine()
      .addText('Confirma o pedido?')
      .addText('1️⃣ - Sim, confirmar pedido')
      .addText('0️⃣ - Cancelar e voltar ao menu inicial')
      .build()
  }
}
