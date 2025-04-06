import { inject, injectable } from 'tsyringe'

import { RegistrationCommandFactory } from '@/commands/registration/@registration.factory.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { RegistrationSteps } from '@/config/enums.js'
import type { FlowParams } from '@/types/flows.js'
import type { Flow } from '@/types/interfaces.js'

@injectable()
export class RegistrationFlow implements Flow {
  constructor(
    @inject(RegistrationCommandFactory) private commandFactory: RegistrationCommandFactory,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  //#
  public async handle({ context, phone, message }: FlowParams) {
    this.logger.info('📌 Registration Flow')

    const command = this.commandFactory.createCommand(context.step as RegistrationSteps)
    return await command.execute({ context, phone, message })
  }
}
