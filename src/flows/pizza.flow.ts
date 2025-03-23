import { inject, injectable } from 'tsyringe'

import { CommandFactory } from '@/commands/pizza/@factory.js'
import { LoggerProvider } from '@/providers/@index.js'

import type { PizzaSteps } from '@/config/enums.js'
import type { FlowHandle, IFlowHandler } from '@/types/index.js'

@injectable()
export class PizzaFlow implements IFlowHandler {
  constructor(
    @inject(CommandFactory) private commandFactory: CommandFactory,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public async handle({ context, phone, message }: FlowHandle) {
    this.logger.info('📌 Pizza Flow', { step: context.step, phone })

    const step = context.step as PizzaSteps
    const command = this.commandFactory.createCommand(step)
    return await command.execute({ context, phone, message })
  }
}
