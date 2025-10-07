import { TaskNotFound } from "../../exceptions/TaskNotFound";
import { prisma } from "../../lib/prisma";

export async function DeleteTask(id: string) {
    const taskExists = await prisma.task.findUnique({
        where: {
            id
        }
    })

    if (!taskExists) {
        throw new TaskNotFound()
    }

    const task = await prisma.task.delete({
        where: {
            id
        }
    })

    return task; 
}