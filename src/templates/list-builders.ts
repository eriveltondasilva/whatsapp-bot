import type { ResponseList } from '@/types/responses.js'
import type { Prisma } from '@prisma/client'

import { formatCurrency } from '@/utils/format-currency.js'

const buildId = (index: number) => String(index + 1)
const buildTitle = (id: string, name: string, price: string) => `${id} - ${name} (${price})`
const buildPrice = (price: number) => (price === 0 ? 'grátis' : formatCurrency(price))

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const buildListItem = (item: any, index: number, category = '') => {
  const rowId = buildId(index)
  const price = buildPrice(Number(item.price))
  const title = buildTitle(rowId, item.name, price)
  return { rowId, title, description: item.description || '', category: item.category || category }
}

export function buildFlavorList(flavors: Prisma.FlavorCreateInput[]): ResponseList[] {
  return flavors.map((flavor, index) => buildListItem(flavor, index))
}

export function buildCrustList(crusts: Prisma.CrustCreateInput[]): ResponseList[] {
  return crusts.map((crust, index) => buildListItem(crust, index, 'bordas'))
}

export function buildDrinkList(drinks: Prisma.DrinkCreateInput[]): ResponseList[] {
  return drinks.map((drink, index) => buildListItem(drink, index, 'bebidas'))
}
