import { inject, injectable } from 'tsyringe'

import { DrinkCommandFactory } from '@/commands/drink/@drink.factory.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { DrinkSteps } from '@/config/enums.js'
import type { FlowParams } from '@/types/flows.js'
import type { Flow } from '@/types/interfaces.js'

@injectable()
export class DrinkFlow implements Flow {
  constructor(
    @inject(DrinkCommandFactory) private readonly commandFactory: DrinkCommandFactory,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  //#
  public async handle({ context, phone, message }: FlowParams) {
    this.logger.info('📌 Drink Flow')

    const command = this.commandFactory.createCommand(context.step as DrinkSteps)
    return await command.execute({ context, phone, message })
  }
}
