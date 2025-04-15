import type { PrismaClient } from '@prisma/client'
import crusts from '../data/crusts-seed.json'

export async function seedCrust(prisma: PrismaClient) {
  return await prisma.crust.createMany({
    data: crusts,
    skipDuplicates: true,
  })
}
