import { PrismaClient } from '@prisma/client'
// import { seedCrust } from './crust.js'
// import { seedCustomer } from './customer.js'
// import { seedDrink } from './drink.js'
// import { seedPizzas } from './pizza.js'

const prisma = new PrismaClient()

async function main() {
    try {
        const result: string[] = await prisma.$queryRaw`SELECT version()`
        // await seedPizzas(prisma)
        // await seedDrink(prisma)
        // await seedCrust(prisma)
        // await seedCustomer(prisma)

        console.log('\n🚀 Seeded successfully...')
        console.dir(...result)
        await prisma.$disconnect()
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }

}
main()
