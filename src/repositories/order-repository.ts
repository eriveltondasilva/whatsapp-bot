import { prisma } from '@/db/prisma.js'
import type { Prisma } from '@prisma/client'

export class OrderRepository {
  async createOrder(data: Prisma.OrderCreateInput) {
    return await prisma.order.create({
      data,
    })
  }

  // outros métodos...
}
