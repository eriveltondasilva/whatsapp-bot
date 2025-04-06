import { inject, injectable } from 'tsyringe'

import { CommandFactory } from '@/commands/drink/@factory.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { DrinkSteps } from '@/config/enums.js'
import type { FlowParams } from '@/types/flows.js'
import type { Flow } from '@/types/interfaces.js'

@injectable()
export class DrinkFlow implements Flow {
  constructor(
    @inject(CommandFactory) private commandFactory: CommandFactory,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public async handle({ context, phone, message }: FlowParams) {
    this.logger.info('📌 Drink Flow')

    const step = context.step as DrinkSteps
    const command = this.commandFactory.createCommand(step)
    return await command.execute({ context, phone, message })
  }
}
