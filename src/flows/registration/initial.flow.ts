import { injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class RegistrationInitialFlow extends BaseFlow {
  public async handle({ phone }: FlowParams) {
    this.state.updateFlow(phone, Flows.REGISTRATION_NAME)

    return this.responseBuilder
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
