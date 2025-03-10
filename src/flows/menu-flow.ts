import { inject, injectable } from 'tsyringe'

import { FlowStep, MenuOption } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { LoggerProvider } from '@/providers/@index.js'
import { mainMenu, orderMenu } from '@/templates/@index.js'
import { createResponse } from '@/utils/create-response.js'

import type { FlowActions, FlowHandler, FlowHandlerProps } from '@/types/index.js'

@injectable()
export class MenuFlow implements FlowHandler {
  private readonly invalidOptionMessage = [
    '🚧 Esta funcionalidade está em desenvolvimento.',
    'Por favor, aguarde novidades!',
  ]

  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  // ###
  public handle({ phone, message }: FlowHandlerProps) {
    this.logger.info('👋 Main Menu Flow', { phone, message })

    const actions: FlowActions<MenuOption> = {
      [MenuOption.ORDER]: () => this.showOrderMenu(phone),
      [MenuOption.EXIT]: () => this.exitFlow(phone),
    }

    return actions[message as MenuOption]?.() || this.handleInvalidOption()
  }

  // ###
  private showOrderMenu(phone: string) {
    this.stateManager.updateStep(phone, FlowStep.ORDER)

    return createResponse(...orderMenu)
  }

  private tackOrder(phone: string) {
    return createResponse(...this.invalidOptionMessage)
  }

  private showOrderHistory(phone: string) {
    return createResponse(...this.invalidOptionMessage)
  }

  private updateProfile(phone: string) {
    return createResponse(...this.invalidOptionMessage)
  }

  private contactSupport(phone: string) {
    return createResponse(...this.invalidOptionMessage)
  }

  private exitFlow(phone: string) {
    this.stateManager.resetState(phone)
    return createResponse(
      '✨ Obrigado por utilizar nossos serviços!',
      'Se precisar de algo, estamos aqui para ajudar.\n',
      '👋 Até a próxima!',
    )
  }

  // ###
  private handleInvalidOption() {
    return createResponse(
      '❌ OPÇÃO INVÁLIDA:\n',
      //
      ...mainMenu,
    )
  }
}
