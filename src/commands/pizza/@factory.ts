import { inject, injectable } from 'tsyringe'

import { ConfirmCommand } from './confirm.command.js'
import { CrustCommand } from './crust.command.js'
import { FlavorCommand } from './flavor.command.js'
import { MenuCommand } from './menu.command.js'
import { NoteCommand } from './note.command.js'
import { QuantityCommand } from './quantity.command.js'

import { PizzaSteps } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { ICommand } from '@/types/index.js'
type CommandMap = Record<PizzaSteps, ICommand>

@injectable()
export class CommandFactory {
  private commandMap: CommandMap

  constructor(
    @inject(ConfirmCommand) private confirmCommand: ConfirmCommand,
    @inject(CrustCommand) private crustCommand: CrustCommand,
    @inject(FlavorCommand) private flavorCommand: FlavorCommand,
    @inject(MenuCommand) private menuCommand: MenuCommand,
    @inject(NoteCommand) private noteCommand: NoteCommand,
    @inject(QuantityCommand) private quantityCommand: QuantityCommand,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {
    this.commandMap = this.createCommandMap()
  }

  //#
  public createCommand(step: PizzaSteps): ICommand {
    const command = this.commandMap[step]

    if (!command) {
      this.logger.error('Pizza command not found', { step })
      throw new Error(`Pizza command not found for step: ${step}`)
    }

    return command
  }

  private createCommandMap(): CommandMap {
    return {
      [PizzaSteps.CONFIRM]: this.confirmCommand,
      [PizzaSteps.CRUST]: this.crustCommand,
      [PizzaSteps.MENU]: this.menuCommand,
      [PizzaSteps.NOTE]: this.noteCommand,
      [PizzaSteps.FLAVOR]: this.flavorCommand,
      [PizzaSteps.QUANTITY]: this.quantityCommand,
    }
  }
}
