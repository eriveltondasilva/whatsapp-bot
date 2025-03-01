import type { PrismaClient } from "@prisma/client";
import workingHours from './working-hours-seed.json';

export async function seedWorkingHour(prisma: PrismaClient) {
    return await prisma.workingHour.createMany({
        data: workingHours,
        skipDuplicates: true,
    });
}
