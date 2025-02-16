import { injectable } from 'tsyringe'
import { prisma } from '@/db/prisma.js'

@injectable()
export class CrustRepository {
  async getAllCrusts() {
    return await prisma.crust.findMany({
      where: { active: true },
    })
  }
}
