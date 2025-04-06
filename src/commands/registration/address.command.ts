import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/response/text.builder.js'
import { FlowKeys } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { CustomerRepository } from '@/repositories/customer.repository.js'
import { mainMenu } from '@/templates/menus.js'
import { isValidAddress } from '@/utils/validations.js'

import type { FlowParams } from '@/types/flows.js'
import type { Command } from '@/types/interfaces.js'
import type { ContextData } from './type.js'

@injectable()
export class AddressCommand implements Command {
  constructor(
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
    @inject(CustomerRepository) private readonly customerRepository: CustomerRepository,
    @inject(TextResponseBuilder) private readonly textResponseBuilder: TextResponseBuilder,
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  public async execute({ context, message: address, phone }: FlowParams) {
    if (!isValidAddress(address)) {
      return this.textResponseBuilder
        .addBold('❌ ENDEREÇO INVÁLIDO')
        .addEmptyLine()
        .addText('Por favor, informe seu endereço completo.')
        .addQuote('Exemplo: "_Rua das Flores, n° 83, Centro_"')
        .build()
    }

    const { name } = context.data as ContextData

    if (!name) {
      this.state.resetState(phone)
      return this.textResponseBuilder
        .addText('❌ Ops! Algo deu errado. Por favor, tente novamente.')
        .build()
    }

    const newCustomer = this.customerRepository.create({ name, address, phone })
    this.logger.ok('New customer registered', { newCustomer })

    this.state.resetState(phone)
    this.state.updateStep(phone, FlowKeys.MENU)

    return this.textResponseBuilder
      .addText('🎉 Cadastro concluído com sucesso,', name.split(' ', 1)[0])
      .addText('Agora, vamos ao que interessa: _*escolher algo gostoso*_! 😋')
      .addEmptyLine()
      .addMenu(mainMenu)
      .build()
  }
}
