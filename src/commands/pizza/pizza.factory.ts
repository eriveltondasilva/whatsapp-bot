import { inject, injectable } from 'tsyringe'

import { PizzaCrustCommand } from './pizza-crust.command.js'
import { PizzaFlavorCommand } from './pizza-flavor.command.js'
import { PizzaNotesCommand } from './pizza-notes.command.js'
import { PizzaQuantityCommand } from './pizza-quantity.command.js'
import { PizzaTypeCommand } from './pizza-type.command.js'

import { PizzaSteps } from '@/config/enums.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { ICommand } from '../command.interface.js'

@injectable()
export class PizzaCommandFactory {
  private commandMap: Map<PizzaSteps, ICommand>

  constructor(
    @inject(PizzaCrustCommand) pizzaCrustCommand: PizzaCrustCommand,
    @inject(PizzaFlavorCommand) pizzaFlavorCommand: PizzaFlavorCommand,
    @inject(PizzaNotesCommand) pizzaNotesCommand: PizzaNotesCommand,
    @inject(PizzaQuantityCommand) pizzaQuantityCommand: PizzaQuantityCommand,
    @inject(PizzaTypeCommand) pizzaTypeCommand: PizzaTypeCommand,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {
    this.commandMap = new Map<PizzaSteps, ICommand>([
      [PizzaSteps.CRUST, pizzaCrustCommand],
      [PizzaSteps.FLAVOR, pizzaFlavorCommand],
      [PizzaSteps.NOTES, pizzaNotesCommand],
      [PizzaSteps.QUANTITY, pizzaQuantityCommand],
      [PizzaSteps.TYPE, pizzaTypeCommand],
    ])
  }

  getCommand(step: PizzaSteps): ICommand {
    const command = this.commandMap.get(step)

    if (!command) {
      this.logger.error('Command not found', { step })
      throw new Error('Command not found', { cause: { step } })
    }

    return command
  }
}
