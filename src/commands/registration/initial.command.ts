import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { RegistrationSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class InitialCommand implements ICommand {
  constructor(
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
    @inject(StateFacade) private state: StateFacade,
  ) {}

  //#
  public async execute({ phone }: CommandParams) {
    this.state.updateStep(phone, RegistrationSteps.NAME)

    return this.textResponseBuilder
      .addText('🍕 Olá! Bem-vindo(a) à *Pizzaria Bella Pizza*!')
      .addText(
        'Estamos prontos para transformar a sua fome em felicidade.',
        'Antes de começar, precisamos fazer um _*rápido*_ cadastro. 🏃💨',
      )
      .addEmptyLine()
      .addText('Por favor, me informe o seu nome completo.')
      .addText('> Exemplo: "_João da Silva_"')
      .build()
  }
}
