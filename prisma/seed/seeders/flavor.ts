import type { PrismaClient } from '@prisma/client'
import flavors from './flavors-seed.json'

export async function seedFlavor(prisma: PrismaClient) {
  console.log('🔄 Seeding flavors...')
  return await prisma.flavor.createMany({
    data: flavors.map(({ name, description, price, category, active }) => ({
      name,
      description,
      price,
      category,
      active,
    })),
    skipDuplicates: true,
  })
}
