import { z } from "zod";

export const ModalSchema = z.object({
    name: z.string()
        .nonempty("O nome é obrigatório"),

    email: z.string()
        .nonempty("O e-mail é obrigatório")
        .email("Formato de e-mail inválido"),

    linkedin: z.string()
        .nonempty("O LinkedIn é obrigatório")
        .url("Insira um link válido para seu LinkedIn"),
});

export type applyForm = z.infer<typeof ModalSchema>;
