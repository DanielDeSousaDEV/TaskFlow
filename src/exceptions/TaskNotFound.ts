export class TaskNotFound extends Error {
    constructor() {
        super("Não foi possível encontrar a tarefa");
        this.name = "UserNotFound";
    }
}