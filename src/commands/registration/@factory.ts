import { inject, injectable } from 'tsyringe'

import { AddressCommand } from './address.command.js'
import { InitialCommand } from './initial.command.js'
import { NameCommand } from './name.command.js'

import { RegistrationSteps } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { ICommand } from '@/types/index.js'
type CommandMap = Record<RegistrationSteps, ICommand>

@injectable()
export class CommandFactory {
  private commandMap: CommandMap

  constructor(
    @inject(InitialCommand) private initialCommand: InitialCommand,
    @inject(NameCommand) private nameCommand: NameCommand,
    @inject(AddressCommand) private addressCommand: AddressCommand,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {
    this.commandMap = this.createCommandMap()
  }

  public createCommand(step: RegistrationSteps): ICommand {
    const command = this.commandMap[step]

    if (!command) {
      this.logger.error('Registration command not found', { step })
      throw new Error(`Registration command not found for step: ${step}`)
    }

    return command
  }

  private createCommandMap(): CommandMap {
    return {
      [RegistrationSteps.INITIAL]: this.initialCommand,
      [RegistrationSteps.NAME]: this.nameCommand,
      [RegistrationSteps.ADDRESS]: this.addressCommand,
    }
  }
}
