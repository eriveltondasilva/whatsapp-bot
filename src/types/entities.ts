import type { ITEM_TYPES } from '@/config/enums.js'
import type {
  Crust as CrustPrisma,
  Drink as DrinkPrisma,
  Flavor as FlavorPrisma,
} from '@prisma/client'

type OmitType = 'createdAt' | 'updatedAt' | 'isActive'
export type Flavor = Omit<FlavorPrisma, OmitType>
export type Drink = Omit<DrinkPrisma, OmitType>
export type Crust = Omit<CrustPrisma, OmitType>

export type Customer = {
  name: string
  phone: string
  address: string
}

export type CartItem = {
  type: ITEM_TYPES
  name: string
  quantity: number
  unitPrice: number
  subtotal: number
  details: {
    //* Pizza
    flavors?: Flavor[]
    crust?: Crust
    note?: string
    //* Drink
    drink?: Drink
  }
  drink?: Drink
}
