import { Request, Response } from "express";
import { ShowUser } from "../useCases/UsersCases/ShowUser";
import { CreateUser } from "../useCases/UsersCases/CreateUser";
import { UpdateUser } from "../useCases/UsersCases/UpdateUser";
import { DeleteUser } from "../useCases/UsersCases/DeleteUser";
import { ListAllTasks } from "../useCases/TasksCases/ListAllTasks";
import { CreateTaskSchema, TaskIdSchema, UpdateTaskSchema } from "../validators/tasks";
import { ShowTask } from "../useCases/TasksCases/ShowTask";
import { CreateTask } from "../useCases/TasksCases/CreateTask";
import { UpdateTaks } from "../useCases/TasksCases/UpdateTask";
import { DeleteTask } from "../useCases/TasksCases/DeleteTask";

export const TaskController = {
    async index(req: Request, res: Response) {
        const tasks = await ListAllTasks()

        return res.json({
            message: 'Listagem de tarefas realizada com sucesso',
            tasks: tasks
        })
    },

    async show(req: Request, res: Response) {
        const { id } = TaskIdSchema.parse(req.params)
    
        const task = await ShowTask(id)

        return res.json({
            message: 'Tarefa encontrada com sucesso',
            task: task
        })
    },

    async store(req: Request, res: Response) {
        const data = CreateTaskSchema.parse(req.body ?? {})
    
        const task = await CreateTask(data)

        return res.json({
            message: 'Tarefa criada com sucesso',
            task: task
        })
    },

    async update(req: Request, res: Response) {
        const { id } = TaskIdSchema.parse(req.params)

        const data = UpdateTaskSchema.parse(req.body ?? {})
    
        const task = await UpdateTaks(id, data)

        return res.json({
            message: 'Tarefa atualizada com sucesso',
            task: task
        })
    },

    async delete(req: Request, res: Response) {
        const { id } = TaskIdSchema.parse(req.params)
    
        const task = await DeleteTask(id)

        return res.json({
            message: 'Tarefa deletada com sucesso',
            task: task
        })
    },
    
}