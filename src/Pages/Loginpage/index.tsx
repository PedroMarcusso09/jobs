import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { useContext, useState } from "react";
import { CompanyContext } from "../../providers/CompanyContext/index.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm, loginFormSchema } from "../../Schema/LoginSchema.ts";
import { Header } from "../../components/Header/index.tsx";
import { Footer } from "../../components/Footer/index.tsx";
import { StyleMain } from "./style.ts";
import { Paragraph, Title1 } from "../../Styles/Typography.ts";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/style.ts";

const loginImage = "/images/login.png"; 

export const LoginPage = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
        resolver: zodResolver(loginFormSchema)
    });

    const { loginCompany } = useContext(CompanyContext);
    const [errorMessage, setErrorMessage] = useState<string | null>(null); 

    const submitLogin: SubmitHandler<LoginForm> = async (formData) => {
        try {
            setErrorMessage(null);
            await loginCompany(formData);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorMessage(error.message); 
            } else {
                setErrorMessage("Erro ao fazer login. Verifique suas credenciais.");
            }
        }
    };
    

    return (
        <>
            <Header />

            <StyleMain>
                <div className="main__div">
                    <div className="div__login-img">
                        <img src={loginImage} alt="Tela de login" /> 
                    </div>
                    <div className="login__box">
                        <Title1 className="title-login">Faça Login</Title1>

                        {errorMessage && <Paragraph className="error-message">{errorMessage}</Paragraph>} 

                        <form onSubmit={handleSubmit(submitLogin)}>
                            <Input className="input-style" placeholder="E-mail" error={errors.email} {...register("email")} />
                            <Input className="input-style" placeholder="Senha" type="password" error={errors.password} {...register("password")} />

                            <div className="button_div">
                            <Button 
                                type="submit" 
                                disabled={isSubmitting} 
                                style={{ width: "117px", height: "58px" }} 
                            >
                                {isSubmitting ? "Entrando..." : "Entrar"}
                            </Button>

                            </div>

                            <div className="span__div">
                                <Paragraph className="span-text">
                                    Não possui cadastro? <Link className="link-text" to={"/register"}>Cadastre-se</Link>
                                </Paragraph>
                            </div>
                        </form>
                    </div>
                </div>
            </StyleMain>

            <Footer />
        </>
    );
};

