import type { PrismaClient } from '@prisma/client'
import flavors from '../data/flavors-seed.json'

export async function seedFlavor(prisma: PrismaClient) {
  return await prisma.flavor.createMany({
    data: flavors,
    skipDuplicates: true,
  })
}
