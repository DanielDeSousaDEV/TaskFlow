import { EmailAlreadyUsedError } from "../../exceptions/EmailAlredyUsed";
import { prisma } from "../../lib/prisma";

export async function CreateUser(name: string, email: string) {
    const emailAlredyUsed = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (emailAlredyUsed) {
        throw new EmailAlreadyUsedError();
    }

    const user = await prisma.user.create({
        data: {
            name,
            email
        }
    })

    return user; 
}