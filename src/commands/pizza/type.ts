import type { Prisma } from '@prisma/client'

export type ContextData = {
  selectedFlavors: Prisma.FlavorCreateInput[]
  selectedCrust: Prisma.CrustCreateInput
  isSingleFlavor: boolean
  quantity: number
  note?: string
}
