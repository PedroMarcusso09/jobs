import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string()
        .nonempty("O e-mail é obrigatório")
        .email("Formato de e-mail inválido"),

    password: z.string()
        .nonempty("A senha é obrigatória")
        .min(5, "A senha deve ter no mínimo 5 caracteres") 
});

export type LoginForm = z.infer<typeof loginFormSchema>;
