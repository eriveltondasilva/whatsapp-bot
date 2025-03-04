import type { PrismaClient } from '@prisma/client'
import workingHours from './working-hours-seed.json'

export async function seedWorkingHour(prisma: PrismaClient) {
  console.log('🔄 Seeding working hours...')
  return await prisma.workingHour.createMany({
    data: workingHours,
    skipDuplicates: true,
  })
}
