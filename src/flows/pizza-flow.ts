import type { Crust, Flavor } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/index.js'
import { orderMenu } from '@/messages/order-menu.js'
import { CrustRepository, FlavorRepository } from '@/repositories/index.js'
import { LoggerService } from '@/services/index.js'
import { formatCurrency, isValidQuantity } from '@/utils/index.js'

import type { FlowActions, FlowHandler } from '@/types.js'

@injectable()
export class PizzaFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(FlavorRepository) private flavorRepo: FlavorRepository,
    @inject(CrustRepository) private crustRepo: CrustRepository,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  handle(phone: string, message: string) {
    this.logger.info('🍕 Pizza Flow: %o', { phone, message })
    const { step } = this.flowStateManager.getState(phone)

    const actions: FlowActions = {
      [FlowStep.PIZZA_TYPE]: () => this.handlePizzaType(phone, message),
      [FlowStep.PIZZA_FLAVOR]: () => this.handlePizzaFlavor(phone, message),
      [FlowStep.PIZZA_CRUST]: () => this.handlePizzaCrust(phone, message),
      [FlowStep.PIZZA_QUANTITY]: () => this.handlePizzaQuantity(phone, message),
      [FlowStep.PIZZA_NOTES]: () => this.handlePizzaNotes(phone, message),
    }

    return actions[step]?.() || this.handleInvalidOption()
  }

  // ###
  private async handlePizzaType(phone: string, message: string) {
    const pizzaType = message === '1' ? 'full' : 'half'
    const flavors = await this.flavorRepo.getAllFlavors()

    if (!flavors?.length) {
      this.flowStateManager.clearState(phone)
      return ['❌ Desculpe, não encontramos sabores disponíveis no momento.']
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.PIZZA_FLAVOR,
      data: {
        pizzaType,
      },
    })

    const title =
      pizzaType === 'full'
        ? '🍕 *ESCOLHA O SABOR DA PIZZA:*'
        : '🍕 *ESCOLHA O PRIMEIRO SABOR DA PIZZA:*'

    const description =
      '> Para escolher sua pizza, toque no botão "Clique Aqui" abaixo para abrir nosso cardápio.'

    return [
      'list',
      title,
      description,
      //
      ...this.buildFlavorList(flavors),
    ]
  }

  private async handlePizzaFlavor(phone: string, message: string) {
    const { data } = this.flowStateManager.getState(phone)
    const flavors = await this.flavorRepo.getAllFlavors()
    const crusts = await this.crustRepo.getAllCrusts()

    const selectedIndex = Number.parseInt(message) - 1

    if (Number.isNaN(selectedIndex) || !flavors?.[selectedIndex]) {
      return [
        '❌ *OPÇÃO INVÁLIDA!*',
        'Por favor, digite um número válido da opção desejada.\n',
        //
        '✍️ Digite o número da opção desejada:',
      ]
    }

    const selectedFlavors = [...(data?.selectedFlavors || []), flavors[selectedIndex]]

    if (data?.pizzaType === 'half' && selectedFlavors.length === 1) {
      this.flowStateManager.updateState(phone, {
        step: FlowStep.PIZZA_FLAVOR,
        data: {
          selectedFlavors,
        },
      })

      return [
        '🍕 *ESCOLHA O SEGUNDO SABOR DA PIZZA:*\n',
        //
        ...this.buildFlavorList(flavors),
        //
        '\n✍️ *Digite o número da opção desejada:*',
      ]
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.PIZZA_CRUST,
      data: {
        selectedFlavors,
      },
    })

    return [
      '🔄 *ESCOLHA A BORDA DA PIZZA:*\n',
      //
      ...this.buildCrustList(crusts),
      //
      '\n✍️ Digite o número da borda desejada:',
    ]
  }

  private async handlePizzaCrust(phoneNumber: string, message: string) {
    const crusts = await this.crustRepo.getAllCrusts()
    const selectedCrust = crusts[+message - 1]

    if (!selectedCrust) {
      return [
        '❌ *BORDA INVÁLIDA!*',
        'Por favor, escolha uma opção válida:\n',
        //
        ...this.buildCrustList(crusts),
        //
        '\n✍️ Digite o número da borda desejada:',
      ]
    }

    this.flowStateManager.updateState(phoneNumber, {
      step: FlowStep.PIZZA_QUANTITY,
      data: {
        selectedCrust,
      },
    })

    return ['🔢 Digite a quantidade desejada (1-5):']
  }

  private handlePizzaQuantity(phone: string, message: string) {
    const quantity = Number.parseInt(message)

    if (!isValidQuantity(quantity)) {
      return ['❌ *QUANTIDADE INVÁLIDA!*', 'Por favor, digite um número entre 1 e 5.']
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.PIZZA_NOTES,
      data: {
        quantity,
      },
    })

    return [
      '✍️ Deseja adicionar alguma observação?',
      '> Exemplo: retirar cebola, mais queijo, etc.\n',
      '0 - Não desejo adicionar observações',
    ]
  }

  private handlePizzaNotes(phone: string, message: string) {
    const notes = message === '0' ? undefined : message

    this.flowStateManager.updateState(phone, {
      step: FlowStep.ORDER,
      data: {
        notes,
      },
    })

    return [
      '✅ Pizza adicionada ao carrinho com sucesso!\n',
      //
      ...orderMenu,
    ]
  }

  // ###
  private handleInvalidOption() {
    return ['❌ Ocorreu um erro no fluxo. Por favor, tente novamente.']
  }

  // ###
  // private buildFlavorList(flavors: Flavor[]) {
  //   return flavors.map((flavor, index) => {
  //     const ingredients = flavor.ingredients || 'sem ingredientes'
  //     return [
  //       `${index + 1} - *${flavor.name}* (${formatCurrency(Number(flavor.price))})`,
  //       `_${ingredients}_`,
  //     ].join('\n')
  //   })
  // }

  private buildFlavorList(flavors: Flavor[]): string[] {
    return flavors.map(({ id, name, ingredients, price, category }) => {
      const flavorPrice = formatCurrency(Number(price))

      return `${id}::${id} - ${name} (${flavorPrice})::${ingredients}::${category}`
      // 'rowId :: rowTitle :: rowDescription :: category'
    })
  }

  private buildCrustList(crusts: Crust[]) {
    return crusts.map((crust, index) => {
      const crustPrice = Number(crust.price) === 0 ? 'grátis' : formatCurrency(Number(crust.price))
      return `${index + 1} - ${crust.name} (${crustPrice})`
    })
  }
}
