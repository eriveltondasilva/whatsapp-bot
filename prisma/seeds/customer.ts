import type { PrismaClient } from "@prisma/client";
import customers from '../../src/db/customers.json';

export async function seedCustomer(prisma: PrismaClient) {
    return await prisma.customer.createMany({
        data: customers.map(item => ({
            name: item.name,
            phone: item.phone,
            address: item.address
        })),
        skipDuplicates: true,
    });
}
