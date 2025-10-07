import { TaskNotFound } from "../../exceptions/TaskNotFound";
import { prisma } from "../../lib/prisma";

export async function ShowTask(id: string) {
    const task = await prisma.task.findUnique({
        where: {
            id: id
        }
    })

    if (!task) {
        throw new TaskNotFound();
    }

    return task; 
}