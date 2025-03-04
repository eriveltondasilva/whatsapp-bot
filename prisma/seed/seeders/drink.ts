import type { PrismaClient } from '@prisma/client'
import drinks from './drinks-seed.json'

export async function seedDrink(prisma: PrismaClient) {
  console.log('🔄 Seeding drinks...')
  return await prisma.drink.createMany({
    data: drinks,
    skipDuplicates: true,
  })
}
