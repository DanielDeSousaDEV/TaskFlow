import express from "express";
import UserRoutes from "./routes/UserRoutes";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import TaskRoutes from "./routes/TaskRoutes";

const app = express();

app.use(express.json())

app.use(UserRoutes)
app.use(TaskRoutes)

app.use(ErrorHandler)

app.listen(3000, () => {
    console.log('Servidor criado com sucesso');
})