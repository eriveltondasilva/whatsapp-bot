import type { Prisma } from '@prisma/client'
import { formatCurrency } from '@/utils/format-currency.js'

export function buildFlavorList(flavors: Prisma.FlavorCreateInput[]): string[] {
  return flavors.map(({ name, description, price, category }, index) => {
    const flavorPrice = formatCurrency(Number(price))

    const rowId = index + 1
    const title = `${rowId} - ${name} (${flavorPrice})`

    return [rowId, title, description, category].join('::')
  })
}

export function buildCrustList(crusts: Prisma.CrustCreateInput[]): string[] {
  return crusts.map(({ name, price }, index) => {
    const crustPrice = Number(price) === 0 ? 'grátis' : formatCurrency(Number(price))

    const rowId = index + 1
    const title = `${rowId} - ${name} (${crustPrice})`
    const description = ''
    const category = 'bordas'

    return [rowId, title, description, category].join('::')
  })
}

// ###
export function buildDrinkList(drinks: Prisma.DrinkCreateInput[]): string[] {
  return drinks.map(({ name, description, price }, index) => {
    const drinkPrice = formatCurrency(Number(price))

    const rowId = index + 1
    const title = `${rowId} - ${name} (${drinkPrice})`
    const category = 'bebidas'

    return [rowId, title, description, category].join('::')
  })
}
