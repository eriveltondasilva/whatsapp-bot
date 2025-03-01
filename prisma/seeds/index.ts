import { PrismaClient } from '@prisma/client'

import { seedCrust } from './crust.js'
import { seedCustomer } from './customer.js'
import { seedDrink } from './drink.js'
import { seedFlavor } from './flavor.js'
import { seedPizzeria } from './pizzeria.js'
import { seedWorkingHour } from './working-hour.js'

const prisma = new PrismaClient()

async function seedDatabase() {
    console.log('\n🔄 Starting database seeding...');

    await Promise.all([
        seedPizzeria(prisma),
        seedWorkingHour(prisma),
        seedCrust(prisma),
        seedCustomer(prisma),
        seedDrink(prisma),
        seedFlavor(prisma),
    ])

    console.log('✅ Seeding completed successfully!');
}

async function main() {
    try {
        const [dbVersion]: [{ version: string }] = await prisma.$queryRaw`SELECT version()`
        console.log(`\n📦 Database version: ${dbVersion.version}`);

        await seedDatabase()
    } catch (err) {
        console.error('❌ Error during seeding:', err);

    } finally {
        await prisma.$disconnect();
        console.log('🔌 Database connection closed.');
    }

}

main()
