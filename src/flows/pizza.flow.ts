import { inject, injectable } from 'tsyringe'

import { CommandFactory } from '@/commands/pizza/@factory.js'
import { LoggerProvider } from '@/providers/@index.js'

import type { PizzaSteps } from '@/config/enums.js'
import type { FlowHandle, IFlowHandler } from '@/types/index.js'

@injectable()
export class PizzaFlow implements IFlowHandler {
  constructor(
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(CommandFactory) private commandFactory: CommandFactory,
  ) {}

  //#
  public handle({ context, phone, message }: FlowHandle) {
    this.logger.info('📌 Pizza Flow')

    const command = this.commandFactory.createCommand(context.step as PizzaSteps)
    return command.execute({ context, phone, message })
  }
}
