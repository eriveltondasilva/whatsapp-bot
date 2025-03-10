import { prisma } from '@/providers/prisma.js'
import type { Prisma } from '@prisma/client'

export class CustomerRepository {
  async findByPhone(phone: string) {
    return await prisma.customer.findUnique({
      where: { phone },
    })
  }

  async create(data: Prisma.CustomerCreateInput) {
    return await prisma.customer.create({
      data,
    })
  }

  async update(phone: string, data: Prisma.CustomerUpdateInput) {
    return await prisma.customer.update({
      where: { phone },
      data,
    })
  }
}
