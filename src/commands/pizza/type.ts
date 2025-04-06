import type { Flavor } from '@/types/entities.js'
import type { Prisma } from '@prisma/client'

export type ContextData = {
  selectedFlavors: Flavor[]
  selectedCrust: Prisma.CrustCreateInput
  isSingleFlavor: boolean
  quantity: number
  note?: string
}
