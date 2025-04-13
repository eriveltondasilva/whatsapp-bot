import { inject, injectable } from 'tsyringe'

import { StateManager } from '@/core/state-manager.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { Customer } from '@/types/entities.js'
import type { FlowState } from '@/types/flows.js'

@injectable()
export class CustomerService {
  constructor(
    @inject(StateManager) private readonly stateManager: StateManager,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  public updateCustomer(
    phone: string,
    currentState: FlowState,
    customerUpdates: Partial<Customer>,
  ): FlowState {
    const updatedState = {
      ...currentState,
      customer: {
        ...currentState.customer,
        ...customerUpdates,
      },
    }

    this.stateManager.set(phone, updatedState)
    this.logger.debug('Dados do cliente atualizados', updatedState.customer)

    return updatedState
  }
}
