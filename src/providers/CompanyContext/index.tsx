import { createContext, useCallback, useState } from "react";
import { api } from "../../services/api";
import { 
    ICompanyContext, 
    ICompanyContextProps, 
    ICompanyRegister, 
    ICompanyLogin, 
    IapplySubmit, 
    IJobsList 
} from "./@types";
import { LoginForm } from "../../Schema/LoginSchema";
import { RegisterForm } from "../../Schema/RegisterSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CompanyContext = createContext<ICompanyContext>({} as ICompanyContext);

export const CompanyProvider = ({ children }: ICompanyContextProps) => {
    const [company, setCompany] = useState<ICompanyRegister | null>(null);
    const [isOpen, setIsOpen] = useState<number | null>(null);
    const [jobsList, setJobsList] = useState<IJobsList[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<IJobsList[]>([]);
    const navigate = useNavigate();

    const attJobList = useCallback(async () => {
        try {
            const response = await api.get<IJobsList[]>("/jobs");
    
            const jobsWithCompany = await Promise.all(
                response.data.map(async (job) => {
                    if (job.userId) {
                        try {
                            const userResponse = await api.get(`/users/${job.userId}`);
                            return { ...job, companyName: userResponse.data.name };
                        } catch {
                            return { ...job, companyName: "Empresa não encontrada" };
                        }
                    }
                    return { ...job, companyName: "Sem empresa vinculada" };
                })
            );

            setJobsList((prevJobs) => {
                if (JSON.stringify(prevJobs) !== JSON.stringify(jobsWithCompany)) {
                    return jobsWithCompany;
                }
                return prevJobs;
            });

        } catch {
            toast.error(" Erro ao carregar vagas.");
        }
    }, []);

    const applyJob = async (formData: IapplySubmit) => {
        try {
            await api.post("/applications", formData);
            toast.success(" Candidatura realizada com sucesso!");
        } catch {
            toast.error(" Erro ao se candidatar. Tente novamente.");
        }
    };

    const filterJob = async (searchTerm: string) => {
        try {
            const { data } = await api.get(`/jobs?position_like=${searchTerm}`);
            setFilteredJobs(data);
        } catch {
            toast.error(" Erro ao buscar vagas.");
        }
    };

    const registerCompany = async (formData: RegisterForm) => {
        try {
            await api.post("/users", formData);
            toast.success(" Empresa registrada com sucesso!");
        } catch {
            toast.error(" Erro ao registrar empresa.");
        }
    };

    const loginCompany = async (formData: LoginForm) => {
        try {
            const { data } = await api.post<ICompanyLogin>("/login", formData);
            setCompany(data.user);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", JSON.stringify(data.user.id));
            localStorage.setItem("@COMPANY", data.user.name);
            toast.success(" Login realizado com sucesso!");
            navigate("/admin");
        } catch {
            toast.error(" Erro ao fazer login. Verifique suas credenciais.");
        }
    };

    const logoutCompany = () => {
        setCompany(null);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        localStorage.removeItem("@COMPANY");
        navigate("/");
        toast.success(" Logout realizado.");
    };

    return (
        <CompanyContext.Provider value={{
            company, setCompany, isOpen, setIsOpen, 
            jobsList, attJobList, applyJob, registerCompany, 
            loginCompany, logoutCompany, filteredJobs, 
            setFilteredJobs, filterJob
        }}>
            {children}
        </CompanyContext.Provider>
    );
};

