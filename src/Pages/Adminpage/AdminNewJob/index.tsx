import { ParagraphMenu, Title1 } from "../../../Styles/Typography";
import { Input } from "../../../components/Input"; 
import { Button } from "../../../components/Button"; 
import { StyleMainAdm, StyledArrowDiv, StyledTextArea } from "./style";
import { AdmContext } from "../../../providers/AdmContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterJobForm, registerFormJobSchema } from "../../../Schema/NewJobSchema";
import { AdmHeader } from "../../../components/AdminHeader";
import { Footer } from "../../../components/Footer";
import { useNavigate } from "react-router-dom";

const arrowIcon = "/images/arrow.png"; 
const buttonIcon = "/images/more.png"; 

export const AdmNewJob = () => {
    const { registerJob } = useContext(AdmContext);
    const navigate = useNavigate(); 

    const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterJobForm>({
        resolver: zodResolver(registerFormJobSchema)
    });

    const onSubmit: SubmitHandler<RegisterJobForm> = (formData) => {
        const formattedData = {
            ...formData,
            sallary: formData.sallary ? Number(formData.sallary) : undefined,
        };
    
        registerJob(formattedData).then(() => reset()); 
    };
    

    return (
        <>
            <AdmHeader />
            <StyledArrowDiv>
                <button onClick={() => navigate("/admin/jobs")} aria-label="Voltar para Minhas Vagas">
                    <img src={arrowIcon} alt="Seta para voltar" /> 
                    <ParagraphMenu font="var(--color-blue)"> Voltar </ParagraphMenu>
                </button>
            </StyledArrowDiv>
            <StyleMainAdm>
                <div className="form__div">
                    <form onSubmit={handleSubmit(onSubmit)} className="form">
                        <Title1 font="var(--color-blue)">Criar Vaga</Title1>

                        <Input 
                            className="style_input" 
                            type="text" 
                            placeholder="Cargo" 
                            error={errors.position} 
                            {...register("position")}
                        />

                        <Input 
                            className="style_input"  
                            type="number" 
                            placeholder="Salário (Opcional)" 
                            error={errors.sallary} 
                            {...register("sallary")}
                        />

                        <StyledTextArea 
                            placeholder="Descrição" 
                            {...register("description")}
                        ></StyledTextArea>

                        <div className="button__div">
                            <Button className="style__button" type="submit" aria-label="Criar Vaga">
                                <img className="button__img" src={buttonIcon} alt="Ícone do botão Criar Vaga"/> 
                                Criar vaga
                            </Button>
                        </div>
                    </form>
                </div>
            </StyleMainAdm>
            <Footer />
        </>
    );
};

