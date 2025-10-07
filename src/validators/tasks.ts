import z from "zod";
import { TaskStatusEnum } from "../enums/TaskStatusEnum";

export const TaskIdSchema = z.object({
    id: z.uuid('Por favor informe um uuid válido')
})

export const CreateTaskSchema = z.object({
    title: z.string('Por favor informe o título da tarefa').min(2, 'O título da tarefa deve ter no mínimo 2 caracteres'),
    description: z.string('Por favor informa a descrição da tarefa').min(2, 'A descrição de tarefa deve ter ao mínimo 2 caracteres'),
    status: z.enum(Object.values(TaskStatusEnum), 'Informe um status valído'),
    user_id: z.uuid('Por favor informe um uuid valído')
})

export const UpdateTaskSchema = z.object({
    title: z.string('Por favor informe o título da tarefa').min(2, 'O título da tarefa deve ter no mínimo 2 caracteres').optional(),
    description: z.string('Por favor informa a descrição da tarefa').min(2, 'A descrição de tarefa deve ter ao mínimo 2 caracteres').optional(),
    status: z.enum(Object.values(TaskStatusEnum), 'Informe um status valído').optional(),
    user_id: z.uuid('Por favor informe um uuid valído').optional()
})