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

@injectable()
export class CommandFactory {
  private commandMap: Map<PizzaSteps, ICommand>

  constructor(
    @inject(CrustCommand) crustCommand: CrustCommand,
    @inject(NoteCommand) notesCommand: NoteCommand,
    @inject(OneFlavorCommand) oneFlavorCommand: OneFlavorCommand,
    @inject(QuantityCommand) quantityCommand: QuantityCommand,
    @inject(TwoFlavorCommand) twoFlavorCommand: TwoFlavorCommand,
    @inject(MenuCommand) menuCommand: MenuCommand,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {
    this.commandMap = new Map<PizzaSteps, ICommand>([
      [PizzaSteps.CRUST, crustCommand],
      [PizzaSteps.NOTE, notesCommand],
      [PizzaSteps.ONE_FLAVOR, oneFlavorCommand],
      [PizzaSteps.QUANTITY, quantityCommand],
      [PizzaSteps.TWO_FLAVORS, twoFlavorCommand],
      [PizzaSteps.MENU, menuCommand],
    ])
  }

  public createCommand(step: PizzaSteps): ICommand {
    const command = this.commandMap.get(step)

    if (!command) {
      this.logger.error('Pizza command not found', { step })
      throw new Error('Pizza command not found', { cause: { step } })
    }

    return command
  }
}
