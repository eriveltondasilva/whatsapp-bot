import { inject, injectable } from 'tsyringe'

import { MenuCommand } from './menu.command.js'
import { QuantityCommand } from './quantity.command.js'
import { TypeCommand } from './type.command.js'

import { DrinkSteps } from '@/config/enums.js'

import type { ICommand } from '@/types/index.js'
type CommandMap = Record<DrinkSteps, ICommand>

@injectable()
export class CommandFactory {
  private commandMap: CommandMap

  constructor(
    @inject(MenuCommand) private menuCommand: MenuCommand,
    @inject(QuantityCommand) private quantityCommand: QuantityCommand,
    @inject(TypeCommand) private typeCommand: TypeCommand,
  ) {
    this.commandMap = this.createCommandMap()
  }

  public createCommand(step: DrinkSteps): ICommand {
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
