import { prisma } from '@/providers/prisma.js'

export class FlavorRepository {
  async getAllFlavors() {
    return await prisma.flavor.findMany({
      where: { active: true },
    })
  }

  async getFlavorById(id: number) {
    return await prisma.flavor.findUnique({
      where: { id },
    })
  }
}
