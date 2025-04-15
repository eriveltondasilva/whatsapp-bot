import { prisma } from '@/providers/prisma.js'

export class CrustRepository {
  async getAllCrusts() {
    return await prisma.crust.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        price: true,
      },
    })
  }
}
