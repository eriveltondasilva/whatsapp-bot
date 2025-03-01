import type { FlavorCategory, PrismaClient } from "@prisma/client";
import flavors from './flavors-seed.json';

export async function seedFlavor(prisma: PrismaClient) {
    return await prisma.flavor.createMany({
        data: flavors.map(({ name, category, price, ingredients, active }) => ({
            name,
            category: category as FlavorCategory,
            price,
            ingredients,
            active,
        })),
        skipDuplicates: true,
    });
}
