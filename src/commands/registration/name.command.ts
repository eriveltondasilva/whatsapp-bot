import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { RegistrationSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { isValidName } from '@/utils/validations.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class NameCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
  ) {}

  //#
  public async execute({ context, phone }: CommandParams) {
    const { name } = context.data as { name: string }

    if (!isValidName(name)) {
      return this.textResponseBuilder
        .addTitle('❌ NOME INVÁLIDO')
        .addEmptyLine()
        .addText('Por favor, informe seu nome completo.')
        .addText('> Exemplo: "_João da Silva_"')
        .build()
    }

    this.stateManager.updateStep(phone, RegistrationSteps.ADDRESS)
    this.stateManager.updateCustomer(phone, { name })

    return this.textResponseBuilder
      .addGreeting(name)
      .addText('Agora me diga onde vamos entregar suas delícias?')
      .addEmptyLine()
      .addText('Por favor, informe seu nome completo.')
      .addText('> Exemplo: "_Rua das Flores, n° 83, Centro_"')
      .build()
  }
}
