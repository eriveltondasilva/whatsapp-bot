import { prisma } from '@/providers/prisma.js'
import type { Prisma } from '@prisma/client'

export class DrinkRepository {
  async getAllDrinks() {
    return await prisma.drink.findMany({
      where: { active: true },
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
      },
    })
  }

  async getDrinkById(id: number) {
    return await prisma.drink.findUnique({
      where: { id },
    })
  }

  async createDrink(data: Prisma.DrinkCreateInput) {
    return await prisma.drink.create({ data })
  }
}
