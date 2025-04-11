import { inject, injectable } from 'tsyringe'

import { StateManager } from '@/core/state-manager.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { Flows } from '@/config/enums.js'
import type { FlowContext, FlowState } from '@/types/flows.js'

@injectable()
export class ContextService {
  private readonly MAX_HISTORY_LENGTH = 10

  constructor(
    @inject(StateManager) private readonly storage: StateManager,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  public updateContext(
    phone: string,
    currentState: FlowState,
    contextUpdates: Partial<FlowContext>,
  ): FlowState {
    const history = this.updateHistory(currentState, contextUpdates)

    const updatedState = {
      ...currentState,
      context: {
        ...currentState.context,
        ...contextUpdates,
        history,
        data: {
          ...currentState.context.data,
          ...(contextUpdates.data || {}),
        },
      },
    }

    this.storage.set(phone, updatedState)
    this.logger.debug('Contexto atualizado', updatedState.context)

    return updatedState
  }

  public updateFlow(phone: string, currentState: FlowState, flow: Flows): FlowState {
    return this.updateContext(phone, currentState, { flow })
  }

  public updateData(phone: string, currentState: FlowState, data: FlowContext['data']): FlowState {
    return this.updateContext(phone, currentState, { data })
  }

  public clearData(phone: string, currentState: FlowState): FlowState {
    const updatedState = {
      ...currentState,
      context: {
        ...currentState.context,
        data: {},
      },
    }

    this.storage.set(phone, updatedState)
    this.logger.debug('Dados do contexto limpos', updatedState.context)

    return updatedState
  }

  //#
  private updateHistory(currentState: FlowState, contextUpdates: Partial<FlowContext>): string[] {
    const { flow: previousFlow, history: currentHistory } = currentState.context
    const { flow: newFlow } = contextUpdates

    if (!newFlow || newFlow === previousFlow) return currentHistory

    const newHistory = [previousFlow, ...currentHistory]
    return newHistory.slice(0, this.MAX_HISTORY_LENGTH)
  }
}
