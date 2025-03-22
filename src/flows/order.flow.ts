import { inject, injectable } from 'tsyringe'

import { TextResponseBuilder } from '@/builder/@index.js'
import { DrinkSteps, OrderOptions, PizzaSteps } from '@/config/enums.js'
import { StateManager } from '@/managers/state-manager.js'
import { LoggerProvider } from '@/providers/logger.provider.js'
import { orderMenu } from '@/templates/order-menu.js'

import { DrinkFlow } from './drink.flow.js'
import { PizzaFlow } from './pizza.flow.js'

import type { FlowActions, FlowHandle, IFlowHandler } from '@/types/index.js'

@injectable()
export class OrderFlow implements IFlowHandler {
  constructor(
    @inject(DrinkFlow) private drinkFlow: DrinkFlow,
    @inject(PizzaFlow) private pizzaFlow: PizzaFlow,
    @inject(StateManager) private stateManager: StateManager,
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(TextResponseBuilder) private responseBuilder: TextResponseBuilder,
  ) {}

  //#
  public handle({ phone, message }: FlowHandle) {
    this.logger.info('📌 Order Flow')

    const actions: FlowActions<OrderOptions> = {
      [OrderOptions.ONE_PIZZA]: () => this.handleOneFlavorSelection(phone, message),
      [OrderOptions.TWO_PIZZA]: () => this.handleTwoFlavorSelection(phone, message),
      [OrderOptions.DRINK]: () => this.handleDrinkSelection(phone, message),
      [OrderOptions.COMPLETE]: () => this.finalizeOrder(phone),
      [OrderOptions.CANCEL]: () => this.cancelOrder(phone),
    }

    return actions[message as OrderOptions]() || this.handleInvalidOption()
  }

  // ###
  private handleOneFlavorSelection(phone: string, message: string) {
    const { context } = this.stateManager.updateStep(phone, PizzaSteps.ONE_FLAVOR)
    return this.pizzaFlow.handle({ context, phone, message })
  }

  private handleTwoFlavorSelection(phone: string, message: string) {
    const { context } = this.stateManager.updateStep(phone, PizzaSteps.TWO_FLAVOR)
    return this.pizzaFlow.handle({ context, phone, message })
  }

  private handleDrinkSelection(phone: string, message: string) {
    const { context } = this.stateManager.updateStep(phone, DrinkSteps.MENU)
    return this.drinkFlow.handle({ context, phone, message })
  }

  private finalizeOrder(phone: string) {
    return this.responseBuilder.addTitle('🍕 *Pedido Finalizado*').build()
  }

  private cancelOrder(phone: string) {
    this.stateManager.resetState(phone)

    return this.responseBuilder
      .addTitle('🍕 Pedido Cancelado')
      .addText(
        '✨ Obrigado por utilizar nossos serviços!',
        'Se precisar de algo, estamos aqui para ajudar.',
      )
      .addEmptyLine()
      .addText('👋 Até a próxima!')
      .build()
  }

  // ###
  private handleInvalidOption() {
    return this.responseBuilder
      .addTitle('🍕 OPÇÃO INVÁLIDA')
      .addEmptyLine()
      .addMenu(orderMenu)
      .build()
  }
}
