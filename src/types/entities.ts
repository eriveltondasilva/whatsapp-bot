import type { ItemType } from '@/config/enums.js'
import type {
  Crust as CrustPrisma,
  Drink as DrinkPrisma,
  Flavor as FlavorPrisma,
} from '@prisma/client'

export type Flavor = Omit<FlavorPrisma, 'createdAt' | 'updatedAt' | 'isActive'>
export type Drink = Omit<DrinkPrisma, 'createdAt' | 'updatedAt' | 'isActive'>
export type Crust = Omit<CrustPrisma, 'createdAt' | 'updatedAt' | 'isActive'>

export type Customer = {
  name: string
  phone: string
  address: string
}

export type CartItem = {
  type: ItemType
  quantity: number
  unitPrice: number
  subtotal: number
  note?: string
  pizza?: {
    crust: Crust
    flavors: Flavor[]
  }
  drink?: Drink
}
