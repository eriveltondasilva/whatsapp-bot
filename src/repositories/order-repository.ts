import type { Prisma } from '@prisma/client'
import { prisma } from '@/db/prisma.js'

export class OrderRepository {
  async createOrder(data: Prisma.OrderCreateInput) {
    return await prisma.order.create({
      data,
      include: {
        customer: true,
      },
    })
  }

  // outros métodos...
}
