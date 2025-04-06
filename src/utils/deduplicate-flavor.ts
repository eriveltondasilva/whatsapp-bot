import type { Flavor } from '@/types/entities.js'

export function deduplicateFlavor(flavors: Flavor[]) {
  if (flavors.length <= 1) return flavors

  const uniqueFlavors = new Map()

  for (const flavor of flavors) {
    uniqueFlavors.set(flavor.id, flavor)
  }

  return Array.from(uniqueFlavors.values())
}
