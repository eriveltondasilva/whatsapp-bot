import type { PrismaClient } from "@prisma/client";
import crusts from './crusts-seed.json';

export async function seedCrust(prisma: PrismaClient) {
    return await prisma.crust.createMany({
        data: crusts,
        skipDuplicates: true,
    });
}
