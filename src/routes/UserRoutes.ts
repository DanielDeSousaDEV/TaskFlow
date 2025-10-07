import express from "express";
import { UserController } from "../controllers/UserController";

const UserRoutes = express.Router()

UserRoutes.get('/users', UserController.index)
UserRoutes.get('/users/:id', UserController.show)
UserRoutes.post('/users', UserController.store)
UserRoutes.patch('/users/:id', UserController.update)
UserRoutes.put('/users/:id', UserController.update)
UserRoutes.delete('/users/:id', UserController.delete)

export default UserRoutes;