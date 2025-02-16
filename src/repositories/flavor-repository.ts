import { injectable } from 'tsyringe'
import { prisma } from '@/db/prisma.js'

@injectable()
export class FlavorRepository {
  async getAllFlavors() {
    return prisma.flavor.findMany({
      where: { active: true },
    })
  }

  async getFlavorById(id: number) {
    return prisma.flavor.findUnique({
      where: { id },
    })
  }
}
