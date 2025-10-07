import { Request, Response } from "express";
import { ListAllUsers } from "../useCases/UsersCases/ListAllUsers";
import { ShowUser } from "../useCases/UsersCases/ShowUser";
import { CreateUser } from "../useCases/UsersCases/CreateUser";
import { UpdateUser } from "../useCases/UsersCases/UpdateUser";
import { DeleteUser } from "../useCases/UsersCases/DeleteUser";
import { CreateUserSchema, UpdateUserSchema, UserIdSchema } from "../validators/users";

export const UserController = {
    async index(req: Request, res: Response) {
        const users = await ListAllUsers()

        return res.json({
            message: 'Listagem de usuários realizada com sucesso',
            users: users
        })
    },

    async show(req: Request, res: Response) {
        const { id } = UserIdSchema.parse(req.params)
    
        const user = await ShowUser(id)

        return res.json({
            message: 'Usuário encontrado com sucesso',
            user: user
        })
    },

    async store(req: Request, res: Response) {
        const { email, name } = CreateUserSchema.parse(req.body ?? {})
    
        const user = await CreateUser(name, email)

        return res.json({
            message: 'Usuário criado com sucesso',
            user: user
        })
    },

    async update(req: Request, res: Response) {
        const { id } = UserIdSchema.parse(req.params)

        const data = UpdateUserSchema.parse(req.body ?? {})
    
        const user = await UpdateUser(id, data)

        return res.json({
            message: 'Usuário atualizado com sucesso',
            user: user
        })
    },

    async delete(req: Request, res: Response) {
        const { id } = UserIdSchema.parse(req.params)
    
        const user = await DeleteUser(id)

        return res.json({
            message: 'Usuário deletado com sucesso',
            user: user
        })
    },
    
}