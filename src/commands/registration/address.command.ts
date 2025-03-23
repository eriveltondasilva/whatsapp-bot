import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { FlowKeys } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { CustomerRepository } from '@/repositories/customer.repository.js'
import { mainMenu } from '@/templates/main-menu.js'
import { getFirstName } from '@/utils/get-first-name.js'
import { isValidAddress } from '@/utils/validations.js'

import type { CommandParams, ICommand } from '@/types/index.js'

@injectable()
export class AddressCommand implements ICommand {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(CustomerRepository) private customerRepository: CustomerRepository,
    @inject(TextResponseBuilder) private textResponseBuilder: TextResponseBuilder,
  ) {}

  public async execute({ context, message, phone }: CommandParams) {
    if (!isValidAddress(message)) {
      return this.textResponseBuilder
        .addTitle('❌ ENDEREÇO INVÁLIDO')
        .addEmptyLine()
        .addText('Por favor, informe seu endereço completo:')
        .addText('> exemplo: _"Rua das Flores, n° 83, Centro"_')
        .build()
    }

    const { name } = context.data as { name: string }

    if (!name) {
      this.stateManager.resetState(phone)
      return this.textResponseBuilder
        .addText('❌ Ops! Algo deu errado. Por favor, tente novamente.')
        .build()
    }

    const newCustomer = this.customerRepository.create({
      phone,
      name,
      address: message,
    })
    this.logger.ok('New customer registered', { newCustomer })

    this.stateManager.resetState(phone)
    this.stateManager.updateStep(phone, FlowKeys.MENU)

    return this.textResponseBuilder
      .addText(`🎉 Cadastro concluído com sucesso, ${getFirstName(name)}!`)
      .addText('Agora, vamos ao que interessa: _*escolher algo gostoso*_! 😋')
      .addEmptyLine()
      .addMenu(mainMenu)
      .build()
  }
}
