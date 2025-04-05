import type { Prisma } from '@prisma/client'

import type { ListResponse } from '@/types/index.js'
import { formatCurrency } from '@/utils/format-currency.js'

const buildTitle = (id: string, name: string, price: string) => `${id} - ${name} (${price})`
const buildId = (id: number) => String(id + 1)

export function buildFlavorList(flavors: Prisma.FlavorCreateInput[]): ListResponse[] {
  return flavors.map(({ name, description, price, category }, index) => {
    const rowId = buildId(index)
    const flavorPrice = formatCurrency(Number(price))
    const title = buildTitle(rowId, name, flavorPrice)

    return { rowId, title, description, category }
  })
}

export function buildCrustList(crusts: Prisma.CrustCreateInput[]): ListResponse[] {
  return crusts.map(({ name, price }, index) => {
    const rowId = buildId(index)
    const crustPrice = Number(price) === 0 ? 'grátis' : formatCurrency(Number(price))
    const title = buildTitle(rowId, name, crustPrice)

    return { rowId, title, description: '', category: 'bordas' }
  })
}

export function buildDrinkList(drinks: Prisma.DrinkCreateInput[]): ListResponse[] {
  return drinks.map(({ name, description, price }, index) => {
    const rowId = buildId(index)
    const drinkPrice = formatCurrency(Number(price))
    const title = buildTitle(rowId, name, drinkPrice)

    return { rowId, title, description, category: 'bebidas' }
  })
}
