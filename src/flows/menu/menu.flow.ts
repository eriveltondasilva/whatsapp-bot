import { injectable } from 'tsyringe'

import { FLOWS, MENU_OPTIONS } from '@/config/enums.js'
import { mainMenu, orderMenu } from '@/templates/menus.js'
import { BaseFlow } from '../base.flow.js'

import type { FlowParams, MenuActionMap } from '@/types/flows.js'

@injectable()
export class MenuFlow extends BaseFlow {
  private readonly inProgressMessage = [
    '🚧 Esta funcionalidade está em desenvolvimento.',
    'Por favor, aguarde novidades!',
  ]

  //#
  public handle({ phone, message }: FlowParams) {
    const actionMap: MenuActionMap = {
      [MENU_OPTIONS.ORDER_MENU]: () => this.showOrderMenu(phone),
      [MENU_OPTIONS.ORDER_TRACKING]: () => this.showOrderTracking(),
      [MENU_OPTIONS.ORDER_HISTORY]: () => this.showOrderHistory(),
      [MENU_OPTIONS.PROFILE]: () => this.updateProfile(),
      [MENU_OPTIONS.SUPPORT]: () => this.contactSupport(),
      [MENU_OPTIONS.EXIT]: () => this.exitFlow(phone),
    } as const

    const action = actionMap[message as MENU_OPTIONS]
    return action ? action() : this.handleInvalidOption()
  }

  //#
  private showOrderMenu(phone: string) {
    this.state.updateFlow(phone, FLOWS.ORDER)
    return this.responseBuilder.addMenu(orderMenu).build()
  }

  private showOrderTracking() {
    return this.responseBuilder.addText(...this.inProgressMessage).build()
  }

  private showOrderHistory() {
    return this.responseBuilder.addText(...this.inProgressMessage).build()
  }

  private updateProfile() {
    return this.responseBuilder.addText(...this.inProgressMessage).build()
  }

  private contactSupport() {
    return this.responseBuilder.addText(...this.inProgressMessage).build()
  }

  private exitFlow(phone: string) {
    this.state.resetState(phone)
    return this.responseBuilder
      .addText(
        'Obrigado por utilizar nossos serviços!',
        'Se precisar de algo, estamos aqui para oferecer o melhor atendimento.',
      )
      .addText('👋 Até a próxima...')
      .build()
  }

  //#
  private handleInvalidOption() {
    return this.responseBuilder
      .addBold('❌ OPÇÃO INVÁLIDA')
      .addText('Por favor, escolha uma das opções disponíveis abaixo.')
      .addEmptyLine()
      .addMenu(mainMenu)
      .build()
  }
}
