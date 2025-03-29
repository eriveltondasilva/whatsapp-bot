// services/state/CustomerManager.ts
import { inject, injectable } from 'tsyringe'

import { StateStorage } from '@/managers/state-storage.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { Customer, FlowState } from '@/types/index.js'

@injectable()
export class CustomerService {
  constructor(
    @inject(StateStorage) private readonly storage: StateStorage,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  public updateCustomer(phone: string, state: FlowState, customer: Partial<Customer>): FlowState {
    const updatedState = {
      ...state,
      customer: {
        ...state.customer,
        ...customer,
      },
    }

    this.storage.set(phone, updatedState)
    this.logger.debug('Dados do cliente atualizados', updatedState.customer)

    return updatedState
  }
}
