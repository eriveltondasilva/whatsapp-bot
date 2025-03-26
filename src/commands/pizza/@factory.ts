import { inject, injectable } from 'tsyringe'

import { CrustCommand } from './crust.command.js'
import { MenuCommand } from './menu.command.js'
import { NoteCommand } from './note.command.js'
import { OneFlavorCommand } from './one-flavor.command.js'
import { QuantityCommand } from './quantity.command.js'
import { TwoFlavorCommand } from './two-flavor.command.js'

import { PizzaSteps } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { ICommand } from '@/types/index.js'
type CommandMap = Record<PizzaSteps, ICommand>

@injectable()
export class CommandFactory {
  private commandMap: CommandMap

  constructor(
    @inject(CrustCommand) private crustCommand: CrustCommand,
    @inject(NoteCommand) private noteCommand: NoteCommand,
    @inject(OneFlavorCommand) private oneFlavorCommand: OneFlavorCommand,
    @inject(QuantityCommand) private quantityCommand: QuantityCommand,
    @inject(TwoFlavorCommand) private twoFlavorCommand: TwoFlavorCommand,
    @inject(MenuCommand) private menuCommand: MenuCommand,
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
      [PizzaSteps.CRUST]: this.crustCommand,
      [PizzaSteps.MENU]: this.menuCommand,
      [PizzaSteps.NOTE]: this.noteCommand,
      [PizzaSteps.ONE_FLAVOR]: this.oneFlavorCommand,
      [PizzaSteps.QUANTITY]: this.quantityCommand,
      [PizzaSteps.TWO_FLAVORS]: this.twoFlavorCommand,
    }
  }
}
