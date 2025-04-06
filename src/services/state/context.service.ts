import { inject, injectable } from 'tsyringe'

import { FlowKeys } from '@/config/enums.js'
import { StateStorage } from '@/core/state-storage.js'
import { LoggerProvider } from '@/providers/logger.provider.js'

import type { FlowContext, FlowState } from '@/types/flows.js'

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
    const newStep = contextUpdates.step

    if (newStep && newStep !== previousStep) {
      contextUpdates.flow = this.extractFlow(newStep)
    }

    const history = this.updateStepHistory(currentState, contextUpdates)

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

  public updateStep(phone: string, currentState: FlowState, step: string): FlowState {
    return this.updateContext(phone, currentState, { step })
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
    const [flowName] = step.split('::', 1)
    const isValidFlow = Object.values(FlowKeys).includes(flowName as FlowKeys)

    if (!isValidFlow) {
      const errorMsg = `Fluxo inválido: ${flowName}`
      this.logger.error(errorMsg)
      throw new Error(errorMsg)
    }

    return flowName as FlowKeys
  }

  private updateStepHistory(
    currentState: FlowState,
    contextUpdates: Partial<FlowContext>,
  ): string[] {
    const { step: previousStep, history: currentHistory } = currentState.context
    const { step: newStep } = contextUpdates

    if (!newStep || newStep === previousStep) return currentHistory

    const newHistory = [previousStep, ...currentHistory]
    return newHistory.slice(0, this.MAX_HISTORY_LENGTH)
  }
}
