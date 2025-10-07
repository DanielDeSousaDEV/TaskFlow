import { UserNotFound } from "../../exceptions/UserNotFound";
import { prisma } from "../../lib/prisma";

export async function DeleteUser(id: string) {
    const userExists = await prisma.user.findUnique({
        where: {
            id
        }
    })

    if (!userExists) {
        throw new UserNotFound()
    }

    const user = await prisma.user.delete({
        where: {
            id
        }
    })

    return user; 
}