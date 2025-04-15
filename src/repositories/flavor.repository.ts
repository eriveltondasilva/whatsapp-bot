import { prisma } from '@/providers/prisma.js'

export class FlavorRepository {
  async getAllFlavors() {
    return await prisma.flavor.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        category: true,
      },
    })
  }

  async getFlavorById(id: number) {
    return await prisma.flavor.findUnique({
      where: { id },
    })
  }
}
