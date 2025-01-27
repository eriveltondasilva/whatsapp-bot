import { inject, injectable } from 'tsyringe'

import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { LoggerService } from '@/services/index.js'

import { FlowStep } from '@/config/enums.js'
import type { FlowHandler } from '@/types.js'
import { PizzaFlow } from './pizza-flow.js'

@injectable()
export class OrderFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(PizzaFlow) private pizzaFlow: PizzaFlow,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  handle(phoneNumber: string, message: string): string[] {
    this.logger.info('👋 Order Flow: %o', { phoneNumber, message })

    const actions: Record<string, () => string[]> = {
      1: () => this.handlePizzaSelection(phoneNumber, message),
      2: () => this.handlePizzaSelection(phoneNumber, message),
      3: () => this.handleDrinkSelection(phoneNumber, message),
      4: () => this.finalizeOrder(phoneNumber),
      0: () => this.exitFlow(phoneNumber),
    }

    return actions[message]?.() || this.handleDefault()
  }

  // ###
  private handlePizzaSelection(phoneNumber: string, message: string) {
    this.flowStateManager.updateState(phoneNumber, {
      step: FlowStep.PIZZA_TYPE,
    })

    return this.pizzaFlow.handle(phoneNumber, message)
  }

  private handleDrinkSelection(phoneNumber: string, message: string) {
    return ['🍕 Order Flow: select drink']
  }

  private finalizeOrder(phoneNumber: string) {
    return ['🍕 Order Flow: finalize order']
  }

  private exitFlow(phoneNumber: string) {
    this.flowStateManager.clearState(phoneNumber)
    return [
      '✨ Obrigado por utilizar nossos serviços!',
      'Se precisar de algo, estamos aqui para ajudar.',
      '👋 Até a próxima!',
    ]
  }

  private handleDefault() {
    return [
      '❌ OPÇÃO INVÁLIDA:\n',
      //
      '1️⃣ - Pizza inteira 🍕',
      '2️⃣ - Pizza dois sabores 🍕🍕',
      '3️⃣ - Bebidas 🍺',
      '4️⃣ - Finalizar pedido 🛒',
      '0️⃣ - Cancelar pedido ❌',
      //
      '\n✍🏻 *Digite o número da opção desejada:*',
    ]
  }
}
