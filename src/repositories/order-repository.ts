import type { Prisma } from '@prisma/client'
import { injectable } from 'tsyringe'

import { prisma } from '@/db/prisma.js'

@injectable()
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
