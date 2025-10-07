export class UserNotFound extends Error {
    constructor() {
        super("Não foi possível encontrar o usuário");
        this.name = "UserNotFound";
    }
}