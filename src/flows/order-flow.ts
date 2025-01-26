import { inject, injectable } from 'tsyringe'

import { FlowStateManager } from '@/managers/flow-state-manager.js'
import {
  LoggerService,
  OrderService,
  ProductService,
} from '@/services/index.js'

import type { FlowHandler } from '@/types.js'

@injectable()
export class OrderFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(ProductService) private productService: ProductService,
    @inject(OrderService) private orderService: OrderService,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  handle(phoneNumber: string, message: string) {
    this.logger.info('👋 Order Flow: %o', { phoneNumber, message })

    switch (message) {
      case '1':
        return this.handlePizzaSelection(phoneNumber, message)

      default:
        return ['Estado inválido para pedido']
    }
  }

  // ###
  private handlePizzaSelection(phoneNumber: string, message: string) {
    return [
      '🚧 Esta funcionalidade está em desenvolvimento. Por favor, aguarde novidades!',
    ]
  }
}
