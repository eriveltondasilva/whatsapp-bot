import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { FlowKeys, MenuOptions } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { LoggerProvider } from '@/providers/@index.js'
import { mainMenu, orderMenu } from '@/templates/@index.js'

import type { FlowActions, FlowHandlerProps, IFlowHandler } from '@/types/index.js'

@injectable()
export class MainMenuFlow implements IFlowHandler {
  private readonly inProgressMessage = [
    '🚧 Esta funcionalidade está em desenvolvimento.',
    'Por favor, aguarde novidades!',
  ].join(',')

  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(TextResponseBuilder) private responseBuilder: TextResponseBuilder,
  ) {}

  // ###
  public handle({ phone, message }: FlowHandlerProps) {
    this.logger.info('📌 Main Menu Flow')

    const actions: FlowActions<MenuOptions> = {
      [MenuOptions.ORDER]: () => this.showOrderMenu(phone),
      [MenuOptions.EXIT]: () => this.exitFlow(phone),
    }

    return actions[message as MenuOptions]() || this.handleInvalidOption()
  }

  // ###
  private showOrderMenu(phone: string) {
    this.stateManager.updateStep(phone, FlowKeys.ORDER)
    return this.responseBuilder.addMenu(orderMenu).build()
  }

  private tackOrder(phone: string) {
    return this.responseBuilder.addText(this.inProgressMessage).build()
  }

  private showOrderHistory(phone: string) {
    return this.responseBuilder.addText(this.inProgressMessage).build()
  }

  private updateProfile(phone: string) {
    return this.responseBuilder.addText(this.inProgressMessage).build()
  }

  private contactSupport(phone: string) {
    return this.responseBuilder.addText(this.inProgressMessage).build()
  }

  private exitFlow(phone: string) {
    this.stateManager.resetState(phone)

    return this.responseBuilder
      .addText(
        '✨ Obrigado por utilizar nossos serviços!',
        'Se precisar de algo, estamos aqui para ajudar.',
      )
      .addText('👋 Até a próxima!')
      .build()
  }

  // ###
  private handleInvalidOption() {
    return this.responseBuilder
      .addTitle('❌ OPÇÃO INVÁLIDA')
      .addEmptyLine()
      .addMenu(mainMenu)
      .build()
  }
}
