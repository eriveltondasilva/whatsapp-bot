import type { FlavorCategory, PrismaClient } from "@prisma/client";
import flavors from './flavors-seed.json';

export async function seedFlavors(prisma: PrismaClient) {
    return await prisma.flavor.createMany({
        data: flavors.map(item => ({
            name: item.name,
            category: item.category as FlavorCategory,
            price: item.price,
            ingredients: item.ingredients,
        })),
        skipDuplicates: true,
    });
}
