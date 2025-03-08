import { prisma } from '@/providers/prisma.provider.js'

export class CrustRepository {
  async getAllCrusts() {
    return await prisma.crust.findMany({
      where: { active: true },
    })
  }
}
