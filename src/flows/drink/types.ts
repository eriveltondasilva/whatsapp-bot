import type { Drink } from '@/types/entities.js'

export type ContextData = {
  selectedDrink: Drink
  quantity: number
  subtotal: number
  unitPrice: number
}
