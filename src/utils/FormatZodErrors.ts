import z from "zod";

export function FormatZodErrors (error: z.ZodError) {
    return error.issues.reduce((prev, curr) => ({
        [curr.path.toString()] : {message: curr.message}
    }), {}) 
}