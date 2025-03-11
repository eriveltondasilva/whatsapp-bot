import { inject, injectable } from 'tsyringe'

import { DrinkStep, FlowKeys } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { LoggerProvider } from '@/providers/@index.js'
import { DrinkRepository } from '@/repositories/@index.js'
import { buildDrinkList, orderMenu } from '@/templates/@index.js'
import { createResponse, createResponseWithList, isValidQuantity } from '@/utils/@index.js'

import type { FlowActions, FlowHandler, FlowHandlerProps } from '@/types/index.js'

@injectable()
export class DrinkFlow implements FlowHandler {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(DrinkRepository) private drinkRepository: DrinkRepository,
    @inject(LoggerProvider) private logger: LoggerProvider,
  ) {}

  // ###
  handle({ state, phone, message }: FlowHandlerProps) {
    this.logger.info('📌 Drink Flow')

    const actions: FlowActions<DrinkStep> = {
      [DrinkStep.MENU]: () => this.handleDrinkList(phone, message),
      [DrinkStep.TYPE]: () => this.handleDrinkType(phone, message),
      [DrinkStep.QUANTITY]: () => this.handleDrinkQuantity(phone, message),
    }

    return actions[state.context.step as DrinkStep]()
  }

  // ###
  private async handleDrinkList(phone: string, message: string) {
    const drinks = await this.drinkRepository.getAllDrinks()

    if (!drinks?.length) {
      this.stateManager.resetState(phone)
      return createResponse('❌ Desculpe, não encontramos bebidas disponíveis no momento.')
    }

    this.stateManager.updateStep(phone, DrinkStep.TYPE)

    const title = '🍹 *ESCOLHA SUA BEBIDA*'
    const description = '\n> Por favor, aperte no botão abaixo para escolher a sua bebida.'

    return createResponse(title, description, ...buildDrinkList(drinks))
  }

  private async handleDrinkType(phone: string, message: string) {
    const drinks = await this.drinkRepository.getAllDrinks()
    const selectedIndex = Number.parseInt(message, 10) - 1

    if (Number.isNaN(selectedIndex) || !drinks?.[selectedIndex]) {
      const title = '❌ *OPÇÃO INVÁLIDA!*'
      const description = 'Selecione uma opção válida.'

      return createResponseWithList(title, description, ...buildDrinkList(drinks))
    }

    const selectedDrink = drinks[selectedIndex]

    this.stateManager.updateStep(phone, DrinkStep.QUANTITY)
    this.stateManager.updateContextData(phone, { selectedDrink })

    return createResponse('🔢 Digite a quantidade desejada (1-5):')
  }

  private handleDrinkQuantity(phone: string, message: string) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return createResponse('❌ *QUANTIDADE INVÁLIDA!*', 'Por favor, digite um número entre 1 e 5.')
    }

    this.stateManager.updateStep(phone, FlowKeys.ORDER)

    return createResponse('✅ Bebida adicionada ao carrinho com sucesso!\n', ...orderMenu)
  }
}
