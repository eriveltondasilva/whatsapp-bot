import { inject, injectable } from 'tsyringe'

import { MenuCommand } from './menu.command.js'
import { QuantityCommand } from './quantity.command.js'
import { TypeCommand } from './type.command.js'

import { DrinkSteps } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { Command, CommandFactory } from '@/types/interfaces.js'
type CommandMap = Record<DrinkSteps, Command>

@injectable()
export class DrinkCommandFactory implements CommandFactory {
  private readonly commandMap: CommandMap

  constructor(
    @inject(MenuCommand) private readonly menuCommand: MenuCommand,
    @inject(QuantityCommand) private readonly quantityCommand: QuantityCommand,
    @inject(TypeCommand) private readonly typeCommand: TypeCommand,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {
    this.commandMap = this.createCommandMap()
  }

  public createCommand(commandName: DrinkSteps): Command {
    this.logger.debug('Flow selected', { commandName })

    const command = this.commandMap[commandName]
    if (!command) throw new Error(`Drink command not found for: ${commandName}`)

    return command
  }

  private createCommandMap(): CommandMap {
    return {
      [DrinkSteps.MENU]: this.menuCommand,
      [DrinkSteps.QUANTITY]: this.quantityCommand,
      [DrinkSteps.TYPE]: this.typeCommand,
    }
  }
}
