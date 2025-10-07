import { prisma } from "../../lib/prisma";

export async function ListAllTasks() {
    const tasks = await prisma.task.findMany()

    return tasks;
}