import { UserNotFound } from "../../exceptions/UserNotFound";
import { prisma } from "../../lib/prisma";

export async function ShowUser(id: string) {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!user) {
        throw new UserNotFound();
    }

    return user; 
}