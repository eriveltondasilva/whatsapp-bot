import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/response/text.builder.js'
import { RegistrationSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { isValidName } from '@/utils/validations.js'

import type { FlowParams } from '@/types/flows.js'
import type { Command } from '@/types/interfaces.js'

@injectable()
export class NameCommand implements Command {
  constructor(
    @inject(TextResponseBuilder) private readonly textResponseBuilder: TextResponseBuilder,
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public async execute({ message: name, phone }: FlowParams) {
    if (!isValidName(name)) {
      return this.textResponseBuilder
        .addBold('❌ NOME INVÁLIDO')
        .addEmptyLine()
        .addText('Por favor, informe seu nome completo.')
        .addQuote('Exemplo: "_João da Silva_"')
        .build()
    }

    this.state.updateContext(phone, {
      data: { name },
      step: RegistrationSteps.ADDRESS,
    })

    return this.textResponseBuilder
      .addGreeting(name)
      .addText('Agora me diga onde vamos entregar suas delícias?')
      .addEmptyLine()
      .addText('Por favor, informe seu nome completo.')
      .addQuote('Exemplo: "_Rua das Flores, n° 83, Centro_"')
      .build()
  }
}
