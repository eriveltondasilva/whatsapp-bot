import type { FlavorCategory, PrismaClient } from "@prisma/client";
import pizzas from '../../src/db/pizzas.json';

export async function seedPizzas(prisma: PrismaClient) {
    return await prisma.flavor.createMany({
        data: pizzas.map(item => ({
            name: item.name,
            category: item.category as FlavorCategory,
            price: item.price,
            active: item.isAvailable,
            ingredients: item.ingredients,
        })),
        skipDuplicates: true,
    });
}
