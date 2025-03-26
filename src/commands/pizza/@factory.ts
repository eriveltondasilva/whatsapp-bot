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
  constructor(
    @inject(CrustCommand) private crustCommand: CrustCommand,
    @inject(NoteCommand) private notesCommand: NoteCommand,
    @inject(OneFlavorCommand) private oneFlavorCommand: OneFlavorCommand,
    @inject(QuantityCommand) private quantityCommand: QuantityCommand,
    @inject(TwoFlavorCommand) private twoFlavorCommand: TwoFlavorCommand,
    @inject(MenuCommand) private menuCommand: MenuCommand,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public createCommand(step: PizzaSteps): ICommand {
    const commandMap = this.createCommandMap()
    const command = commandMap[step]

    if (!command) {
      this.logger.error('Pizza command not found', { step })
      throw new Error(`Pizza command not found for step: ${step}`)
    }

    return command
  }

  private createCommandMap(): Record<PizzaSteps, ICommand> {
    return {
      [PizzaSteps.CRUST]: this.crustCommand,
      [PizzaSteps.MENU]: this.menuCommand,
      [PizzaSteps.NOTE]: this.notesCommand,
      [PizzaSteps.ONE_FLAVOR]: this.oneFlavorCommand,
      [PizzaSteps.QUANTITY]: this.quantityCommand,
      [PizzaSteps.TWO_FLAVORS]: this.twoFlavorCommand,
    } as const
  }
}
