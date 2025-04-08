import type { ItemType } from '@/config/enums.js'
import type { Drink as DrinkPrisma, Flavor as FlavorPrisma } from '@prisma/client'

export type Customer = {
  name: string
  phone: string
  address: string
}

export type CartItem = {
  id: string
  type: ItemType
  name: string
  price: number
  quantity: number
}

export type Flavor = Omit<FlavorPrisma, 'createdAt' | 'updatedAt' | 'active'>
export type Drink = Omit<DrinkPrisma, 'createdAt' | 'updatedAt' | 'active'>
