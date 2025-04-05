import { PrismaClient } from '@prisma/client'

import { seedCrust } from './seeders/crust.js'
import { seedCustomer } from './seeders/customer.js'
import { seedDrink } from './seeders/drink.js'
import { seedFlavor } from './seeders/flavor.js'
import { seedPizzeria } from './seeders/pizzeria.js'
import { seedWorkingHour } from './seeders/working-hour.js'

const prisma = new PrismaClient({ errorFormat: 'pretty' })

async function seedDatabase() {
  console.log('\n🚀 Starting database seeding:\n')

  await Promise.all([
    seedPizzeria(prisma),
    seedWorkingHour(prisma),
    seedCrust(prisma),
    seedCustomer(prisma),
    seedDrink(prisma),
    seedFlavor(prisma),
  ])

  console.log('\n✅ Seeding completed successfully!')
}

async function main() {
  try {
    const [dbVersion]: [{ version: string }] = await prisma.$queryRaw`SELECT version()`
    console.log(`\n📦 Database version: ${dbVersion.version}`)
    //
    await seedDatabase()
  } catch (err) {
    console.error('❌ Error during seeding:', err)
  } finally {
    await prisma.$disconnect()
    console.log('🔌 Database connection closed.')
  }
}

main()
