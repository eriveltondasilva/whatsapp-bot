import { inject, injectable } from 'tsyringe'

import { AddressCommand } from './address.command.js'
import { InitialCommand } from './initial.command.js'
import { NameCommand } from './name.command.js'

import { RegistrationSteps } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { ICommand } from '@/types/index.js'

@injectable()
export class CommandFactory {
  constructor(
    @inject(InitialCommand) private initialCommand: InitialCommand,
    @inject(NameCommand) private nameCommand: NameCommand,
    @inject(AddressCommand) private addressCommand: AddressCommand,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  public createCommand(step: RegistrationSteps): ICommand {
    const commandMap = this.createCommandMap()
    const command = commandMap[step]

    if (!command) {
      this.logger.error('Pizza command not found', { step })
      throw new Error('Pizza command not found', { cause: { step } })
    }

    return command
  }

  private createCommandMap(): Record<RegistrationSteps, ICommand> {
    return {
      [RegistrationSteps.INITIAL]: this.initialCommand,
      [RegistrationSteps.NAME]: this.nameCommand,
      [RegistrationSteps.ADDRESS]: this.addressCommand,
    }
  }
}
