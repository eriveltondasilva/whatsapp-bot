import type { PrismaClient } from '@prisma/client'
import customers from '../data/customers-seed.json'

export async function seedCustomer(prisma: PrismaClient) {
  return await prisma.customer.createMany({
    data: customers,
    skipDuplicates: true,
  })
}
