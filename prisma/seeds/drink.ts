import type { PrismaClient } from "@prisma/client";
import drinks from '../../src/db/drinks.json';

export async function seedDrink(prisma: PrismaClient) {
    return await prisma.drink.createMany({
        data: drinks.map(item => ({
            name: item.name,
            description: item.description,
            price: item.price,
        })),
        skipDuplicates: true,
    });
}
