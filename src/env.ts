import z from "zod";
import { FormatZodErrors } from "./utils/FormatZodErrors";

const EnvSchema = z.object({
    DATABASE_URL: z.string('Informe a url de conexão com o banco de dados'),
    PORT: z.coerce.number('informe a porta do servidor').positive().default(3000)
});

const _env = EnvSchema.safeParse(process.env);

if (!_env.success) {
    console.error("❌ Variáveis de ambiente inválidas:", FormatZodErrors(_env.error));
    process.exit(1);
}

export const env = _env.data;