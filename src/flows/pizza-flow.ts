import { inject, injectable } from 'tsyringe'

import { FlowStep } from '@/config/enums.js'
import { FlowStateManager } from '@/managers/index.js'
import { orderMenu } from '@/messages/order-menu.js'
import { LoggerService, ProductService } from '@/services/index.js'
import { formatCurrency } from '@/utils/format-currency.js'

import type { FlowActions, FlowHandler, Pizza } from '@/types.js'

@injectable()
export class PizzaFlow implements FlowHandler {
  constructor(
    @inject(FlowStateManager) private flowStateManager: FlowStateManager,
    @inject(ProductService) private productService: ProductService,
    @inject(LoggerService) private logger: LoggerService,
  ) {}

  handle(phone: string, message: string): string[] {
    this.logger.info('🍕 Pizza Flow: %o', { phone, message })
    const { step } = this.flowStateManager.getState(phone)

    const actions: FlowActions = {
      [FlowStep.PIZZA_TYPE]: () => this.handlePizzaType(phone, message),
      [FlowStep.PIZZA_FLAVOR]: () => this.handlePizzaFlavor(phone, message),
      [FlowStep.PIZZA_EDGE]: () => this.handlePizzaEdge(phone, message),
      [FlowStep.PIZZA_QUANTITY]: () => this.handlePizzaQuantity(phone, message),
      [FlowStep.PIZZA_OBSERVATIONS]: () => this.handlePizzaObservations(phone, message),
    }

    return actions[step]?.() || this.handleDefaultAction()
  }

  // ###
  private handlePizzaType(phone: string, message: string): string[] {
    const pizzaType = message === '1' ? 'full' : 'half'
    const pizzas = this.productService.getProducts()

    if (!pizzas?.length) {
      this.flowStateManager.clearState(phone)
      return ['❌ Desculpe, não encontramos sabores disponíveis no momento.']
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.PIZZA_FLAVOR,
      data: {
        pizzaType,
      },
    })

    return [
      pizzaType === 'full'
        ? '🍕 *ESCOLHA O SABOR DA PIZZA:*\n'
        : '🍕 *ESCOLHA O PRIMEIRO SABOR DA PIZZA:*\n',
      //
      ...this.buildPizzaList(pizzas),
      //
      '\n✍️ Digite o número da opção desejada:',
    ]
  }

  //
  private handlePizzaFlavor(phone: string, message: string): string[] {
    const { data } = this.flowStateManager.getState(phone)
    const pizzas = this.productService.getProducts()

    const selectedIndex = Number.parseInt(message) - 1

    if (Number.isNaN(selectedIndex) || !pizzas?.[selectedIndex]) {
      return [
        '❌ *OPÇÃO INVÁLIDA!*',
        'Por favor, digite um número válido da opção desejada.',
        //
        '\n✍️ Digite o número da opção desejada:',
      ]
    }

    const selectedFlavors = [...(data?.selectedFlavors || []), pizzas[selectedIndex]]

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
        ...this.buildPizzaList(pizzas),
        //
        '\n✍️ *Digite o número da opção desejada:*',
      ]
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.PIZZA_EDGE,
      data: {
        selectedFlavors,
      },
    })

    return [
      '🔄 *ESCOLHA A BORDA DA PIZZA:*\n',
      //
      '1 - Tradicional (Grátis)',
      '2 - Catupiry (+R$ 5,00)',
      '3 - Cheddar (+R$ 5,00)',
      '4 - Chocolate (+R$ 7,00)',
      //
      '\n✍️ Digite o número da borda desejada:',
    ]
  }

  //
  private handlePizzaEdge(phoneNumber: string, message: string): string[] {
    const edges = [
      { id: 1, name: 'Tradicional', price: 0 },
      { id: 2, name: 'Catupiry', price: 5.0 },
      { id: 3, name: 'Cheddar', price: 5.0 },
      { id: 4, name: 'Chocolate', price: 7.0 },
    ]

    const edge = edges[+message - 1]

    if (!edge) {
      return [
        '❌ *BORDA INVÁLIDA!*',
        'Por favor, escolha uma opção válida:\n',
        //
        '1 - Tradicional (Grátis)',
        '2 - Catupiry (+R$ 5,00)',
        '3 - Cheddar (+R$ 5,00)',
        '4 - Chocolate (+R$ 7,00)',
        //
        '\n✍️ Digite o número da borda desejada:',
      ]
    }

    this.flowStateManager.updateState(phoneNumber, {
      step: FlowStep.PIZZA_QUANTITY,
      data: {
        edge,
      },
    })

    return ['🔢 Digite a quantidade desejada (1-5):']
  }

  //
  private handlePizzaQuantity(phone: string, message: string) {
    const quantity = Number.parseInt(message)

    if (Number.isNaN(quantity) || quantity < 1 || quantity > 5) {
      return [
        '❌ *QUANTIDADE INVÁLIDA!*',
        'Por favor, digite um número entre 1 e 5.'
      ]
    }

    this.flowStateManager.updateState(phone, {
      step: FlowStep.PIZZA_EDGE,
      data: {
        quantity,
      },
    })

    return [
      '✍️ Deseja adicionar alguma observação? (opcional)',
      '> Exemplo: retirar cebola, mais queijo, etc.\n',
      '0 - Não desejo adicionar observações',
    ]
  }

  //
  private handlePizzaObservations(phone: string, message: string) {
    const { data } = this.flowStateManager.getState(phone)
    const observations = message === '0' ? undefined : message

    this.flowStateManager.updateState(phone, {
      step: FlowStep.ORDER,
    })

    return [
      '✅ Pizza adicionada ao carrinho com sucesso!\n',
      //
      ...orderMenu,
    ]
  }

  // ###
  private handleDefaultAction() {
    return ['❌ Ocorreu um erro no fluxo. Por favor, tente novamente.']
  }

  // ###
  private buildPizzaList(pizzas: Pizza[]): string[] {
    return pizzas.map((pizza, index) => {
      const ingredients = pizza.ingredients || 'sem ingredientes'
      return `${index + 1} - ${pizza.name} (${formatCurrency(pizza.price)}) - _${ingredients}_`
    })
  }
}
