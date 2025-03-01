import type { PrismaClient } from "@prisma/client";
import pizzerias from './pizzerias-seed.json';

export async function seedPizzeria(prisma: PrismaClient) {
    return await prisma.pizzeria.create({
        data: pizzerias[0]
    });
}
