import { inject, injectable } from 'tsyringe'

import { AddressCommand } from './address.command.js'
import { InitialCommand } from './initial.command.js'
import { NameCommand } from './name.command.js'

import { RegistrationSteps } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { Command, CommandFactory } from '@/types/interfaces.js'
type CommandMap = Record<RegistrationSteps, Command>

@injectable()
export class RegistrationCommandFactory implements CommandFactory {
  private readonly commandMap: CommandMap

  constructor(
    @inject(AddressCommand) private readonly addressCommand: AddressCommand,
    @inject(InitialCommand) private readonly initialCommand: InitialCommand,
    @inject(NameCommand) private readonly nameCommand: NameCommand,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {
    this.commandMap = this.createCommandMap()
  }

  //#
  public createCommand(commandName: RegistrationSteps): Command {
    this.logger.debug('Flow selected', { commandName })

    const command = this.commandMap[commandName]
    if (!command) throw new Error(`Registration command not found for: ${commandName}`)

    return command
  }

  private createCommandMap(): CommandMap {
    return {
      [RegistrationSteps.ADDRESS]: this.addressCommand,
      [RegistrationSteps.INITIAL]: this.initialCommand,
      [RegistrationSteps.NAME]: this.nameCommand,
    }
  }
}
