import { ModalSchema, applyForm } from "../../Schema/ModalSchema";
import { Paragraph, Title2 } from "../../Styles/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { useContext, useEffect } from "react";
import { CompanyContext } from "../../providers/CompanyContext";
import { IapplySubmit } from "../../providers/CompanyContext/@types";
import { BackGroundModal, ModalContainer } from "./style";
import { Button } from "../Button";

const closeBtn = "/images/button_close.png";

interface IModalProps {
    name: string;
    company?: string; 
    jobId: number;
    companyId: number;
}

export const Modal = ({ name, company = "Empresa não informada", jobId, companyId }: IModalProps) => {
    const { applyJob, setIsOpen } = useContext(CompanyContext);

    const { register, handleSubmit, formState: { errors } } = useForm<applyForm>({
        resolver: zodResolver(ModalSchema),
    });

    const submitForm: SubmitHandler<applyForm> = async (formData) => {
        try {
            const applyObject: IapplySubmit = { ...formData, jobId, userId: companyId };
            await applyJob(applyObject);
            setIsOpen(null);
        } catch (error) {
            console.error("Erro ao enviar candidatura:", error);
        }
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(null);
            }
        };

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        };
    }, [setIsOpen]);

    return (
        <BackGroundModal>
            <ModalContainer>
                <Title2 font="var(--color-blue)">Candidatar-se</Title2>
                <img className="closeBtn" onClick={() => setIsOpen(null)} src={closeBtn} alt="Fechar modal" />
                <Paragraph>
                    Você está se candidatando para <span className="bold">{name}</span> em <span className="bold">{company}</span>
                </Paragraph>
                <form className="modalForm" onSubmit={handleSubmit(submitForm)}>
                    <Input placeholder="Nome" error={errors.name} {...register("name")} />
                    <Input placeholder="E-mail" error={errors.email} {...register("email")} />
                    <Input placeholder="LinkedIn" error={errors.linkedin} {...register("linkedin")} />
                    <Button type="submit">
                        Candidatar-se
                    </Button>
                </form>
            </ModalContainer>
        </BackGroundModal>
    );
};


