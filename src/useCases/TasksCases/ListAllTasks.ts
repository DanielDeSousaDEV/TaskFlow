import { prisma } from "../../lib/prisma";

export async function ListAllTasks() {
    const tasks = await prisma.task.findMany({
        include: {
            user: {
                select: {
                    name: true
                }
            }
        },
    })

    return tasks;
}