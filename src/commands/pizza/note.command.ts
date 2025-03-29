import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'

import type { CommandParams, ICommand } from '@/types/index.js'
import { formatCurrency } from '@/utils/format-currency.js'
import type { ContextData } from './type.js'

@injectable()
export class NoteCommand implements ICommand {
  constructor(
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    @inject(StateManager) private stateManager: StateManager,
  ) {}

  //#
  public async execute({ phone, message, context }: CommandParams) {
    const note = message === '0' ? undefined : message
    const { selectedFlavors, selectedCrust, quantity } = context.data as ContextData

    if (!selectedFlavors || !selectedCrust || !quantity) {
      this.stateManager.resetState(phone)
      return this.textResponseBuilder.addText('❌ Não foi possível processar seu pedido.').build()
    }

    this.stateManager.updateContext(phone, {
      data: { note },
      step: PizzaSteps.CONFIRM,
    })

    const flavorNames = selectedFlavors.map((flavor) => flavor.name).join(' + ')
    const total = formatCurrency(
      selectedFlavors.reduce((acc, flavor) => acc + Number(flavor.price), 0),
    )

    return this.textResponseBuilder
      .addText('# PIZZA')
      .addText(`Sabor: _${flavorNames}_`)
      .addText(`Borda: _${selectedCrust.name}_`)
      .addText(`Quantidade: _${quantity}_`)
      .addText(`Observação: _${note || 'N/A'}_`)
      .addText(`Total: _${total}_`)
      .addEmptyLine()
      .addText('Confirma o pedido?')
      .addText('1️⃣ - Sim, confirmar')
      .addText('0️⃣ - Cancelar e voltar ao menu')
      .build()
  }
}
