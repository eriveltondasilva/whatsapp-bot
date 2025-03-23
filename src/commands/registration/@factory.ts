import { inject, injectable } from 'tsyringe'

import { AddressCommand } from './address.command.js'
import { InitialCommand } from './initial.command.js'
import { NameCommand } from './name.command.js'

import { RegistrationSteps } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { ICommand } from '@/types/index.js'

@injectable()
export class CommandFactory {
  private commandMap: Map<RegistrationSteps, ICommand>

  constructor(
    @inject(InitialCommand) initialCommand: InitialCommand,
    @inject(NameCommand) nameCommand: NameCommand,
    @inject(AddressCommand) addressCommand: AddressCommand,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {
    this.commandMap = new Map<RegistrationSteps, ICommand>([
      [RegistrationSteps.INITIAL, initialCommand],
      [RegistrationSteps.NAME, nameCommand],
      [RegistrationSteps.ADDRESS, addressCommand],
    ])
  }

  public createCommand(step: RegistrationSteps): ICommand {
    const command = this.commandMap.get(step)

    if (!command) {
      this.logger.error('Pizza command not found', { step })
      throw new Error('Pizza command not found', { cause: { step } })
    }

    return command
  }
}
