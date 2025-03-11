import { prisma } from '@/providers/prisma.js'

export class CrustRepository {
  async getAllCrusts() {
    return await prisma.crust.findMany({
      where: { active: true },
      select: {
        id: true,
        name: true,
        price: true,
      },
    })
  }
}
