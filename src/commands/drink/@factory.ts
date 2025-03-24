import { inject, injectable } from 'tsyringe'

import { MenuCommand } from './menu.command.js'
import { QuantityCommand } from './quantity.command.js'
import { TypeCommand } from './type.command.js'

import { DrinkSteps } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { ICommand } from '@/types/index.js'

@injectable()
export class CommandFactory {
  private readonly commandMap: Map<DrinkSteps, ICommand>

  constructor(
    @inject(MenuCommand) menuCommand: MenuCommand,
    @inject(QuantityCommand) quantityCommand: QuantityCommand,
    @inject(TypeCommand) typeCommand: TypeCommand,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {
    this.commandMap = new Map<DrinkSteps, ICommand>([
      [DrinkSteps.MENU, menuCommand],
      [DrinkSteps.QUANTITY, quantityCommand],
      [DrinkSteps.TYPE, typeCommand],
    ])
  }

  public createCommand(step: DrinkSteps): ICommand {
    const command = this.commandMap.get(step)

    if (!command) {
      this.logger.error('Pizza command not found', { step })
      throw new Error('Pizza command not found', { cause: { step } })
    }

    return command
  }
}
