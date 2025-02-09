import { inject, injectable } from 'tsyringe'

import { FlowStateManager } from '@/managers/flow-state-manager.js'
import { LoggerService } from '@/services/logger-service.js'
import { FlowStep } from '@/config/enums.js'

import type { FlowHandler, FlowActions } from '@/types.js'

@injectable()
export class DrinkFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  handle(phone: string, message: string): string[] {
    this.logger.info('🍹 Drink Flow: %o', { phone, message })
    const { step } = this.flowStateManager.getState(phone)

    const actions: FlowActions = {
      [FlowStep.DRINK_TYPE]: () => this.handleDrinkType(phone, message),
      [FlowStep.DRINK_QUANTITY]: () => this.handleDrinkQuantity(phone, message),
    }

    return actions[step]?.() || this.handleDefaultAction()
  }

  // ###
  private handleDrinkType(phone: string, message: string) {
    this.flowStateManager.updateState(phone, { step: FlowStep.DRINK_QUANTITY })

    return ['��� Drink Flow: select drink type']
  }

  private handleDrinkQuantity(phone: string, message: string) {
    this.flowStateManager.updateState(phone, { step: FlowStep.ORDER })

    return ['��� Drink Flow: select drink quantity']
  }

  // ###
  private handleDefaultAction() {
    return ['❌ Ocorreu um erro no fluxo da conversa. Por favor, tente novamente.']
  }
}
