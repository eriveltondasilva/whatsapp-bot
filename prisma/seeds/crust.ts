import type { PrismaClient } from "@prisma/client";
import crusts from '../../src/db/crusts.json';

export async function seedCrust(prisma: PrismaClient) {
    return await prisma.crust.createMany({
        data: crusts.map(item => ({
            name: item.name,
            price: item.price,
        })),
        skipDuplicates: true,
    });
}
