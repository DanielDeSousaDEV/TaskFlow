import express from "express";
import { TaskController } from "../controllers/TaskController";

const TaskRoutes = express.Router()

TaskRoutes.get('/tasks', TaskController.index)
TaskRoutes.get('/tasks/:id', TaskController.show)
TaskRoutes.post('/tasks', TaskController.store)
TaskRoutes.patch('/tasks/:id', TaskController.update)
TaskRoutes.put('/tasks/:id', TaskController.update)
TaskRoutes.delete('/tasks/:id', TaskController.delete)

export default TaskRoutes;