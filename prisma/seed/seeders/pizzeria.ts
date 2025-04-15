import type { PrismaClient } from '@prisma/client'
import pizzeria from '../data/pizzerias-seed.json'

export async function seedPizzeria(prisma: PrismaClient) {
  return await prisma.pizzeria.create({
    data: pizzeria,
  })
}
