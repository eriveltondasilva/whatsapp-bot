import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'

import type { CommandParams, ICommand } from '@/types/index.js'
import type { ContextData } from './type.js'

@injectable()
export class NoteCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
  ) {}

  //#
  public async execute({ phone, message, context }: CommandParams) {
    const note = message === '0' ? undefined : message
    const { selectedFlavors, selectedCrust, quantity } = context.data as ContextData

    if (!selectedFlavors || !selectedCrust || !quantity) {
      this.stateManager.resetState(phone)
      return this.textResponseBuilder.addText('❌ Não foi possível processar seu pedido.').build()
    }

    this.stateManager.updateStep(phone, PizzaSteps.CONFIRM)
    this.stateManager.updateContextData(phone, { note })

    const flavorNames = selectedFlavors.map((flavor) => flavor.name).join(' + ')

    return this.textResponseBuilder
      .addTitle('# Pizza:')
      .addText(`Sabor(es): _${flavorNames}_`)
      .addText(`Borda: _${selectedCrust.name}_`)
      .addText(`Quantidade: _${quantity}_`)
      .addText(note ? `📝 Observação: _${note}_` : '')
      .addEmptyLine()
      .addText('Confirma o pedido?')
      .addText('1️⃣ - Sim, confirmar')
      .addText('0️⃣ - Cancelar e voltar ao menu')
      .build()
  }
}
