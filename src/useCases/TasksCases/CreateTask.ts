import { TaskStatus } from "../../enums/TaskStatusEnum";
import { UserNotFound } from "../../exceptions/UserNotFound";
import { prisma } from "../../lib/prisma";

interface CreateTaskData {
    title: string,
    description: string,
    status: TaskStatus,
    user_id: string,
}

export async function CreateTask(data: CreateTaskData) {
    const userExists = await prisma.user.findUnique({
        where: {
            id: data.user_id
        }
    })

    if (!userExists) {
        throw new UserNotFound();
    }

    const task = await prisma.task.create({
        data: {
            title: data.title,
            description: data.description,
            status: data.status,
            userId: data.user_id
        }
    })

    return task; 
}