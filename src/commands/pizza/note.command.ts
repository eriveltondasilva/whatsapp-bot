import type { Prisma } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { TextBuilder } from '@/builder/response/text.builder.js'
import { PizzaSteps } from '@/config/enums.js'
import { StateFacade } from '@/core/state.facade.js'
import { formatCurrency } from '@/utils/format-currency.js'

import type { CommandParams, ICommand } from '@/types/index.js'
import type { ContextData } from './type.js'

@injectable()
export class NoteCommand implements ICommand {
  constructor(
    @inject(TextBuilder) private readonly textResponseBuilder: TextBuilder,
    @inject(StateFacade) private readonly state: StateFacade,
  ) {}

  //#
  public async execute({ phone, message, context }: CommandParams) {
    const { selectedFlavors, selectedCrust, quantity } = context.data as ContextData

    if (!selectedFlavors?.length || !selectedCrust || !quantity || quantity < 1) {
      this.state.resetState(phone)
      return this.textResponseBuilder.addText('❌ Não foi possível processar seu pedido.').build()
    }

    const note = message === '0' ? undefined : message

    this.state.updateContext(phone, {
      data: { note },
      step: PizzaSteps.CONFIRM,
    })

    const flavorNames = this.getFlavorNames(selectedFlavors)
    const crustPrice = Number(selectedCrust.price)
    const pizzaPrice = this.calculateAverageFlavorsPrice(selectedFlavors)
    const unitPrice = pizzaPrice + crustPrice
    const total = unitPrice * quantity

    return this.textResponseBuilder
      .addMono()
      .addText('# RESUMO DO PEDIDO')
      .addLine()
      .addText('Sabor:', flavorNames, `(${formatCurrency(pizzaPrice)})`)
      .addText('Borda:', selectedCrust.name, `(${formatCurrency(crustPrice)})`)
      .addEmptyLine()
      .addText('Quantidade:', quantity.toString())
      .addText('Preço Unit.:', formatCurrency(unitPrice))
      .addText('Total:', formatCurrency(total))
      .addEmptyLine()
      .addText('Observação:', note || 'nenhuma')
      .addLine()
      .addMono()
      .addEmptyLine()
      .addText('Deseja confirmar seu pedido?')
      .addText('1️⃣ - Confirmar ✅')
      .addText('0️⃣ - Cancelar ❌')
      .build()
  }

  private getFlavorNames(flavors: Prisma.FlavorCreateInput[]) {
    return flavors.map((flavor) => flavor.name).join(' + ')
  }

  private calculateAverageFlavorsPrice(flavors: Prisma.FlavorCreateInput[]) {
    if (!flavors.length) return 0
    const totalPrice = flavors.reduce((acc, flavor) => acc + Number(flavor.price || 0), 0)

    return totalPrice / flavors.length
  }
}
