import express from "express";
import UserRoutes from "./routes/UserRoutes";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import TaskRoutes from "./routes/TaskRoutes";
import { env } from "./env";

const app = express();

app.use(express.json())

app.use(UserRoutes)
app.use(TaskRoutes)

app.use(ErrorHandler)

app.listen(env.PORT, () => {
    console.log(`Servidor criado com sucesso na porta ${env.PORT}`);
})