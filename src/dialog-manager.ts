import { container, inject, injectable } from 'tsyringe'

import { FlowStep } from './config/enums.js'
import { MenuFlow } from './flows/menu-flow.js'
import { OrderFlow } from './flows/order-flow.js'
import { PaymentFlow } from './flows/payment-flow.js'
import { RegistrationFlow } from './flows/registration-flow.js'
import { CustomerService } from './services/customer-service.js'
import { FlowStateManager } from './states/flow-state-manager.js'

import type { FlowState } from './types/index.js'

type FlowHandler = {
  handle(phoneNumber: string, message: string, state: any): string
}

@injectable()
export class DialogManager {
  private handlers: Map<string, FlowHandler> = new Map()

  constructor(
    @inject(FlowStateManager) private flowState: FlowStateManager,
    @inject(CustomerService) private customer: CustomerService,
  ) {
    this.handlers.set('menu', container.resolve(MenuFlow))
    this.handlers.set('order', container.resolve(OrderFlow))
    this.handlers.set('payment', container.resolve(PaymentFlow))
    this.handlers.set('registration', container.resolve(RegistrationFlow))
  }

  // ###
  async handleMessage(phoneNumber: string, message: string) {
    const state = this.flowState.getState(phoneNumber)
    const customer = this.customer.getCustomer(phoneNumber)

    // TODO: remover
    console.log('\nDialogManager.handleMessage')
    console.log('message:', message)
    console.log('state:', state)
    console.log('customer:', customer)

    if (!customer && state.step === FlowStep.INITIAL) {
      this.flowState.setState(phoneNumber, FlowStep.AWAITING_NAME)
      return 'Por favor, digite seu nome:'
    }

    return this.routeMessage(phoneNumber, message, state)
  }

  private routeMessage(phoneNumber: string, message: string, state: FlowState) {
    const handlerType = this.getHandlerType(state.step)
    const handler = this.handlers.get(handlerType)

    return handler?.handle(phoneNumber, message, state)
  }

  private getHandlerType(step: FlowStep) {
    if (step.startsWith('awaiting_')) return 'registration'
    // if (step.includes('selecting_')) return 'order'
    // if (step.includes('payment') || step.includes('change')) return 'payment'

    return 'menu'
  }
}
