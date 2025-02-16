import type { PrismaClient } from "@prisma/client";
import drinks from './drinks-seed.json';

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
