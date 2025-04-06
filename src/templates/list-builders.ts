import type { ResponseList } from '@/types/responses.js'
import type { Prisma } from '@prisma/client'

import { formatCurrency } from '@/utils/format-currency.js'

const buildTitle = (id: string, name: string, price: string) => `${id} - ${name} (${price})`
const buildId = (id: number) => String(id + 1)

export function buildFlavorList(flavors: Prisma.FlavorCreateInput[]): ResponseList[] {
  return flavors.map(({ name, description, price, category }, index) => {
    const rowId = buildId(index)
    const flavorPrice = formatCurrency(Number(price))
    const title = buildTitle(rowId, name, flavorPrice)

    return { rowId, title, description, category }
  })
}

export function buildCrustList(crusts: Prisma.CrustCreateInput[]): ResponseList[] {
  return crusts.map(({ name, price }, index) => {
    const rowId = buildId(index)
    const crustPrice = Number(price) === 0 ? 'grátis' : formatCurrency(Number(price))
    const title = buildTitle(rowId, name, crustPrice)

    return { rowId, title, description: '', category: 'bordas' }
  })
}

export function buildDrinkList(drinks: Prisma.DrinkCreateInput[]): ResponseList[] {
  return drinks.map(({ name, description, price }, index) => {
    const rowId = buildId(index)
    const drinkPrice = formatCurrency(Number(price))
    const title = buildTitle(rowId, name, drinkPrice)

    return { rowId, title, description, category: 'bebidas' }
  })
}
