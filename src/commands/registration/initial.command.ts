import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { RegistrationSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class InitialCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
  ) {}

  public async execute({ phone, message }: CommandParams) {
    this.stateManager.updateStep(phone, RegistrationSteps.NAME)

    return this.textResponseBuilder
      .addText('🍕 Olá! Bem-vindo(a) à *Pizzaria Bella Pizza*!')
      .addText(
        'Estamos prontos para transformar a sua fome em felicidade.',
        'Antes de começar, precisamos fazer um _*rápido*_ cadastro. 🏃💨',
      )
      .addEmptyLine()
      .addText('Por favor, me informe o seu nome completo:')
      .addText('> exemplo: _"João da Silva"_')
      .build()
  }
}
