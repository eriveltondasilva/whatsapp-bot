// services/state/CustomerManager.ts
import { inject, injectable } from 'tsyringe'

import { StateManager } from '@/core/state-manager.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { Customer } from '@/types/entities.js'
import type { FlowState } from '@/types/flows.js'

@injectable()
export class CustomerService {
  constructor(
    @inject(StateManager) private readonly storage: StateManager,
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

    this.storage.set(phone, updatedState)
    this.logger.debug('Dados do cliente atualizados', updatedState.customer)

    return updatedState
  }
}
