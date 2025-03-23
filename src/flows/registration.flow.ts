import { inject, injectable } from 'tsyringe'

import { CommandFactory } from '@/commands/registration/@factory.js'
import { LoggerProvider } from '@/providers/@index.js'

import type { RegistrationSteps } from '@/config/enums.js'
import type { FlowHandle, IFlowHandler } from '@/types/index.js'

@injectable()
export class RegistrationFlow implements IFlowHandler {
  constructor(
    @inject(CommandFactory) private commandFactory: CommandFactory,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public async handle({ context, phone, message }: FlowHandle) {
    this.logger.info('📌 Registration Flow')

    const step = context.step as RegistrationSteps
    const command = this.commandFactory.createCommand(step)
    return await command.execute({ context, phone, message })
  }
}
