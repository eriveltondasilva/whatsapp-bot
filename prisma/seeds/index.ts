import { PrismaClient } from '@prisma/client'
import {seedPizzas} from './pizza.js'

const prisma = new PrismaClient()

async function main() {
    try {
      const result = await seedPizzas(prisma)

        console.log('Created: %o', result)
        await prisma.$disconnect()
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }

}
main()
