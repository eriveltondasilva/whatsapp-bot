import { inject, injectable } from 'tsyringe'

import { CommandFactory } from '@/commands/drink/@factory.js'
import { LoggerProvider } from '@/providers/@index.js'

import type { DrinkSteps } from '@/config/enums.js'
import type { FlowHandle, IFlowHandler } from '@/types/index.js'

@injectable()
export class DrinkFlow implements IFlowHandler {
  constructor(
    @inject(CommandFactory) private commandFactory: CommandFactory,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public async handle({ context, phone, message }: FlowHandle) {
    this.logger.info('📌 Drink Flow')

    const step = context.step as DrinkSteps
    const command = this.commandFactory.createCommand(step)
    return await command.execute({ context, phone, message })
  }
}
