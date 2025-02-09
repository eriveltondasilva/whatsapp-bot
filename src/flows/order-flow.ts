import { inject, injectable } from 'tsyringe'

import { FlowStateManager } from '@/managers/index.js'
import { FlowStep } from '@/config/enums.js'
import { LoggerService } from '@/services/index.js'
import { DrinkFlow } from './drink-flow.js'
import { PizzaFlow } from './pizza-flow.js'

import type { FlowActions, FlowHandler } from '@/types.js'

@injectable()
export class OrderFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(DrinkFlow) private drinkFlow: DrinkFlow,
    @inject(PizzaFlow) private pizzaFlow: PizzaFlow,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  handle(phone: string, message: string): string[] {
    this.logger.info('👋 Order Flow: %o', { phone, message })

    const actions: FlowActions = {
      1: () => this.handlePizzaSelection(phone, message),
      2: () => this.handlePizzaSelection(phone, message),
      3: () => this.handleDrinkSelection(phone, message),
      4: () => this.finalizeOrder(phone),
      0: () => this.cancelOrder(phone),
    }

    return actions[message]?.() || this.handleDefaultAction()
  }

  // ###
  private handlePizzaSelection(phone: string, message: string) {
    this.flowStateManager.updateState(phone, { step: FlowStep.PIZZA_TYPE })

    return this.pizzaFlow.handle(phone, message)
  }

  private handleDrinkSelection(phone: string, message: string) {
    this.flowStateManager.updateState(phone, { step: FlowStep.DRINK_TYPE })

    return this.drinkFlow.handle(phone, message)
  }

  private finalizeOrder(phone: string) {
    return ['🍕 Order Flow: finalize order']
  }

  private cancelOrder(phone: string) {
    this.flowStateManager.clearState(phone)
    return [
      '✨ Obrigado por utilizar nossos serviços!',
      'Se precisar de algo, estamos aqui para ajudar.',
      '👋 Até a próxima!',
    ]
  }

  // ###
  private handleDefaultAction() {
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
