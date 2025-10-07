import { EmailAlreadyUsedError } from "../../exceptions/EmailAlredyUsed"
import { UserNotFound } from "../../exceptions/UserNotFound"
import { prisma } from "../../lib/prisma"

interface UpdateUserData {
    email?: string,
    name?: string
}

export async function UpdateUser(id: string, data: UpdateUserData) {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    })

    if (!user) {
        throw new UserNotFound()
    }

    if (data.email) {
        const EmailAlredyUsedForOtherUser = await prisma.user.findFirst({
            where: {
                email: data.email,
                NOT: {
                    id
                }
            }
        })
    
        if (EmailAlredyUsedForOtherUser) {
            throw new EmailAlreadyUsedError()
        }
    }

    const updatedUser = await prisma.user.update({
        where: {
            id
        },
        data: data
    })

    return updatedUser;
}