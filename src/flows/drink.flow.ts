import { inject, injectable } from 'tsyringe'

import { ListResponseBuilder, TextResponseBuilder } from '@/builder/@index.js'
import { DrinkStep, FlowKeys } from '@/config/enums.js'
import { StateManager } from '@/managers/@index.js'
import { LoggerProvider } from '@/providers/@index.js'
import { DrinkRepository } from '@/repositories/@index.js'
import { buildDrinkList, orderMenu } from '@/templates/@index.js'
import { isValidQuantity } from '@/utils/@index.js'

import type { FlowActions, FlowHandlerProps, IFlowHandler } from '@/types/index.js'

@injectable()
export class DrinkFlow implements IFlowHandler {
  constructor(
    @inject(StateManager) private stateManager: StateManager,
    @inject(DrinkRepository) private drinkRepository: DrinkRepository,
    @inject(LoggerProvider) private logger: LoggerProvider,
    @inject(TextResponseBuilder) private responseBuilder: TextResponseBuilder,
    @inject(ListResponseBuilder) private listResponseBuilder: ListResponseBuilder,
  ) {}

  // ###
  handle({ state, phone, message }: FlowHandlerProps) {
    this.logger.debug('📌 Drink Flow')

    const actions: FlowActions<DrinkStep> = {
      [DrinkStep.MENU]: () => this.handleDrinkMenu(phone, message),
      [DrinkStep.TYPE]: () => this.handleDrinkType(phone, message),
      [DrinkStep.QUANTITY]: () => this.handleDrinkQuantity(phone, message),
    }

    return actions[state.context.step as DrinkStep]()
  }

  // ###
  private async handleDrinkMenu(phone: string, message: string) {
    const drinks = await this.drinkRepository.getAllDrinks()

    if (!drinks?.length) {
      this.stateManager.resetState(phone)
      return this.responseBuilder
        .addText('❌ Desculpe, não encontramos bebidas disponíveis no momento.')
        .build()
    }

    this.stateManager.updateStep(phone, DrinkStep.TYPE)

    return this.listResponseBuilder
      .addTitle('🍹 ESCOLHA SUA BEBIDA')
      .addDescription('> Por favor, aperte no botão abaixo para escolher a sua bebida.')
      .addList(buildDrinkList(drinks))
      .build()
  }

  private async handleDrinkType(phone: string, message: string) {
    const drinks = await this.drinkRepository.getAllDrinks()
    const selectedIndex = Number.parseInt(message, 10) - 1

    if (Number.isNaN(selectedIndex) || !drinks?.[selectedIndex]) {
      return this.listResponseBuilder
        .addTitle('❌ OPÇÃO INVÁLIDA!')
        .addDescription('Selecione uma opção válida.')
        .addList(buildDrinkList(drinks))
        .build()
    }

    const selectedDrink = drinks[selectedIndex]

    this.stateManager.updateStep(phone, DrinkStep.QUANTITY)
    this.stateManager.updateContextData(phone, { selectedDrink })

    return this.responseBuilder.addText('🔢 Digite a quantidade desejada (1-5):').build()
  }

  private handleDrinkQuantity(phone: string, message: string) {
    const quantity = Number.parseInt(message, 10)

    if (!isValidQuantity(quantity)) {
      return this.responseBuilder
        .addTitle('❌ QUANTIDADE INVÁLIDA!')
        .addText('Por favor, digite um número entre 1 e 5.')
        .build()
    }

    this.stateManager.updateStep(phone, FlowKeys.ORDER)

    return this.responseBuilder
      .addText('✅ Bebida adicionada ao carrinho com sucesso!')
      .addLineBreak()
      .addMenu(orderMenu)
      .build()
  }
}
