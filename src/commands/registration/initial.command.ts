import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/response/text.builder.js'
import { RegistrationSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'

import type { FlowParams } from '@/types/flows.js'
import type { Command } from '@/types/interfaces.js'

@injectable()
export class InitialCommand implements Command {
  constructor(
    @inject(TextResponseBuilder) private readonly textResponseBuilder: TextResponseBuilder,
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public async execute({ phone }: FlowParams) {
    this.state.updateStep(phone, RegistrationSteps.NAME)

    return this.textResponseBuilder
      .addText('🍕 Olá! Bem-vindo(a) à *Pizzaria Bella Pizza*!')
      .addText(
        'Estamos prontos para transformar a sua fome em felicidade.',
        'Antes de começar, precisamos fazer um *rápido cadastro*. 🏃💨',
      )
      .addEmptyLine()
      .addText('Por favor, me informe o seu nome completo.')
      .addQuote('Exemplo: "_João da Silva_"')
      .build()
  }
}
