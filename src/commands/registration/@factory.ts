import { inject, injectable } from 'tsyringe'

import { AddressCommand } from './address.command.js'
import { InitialCommand } from './initial.command.js'
import { NameCommand } from './name.command.js'

import { RegistrationSteps } from '@/config/enums.js'

import type { Command } from '@/types/interfaces.js'
type CommandMap = Record<RegistrationSteps, Command>

@injectable()
export class CommandFactory {
  private readonly commandMap: CommandMap

  constructor(
    @inject(InitialCommand) private readonly initialCommand: InitialCommand,
    @inject(NameCommand) private readonly nameCommand: NameCommand,
    @inject(AddressCommand) private readonly addressCommand: AddressCommand,
  ) {
    this.commandMap = this.createCommandMap()
  }

  public createCommand(step: RegistrationSteps): Command {
    const command = this.commandMap[step]
    if (!command) throw new Error(`Registration command not found for step: ${step}`)

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
