import { inject, injectable } from 'tsyringe'

import { FlowKeys } from '@/config/enums.js'
import { StateStorage } from '@/core/state-storage.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { FlowContext, FlowState } from '@/types/index.js'

@injectable()
export class ContextService {
  private readonly MAX_HISTORY_LENGTH = 10

  constructor(
    @inject(StateStorage) private readonly storage: StateStorage,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  public updateContext(
    phone: string,
    currentState: FlowState,
    contextUpdates: Partial<FlowContext>,
  ): FlowState {
    const previousStep = currentState.context.step

    const history = [...currentState.context.history]
    if (contextUpdates.step && contextUpdates.step !== previousStep) {
      history.unshift(previousStep)

      if (history.length > this.MAX_HISTORY_LENGTH) {
        history.pop()
      }
    }

    const updatedState = {
      ...currentState,
      context: {
        ...currentState.context,
        ...contextUpdates,
        history,
        data: {
          ...currentState.context.data,
          ...contextUpdates.data,
        },
      },
    }

    this.storage.set(phone, updatedState)
    this.logger.debug('Contexto atualizado', updatedState.context)

    return updatedState
  }

  public updateStep(phone: string, currentState: FlowState, newStep: string): FlowState {
    const newFlow = this.extractFlow(newStep)
    return this.updateContext(phone, currentState, { flow: newFlow, step: newStep })
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
  private extractFlow(step: string): FlowKeys {
    const flowName = step.includes('::') ? step.split('::')[0] : step
    const isValidFlow = Object.values(FlowKeys).includes(flowName as FlowKeys)

    if (!isValidFlow) {
      this.logger.error(`Fluxo inválido: ${flowName}`)
      throw new Error(`Fluxo inválido: ${flowName}`)
    }

    return flowName as FlowKeys
  }
}
