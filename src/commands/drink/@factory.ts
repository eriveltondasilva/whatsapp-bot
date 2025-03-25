import { inject, injectable } from 'tsyringe'

import { MenuCommand } from './menu.command.js'
import { QuantityCommand } from './quantity.command.js'
import { TypeCommand } from './type.command.js'

import { DrinkSteps } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { ICommand } from '@/types/index.js'

@injectable()
export class CommandFactory {
  constructor(
    @inject(MenuCommand) private menuCommand: MenuCommand,
    @inject(QuantityCommand) private quantityCommand: QuantityCommand,
    @inject(TypeCommand) private typeCommand: TypeCommand,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  public createCommand(step: DrinkSteps): ICommand {
    const commandMap = this.createCommandMap()
    const command = commandMap[step]

    if (!command) {
      this.logger.error('Pizza command not found', { step })
      throw new Error('Pizza command not found', { cause: { step } })
    }

    return command
  }

  private createCommandMap(): Record<DrinkSteps, ICommand> {
    return {
      [DrinkSteps.MENU]: this.menuCommand,
      [DrinkSteps.QUANTITY]: this.quantityCommand,
      [DrinkSteps.TYPE]: this.typeCommand,
    }
  }
}
