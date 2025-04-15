import type { Crust, Flavor } from '@/types/entities.js'

export type ContextData = {
  selectedFlavors: Flavor[]
  selectedCrust: Crust
  isSingleFlavor: boolean
  quantity: number
  note?: string
  unitPrice: number
  subtotal: number
}
