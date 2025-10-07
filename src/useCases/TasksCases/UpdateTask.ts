import { TaskStatus } from "../../enums/TaskStatusEnum"
import { TaskNotFound } from "../../exceptions/TaskNotFound"
import { UserNotFound } from "../../exceptions/UserNotFound"
import { prisma } from "../../lib/prisma"

interface UpdateTaskData {
    title?: string,
    description?: string,
    status?: TaskStatus,
    user_id?: string,
}

export async function UpdateTaks(id: string, data: UpdateTaskData) {
    const task = await prisma.task.findUnique({
        where: {
            id
        }
    })

    if (!task) {
        throw new TaskNotFound()
    }

    if (data.user_id) {
        const userExists = await prisma.user.findFirst({
            where: {
                id: data.user_id,
            }
        })
    
        if (userExists) {
            throw new UserNotFound()
        }
    }

    const updatedTask = await prisma.task.update({
        where: {
            id
        },
        data: data
    })

    return updatedTask;
}