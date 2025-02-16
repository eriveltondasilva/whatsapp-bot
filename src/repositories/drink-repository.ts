import type { Prisma } from '@prisma/client'
import { injectable } from 'tsyringe'

import { prisma } from '@/db/prisma.js'

@injectable()
export class DrinkRepository {
  async getAllDrinks() {
    return await prisma.drink.findMany({
      where: { active: true },
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
