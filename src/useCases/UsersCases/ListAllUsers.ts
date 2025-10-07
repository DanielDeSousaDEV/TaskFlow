import { prisma } from "../../lib/prisma";

export async function ListAllUsers() {
    const users = await prisma.user.findMany()

    return users;
}