import { prisma } from '@/db/prisma.js'

export class CrustRepository {
  async getAllCrusts() {
    return await prisma.crust.findMany({
      where: { active: true },
    })
  }
}
