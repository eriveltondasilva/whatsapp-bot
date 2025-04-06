import type { ItemType } from '@/config/enums.js'

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
