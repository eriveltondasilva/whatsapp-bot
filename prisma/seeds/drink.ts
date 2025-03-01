import type { PrismaClient } from "@prisma/client";
import drinks from './drinks-seed.json';

export async function seedDrink(prisma: PrismaClient) {
    return await prisma.drink.createMany({
        data: drinks,
        skipDuplicates: true,
    });
}
