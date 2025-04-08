import { inject, injectable } from 'tsyringe'

import { Flows } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { CustomerRepository } from '@/repositories/customer.repository.js'
import { mainMenu } from '@/templates/menus.js'
import { isValidAddress } from '@/utils/validations.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams } from '@/types/flows.js'

@injectable()
export class RegistrationAddressFlow extends BaseFlow {
  constructor(
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
    @inject(CustomerRepository) private readonly customerRepository: CustomerRepository,
  ) {
    super()
  }

  public async handle({ context, message: address, phone }: FlowParams) {
    if (!isValidAddress(address)) {
      return this.responseBuilder
        .addBold('❌ ENDEREÇO INVÁLIDO')
        .addEmptyLine()
        .addText('Por favor, informe seu endereço completo.')
        .addQuote('Exemplo: "_Rua das Flores, n° 83, Centro_"')
        .build()
    }

    const { name } = context.data as {
      name: string
      address: string
    }

    if (!name) {
      this.state.resetState(phone)
      return this.responseBuilder
        .addText('❌ Ops! Algo deu errado. Por favor, tente novamente.')
        .build()
    }

    const newCustomer = this.customerRepository.create({ name, address, phone })
    this.logger.ok('New customer registered', { newCustomer })

    this.state.resetState(phone)
    this.state.updateFlow(phone, Flows.MENU)

    return this.responseBuilder
      .addText('🎉 Cadastro concluído com sucesso,', name.split(' ', 1)[0])
      .addText('Agora, vamos ao que interessa: _*escolher algo gostoso*_! 😋')
      .addEmptyLine()
      .addMenu(mainMenu)
      .build()
  }
}
