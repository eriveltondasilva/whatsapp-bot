import { inject, injectable } from 'tsyringe'

import { MenuCommand } from './menu.command.js'
import { QuantityCommand } from './quantity.command.js'
import { TypeCommand } from './type.command.js'

import { DrinkSteps } from '@/config/enums.js'

import type { Command } from '@/types/interfaces.js'
type CommandMap = Record<DrinkSteps, Command>

@injectable()
export class CommandFactory {
  private readonly commandMap: CommandMap

  constructor(
    @inject(MenuCommand) private readonly menuCommand: MenuCommand,
    @inject(QuantityCommand) private readonly quantityCommand: QuantityCommand,
    @inject(TypeCommand) private readonly typeCommand: TypeCommand,
  ) {
    this.commandMap = this.createCommandMap()
  }

  public createCommand(step: DrinkSteps): Command {
    const command = this.commandMap[step]
    if (!command) throw new Error(`Drink command not found for step: ${step}`)

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
