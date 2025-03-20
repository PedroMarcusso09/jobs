import { createContext, useEffect, useState, useCallback } from "react";
import { IAdmContext, IAdmContextProps, IJobItem, IJobApplications, IJobCreate } from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RegisterJobForm } from "../../Schema/NewJobSchema";

export const AdmContext = createContext<IAdmContext>({} as IAdmContext);

export const AdmProvider = ({ children }: IAdmContextProps) => {
    const [jobId, setJobId] = useState<number | null>(null);
    const [jobsList, setJobsList] = useState<IJobItem[]>([]);
    const [jobsApplications, setJobsApplications] = useState<IJobApplications[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getApplications = async () => {
            try {
                const userId = localStorage.getItem("@USERID");
                const response = await api.get("/applications", {
                    params: { userId, _expand: "job" }
                });
                setJobsApplications(response.data);
            } catch (error) {
                console.error("❌ Erro ao carregar candidaturas:", error);
            }
        };
        getApplications();
    }, []);

    const getCompanyJobs = useCallback(async () => {
        const token = localStorage.getItem("@TOKEN");
        const companyId = localStorage.getItem("@USERID");

        if (!token || !companyId) {
            toast.error("Erro: Token ou ID da empresa não encontrados!");
            return;
        }

        const config = { headers: { Authorization: `Bearer ${token}` } };

        try {
            const response = await api.get(`/users/${companyId}/jobs`, config);
            setJobsList(response.data);
        } catch (error) {
            console.error(" Erro ao buscar vagas:", error);
        }
    }, []);

    const deleteJob = async (id: number) => {
        const token = localStorage.getItem("@TOKEN");

        if (!token) {
            toast.error("Erro: Token não encontrado!");
            return;
        }

        const config = { headers: { Authorization: `Bearer ${token}` } };

        try {
            await api.delete(`/jobs/${id}`, config);
            toast.success("Vaga deletada");
            await getCompanyJobs();
        } catch (error) {
            toast.error("Erro ao deletar vaga. Tente novamente.");
        }
    };

    const registerJob = async (formData: RegisterJobForm) => {
        const token = localStorage.getItem("@TOKEN");
        const userId = localStorage.getItem("@USERID");

        if (!token || !userId) {
            toast.error("Erro: Token ou ID da empresa não encontrados!");
            return;
        }

        const config = { headers: { Authorization: `Bearer ${token}` } };

        try {
            await api.post<IJobCreate>("/jobs/", {
                position: formData.position,
                sallary: Number(formData.sallary),
                description: formData.description,
                userId: Number(userId)
            }, config);

            toast.success("Vaga registrada com sucesso");
            await getCompanyJobs();
        } catch (error) {
            toast.error("Erro ao criar vaga. Tente novamente.");
        }
    };


    const editJob = async (jobId: number, position: string, salary: number, description: string) => {
        const token = localStorage.getItem("@TOKEN");
        const userId = localStorage.getItem("@USERID");
    
        if (!token || !userId) {
            toast.error("Erro: Token ou ID da empresa não encontrados!");
            return;
        }
    
        const config = { 
            method: "PUT",
            headers: { 
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ position, sallary: salary, description, userId: Number(userId) }),
        };
    
        try {
            const response = await fetch(`/jobs/${jobId}`, config);
            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${await response.text()}`);
            }
            toast.success("Vaga editada com sucesso!");
            await getCompanyJobs();
            navigate("/admin/jobs");
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("Erro desconhecido ao editar a vaga.");
            }
        }
    };
    

    return (
        <AdmContext.Provider value={{ setJobId, getCompanyJobs, jobsList, deleteJob, navigate, jobId, registerJob, jobsApplications, editJob }}>
            {children}
        </AdmContext.Provider>
    );
};

