import { inject, injectable } from 'tsyringe'

import { PizzaCommandFactory } from '@/commands/pizza/pizza.factory.js'
import { LoggerProvider } from '@/providers/@index.js'

import type { PizzaSteps } from '@/config/enums.js'
import type { FlowHandlerProps, IFlowHandler } from '@/types/index.js'

@injectable()
export class PizzaFlow implements IFlowHandler {
  constructor(
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(PizzaCommandFactory) private pizzaCommandFactory: PizzaCommandFactory,
  ) {}

  // ###
  handle({ state, phone, message }: FlowHandlerProps) {
    this.logger.info('📌 Pizza Flow')
    const { context } = state

    const command = this.pizzaCommandFactory.getCommand(state.context.step as PizzaSteps)
    return command.execute({ context, phone, message })
  }
}
