import { z } from "zod";

export const registerFormJobSchema = z.object({
    position: z.string().nonempty("O cargo é obrigatório."),
    
    sallary: z.preprocess(
        (value) => (typeof value === "string" ? Number(value) : value),
        z.number().optional()
    ),

    description: z.string()
        .nonempty("A descrição é obrigatória.")
        .min(10, "A descrição deve ter pelo menos 10 caracteres."),
});

export type RegisterJobForm = z.infer<typeof registerFormJobSchema>;

