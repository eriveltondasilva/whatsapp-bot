import { inject, injectable } from 'tsyringe'

import { PizzaCommandFactory } from '@/commands/pizza/@pizza.factory.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { PizzaSteps } from '@/config/enums.js'
import type { FlowParams } from '@/types/flows.js'
import type { Flow } from '@/types/interfaces.js'

@injectable()
export class PizzaFlow implements Flow {
  constructor(
    @inject(PizzaCommandFactory) private readonly commandFactory: PizzaCommandFactory,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  //#
  public async handle({ context, phone, message }: FlowParams) {
    this.logger.info('📌 Pizza Flow', { step: context.step, phone })

    const command = this.commandFactory.createCommand(context.step as PizzaSteps)
    return await command.execute({ context, phone, message })
  }
}
