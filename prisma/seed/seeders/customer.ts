import type { PrismaClient } from '@prisma/client'
import customers from './customers-seed.json'

export async function seedCustomer(prisma: PrismaClient) {
  console.log('🔄 Seeding customers...')
  return await prisma.customer.createMany({
    data: customers,
    skipDuplicates: true,
  })
}
