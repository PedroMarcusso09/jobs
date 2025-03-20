import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string()
        .nonempty("O nome é obrigatório."),

    email: z.string()
        .nonempty("O e-mail é obrigatório.")
        .email("Digite um e-mail válido."),

    password: z.string()
        .nonempty("A senha é obrigatória.")
        .min(8, "A senha deve ter pelo menos 8 caracteres.")
        .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
        .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
        .regex(/[0-9]/, "A senha deve conter pelo menos um número.")
        .regex(/[\W_]/, "A senha deve conter pelo menos um caractere especial (@, $, *, etc.)."),

    confirm: z.string()
        .nonempty("A confirmação de senha é obrigatória."),
})
.refine((data) => data.password === data.confirm, {
    message: "As senhas devem ser iguais.",
    path: ["confirm"],
});

export type RegisterForm = z.infer<typeof registerFormSchema>;
