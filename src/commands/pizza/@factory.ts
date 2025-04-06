import { inject, injectable } from 'tsyringe'

import { ConfirmCommand } from './confirm.command.js'
import { CrustCommand } from './crust.command.js'
import { FlavorCommand } from './flavor.command.js'
import { MenuCommand } from './menu.command.js'
import { NoteCommand } from './note.command.js'
import { QuantityCommand } from './quantity.command.js'

import { PizzaSteps } from '@/config/enums.js'

import type { Command } from '@/types/interfaces.js'
type CommandMap = Record<PizzaSteps, Command>

@injectable()
export class CommandFactory {
  private commandMap: CommandMap

  constructor(
    @inject(ConfirmCommand) private readonly confirmCommand: ConfirmCommand,
    @inject(CrustCommand) private readonly crustCommand: CrustCommand,
    @inject(FlavorCommand) private readonly flavorCommand: FlavorCommand,
    @inject(MenuCommand) private readonly menuCommand: MenuCommand,
    @inject(NoteCommand) private readonly noteCommand: NoteCommand,
    @inject(QuantityCommand) private readonly quantityCommand: QuantityCommand,
  ) {
    this.commandMap = this.createCommandMap()
  }

  //#
  public createCommand(step: PizzaSteps): Command {
    const command = this.commandMap[step]
    if (!command) throw new Error(`Pizza command not found for step: ${step}`)

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
