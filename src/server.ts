import express from "express";
import UserRoutes from "./routes/UserRoutes";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import TaskRoutes from "./routes/TaskRoutes";
import { env } from "./env";
import { NotFound } from "./middlewares/NotFound";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(express.json())

app.use(UserRoutes)
app.use(TaskRoutes)

app.use(NotFound)
app.use(ErrorHandler)

app.listen(env.PORT, env.HOST, () => {
    console.log(`Servidor criado com sucesso na porta ${env.PORT}`);
})