import { inject, injectable } from 'tsyringe'

import { FlowKeys } from '@/config/enums.js'
import { StateStorage } from '@/managers/state-storage.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { FlowContext, FlowState } from '@/types/index.js'

@injectable()
export class ContextService {
  private readonly MAX_HISTORY_LENGTH = 10

  constructor(
    @inject(StateStorage) private readonly storage: StateStorage,
    @inject(LoggerProvider) private readonly logger: LoggerProvider,
  ) {}

  public updateContext(phone: string, state: FlowState, context: Partial<FlowContext>): FlowState {
    const previousStep = state.context.step

    const history = [...state.context.history]
    if (context.step && context.step !== previousStep) {
      history.unshift(previousStep)

      if (history.length > this.MAX_HISTORY_LENGTH) {
        history.pop()
      }
    }

    const updatedState = {
      ...state,
      context: {
        ...state.context,
        ...context,
        history,
        data: {
          ...state.context.data,
          ...context.data,
        },
      },
    }

    this.storage.set(phone, updatedState)
    this.logger.debug('Contexto atualizado', updatedState.context)

    return updatedState
  }

  public updateStep(phone: string, state: FlowState, step: string): FlowState {
    const flow = this.extractFlow(step)
    return this.updateContext(phone, state, { flow, step })
  }

  public updateData(phone: string, state: FlowState, data: FlowContext['data']): FlowState {
    return this.updateContext(phone, state, { data })
  }

  public clearData(phone: string, state: FlowState): FlowState {
    const updatedState = {
      ...state,
      context: {
        ...state.context,
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
