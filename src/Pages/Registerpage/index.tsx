import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../../components/Header/index";
import { registerFormSchema } from "../../Schema/RegisterSchema";
import { CompanyContext } from "../../providers/CompanyContext/index";
import { ICompanyRegister } from "../../providers/CompanyContext/@types";
import "react-toastify/dist/ReactToastify.css";
import { Title1, ParagraphBold } from "../../Styles/Typography";
import { StyledButton, StyledDiv, StyledForm, StyledFormSection, StyledRegisterPageContainer } from "./style";
import { Input } from "../../components/Input/index";
import { Footer } from "../../components/Footer/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const arrow = "/images/arrow.png";

interface FormData extends ICompanyRegister {
  password: string;
}

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerCompany } = useContext(CompanyContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      await registerCompany(formData);
      toast.success("Cadastro realizado com sucesso!");
      reset();
      navigate("/login"); 
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <StyledRegisterPageContainer>
      <Header />
      
      <StyledDiv>
        <ParagraphBold className="back-text" onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
          <img src={arrow} alt="Flecha roxa para esquerda" />
          <span className="link-text">Voltar</span>
        </ParagraphBold>
      </StyledDiv>

      <StyledFormSection>
        <Title1 font="var(--color-blue)">Cadastre-se</Title1>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" {...register("name")} placeholder="Nome da empresa" error={errors.name} />
          <Input type="email" {...register("email")} placeholder="E-mail" error={errors.email} />
          <Input type="password" {...register("password")} placeholder="Senha" error={errors.password} />
          <Input type="password" {...register("confirm")} placeholder="Confirmar senha" error={errors.confirm} />

          <StyledButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Cadastrar-se"}
          </StyledButton>
        </StyledForm>
      </StyledFormSection>

      <Footer position="unset" />
    </StyledRegisterPageContainer>
  );
};


