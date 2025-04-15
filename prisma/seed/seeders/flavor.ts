import type { PrismaClient } from '@prisma/client'
import flavors from '../data/flavors-seed.json'

export async function seedFlavor(prisma: PrismaClient) {
  console.log('🔄 Seeding flavors...')
  return await prisma.flavor.createMany({
    data: flavors,
    skipDuplicates: true,
  })
}
