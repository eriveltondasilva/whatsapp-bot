import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/text-response.builder.js'
import { FlowKeys, MenuOptions } from '@/config/enums.js'
import { StateFacade } from '@/managers/state.facade.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { mainMenu, orderMenu } from '@/templates/@index.js'

import type { FlowActions, FlowHandle, IFlowHandler } from '@/types/index.js'

@injectable()
export class MainMenuFlow implements IFlowHandler {
  private readonly inProgressMessage = [
    '🚧 Esta funcionalidade está em desenvolvimento.',
    'Por favor, aguarde novidades!',
  ].join(',')

  constructor(
    @inject(TextResponseBuilder) private responseBuilder: TextResponseBuilder,
    //
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(StateFacade) private stateManager: StateFacade,
  ) {}

  //#
  public handle({ phone, message }: FlowHandle) {
    this.logger.info('📌 Main Menu Flow')

    const actionMap: FlowActions<MenuOptions> = {
      [MenuOptions.ORDER]: () => this.showOrderMenu(phone),
      [MenuOptions.EXIT]: () => this.exitFlow(phone),
    } as const

    const action = actionMap[message as MenuOptions]
    return action ? action() : this.handleInvalidOption()
  }

  //#
  private showOrderMenu(phone: string) {
    this.stateManager.updateStep(phone, FlowKeys.ORDER)
    return this.responseBuilder.addMenu(orderMenu).build()
  }

  // private tackOrder(phone: string) {
  //   return this.responseBuilder.addText(this.inProgressMessage).build()
  // }

  // private showOrderHistory(phone: string) {
  //   return this.responseBuilder.addText(this.inProgressMessage).build()
  // }

  // private updateProfile(phone: string) {
  //   return this.responseBuilder.addText(this.inProgressMessage).build()
  // }

  // private contactSupport(phone: string) {
  //   return this.responseBuilder.addText(this.inProgressMessage).build()
  // }

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
