import z from "zod";

export const UserIdSchema = z.object({
    id: z.uuid('Por favor informe um uuid válido')
})

export const CreateUserSchema = z.object({
    name: z.string('Por favor informe o nome so usuário').min(2, 'O nome do usuário deve ter no mínimo dois caracteres'),
    email: z.email('Informe um email valído')
})

export const UpdateUserSchema = z.object({
    name: z.string('Por favor informe o nome so usuário').min(2, 'O nome do usuário deve ter no mínimo dois caracteres').optional(),
    email: z.email('Informe um email valído').optional()
})