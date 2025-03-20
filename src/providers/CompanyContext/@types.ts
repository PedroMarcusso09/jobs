import { Dispatch, ReactNode, SetStateAction } from "react";
import { LoginForm } from "../../Schema/LoginSchema";
import { RegisterForm } from "../../Schema/RegisterSchema";

export interface ICompanyContextProps {
    children: ReactNode;
}

export interface ICompanyRegister {
    id?: number;
    email: string;
    password: string;
    name: string;
    confirm: string;
}

export interface ICompanyLogin {
    accessToken: string;
    user: ICompanyRegister;
}

export interface IapplySubmit {
    jobId: number;
    userId: number;
    name: string;
    email: string;
    linkedin: string;
}

export interface IJobsList {
    id: number;
    userId: number;
    position: string;
    sallary: number;
    description: string;
    companyName?: string;
    user?: ICompanyRegister;
}

export interface ICompanyContext {
    company: ICompanyRegister | null;
    setCompany: Dispatch<SetStateAction<ICompanyRegister | null>>;

    isOpen: number | null;
    setIsOpen: Dispatch<SetStateAction<number | null>>;

    jobsList: IJobsList[];
    attJobList: () => void;

    applyJob: (formData: IapplySubmit) => Promise<void>;
    registerCompany: (formData: RegisterForm) => Promise<void>;
    loginCompany: (formData: LoginForm) => Promise<void>;
    logoutCompany: () => void;

    filteredJobs: IJobsList[];
    setFilteredJobs: Dispatch<SetStateAction<IJobsList[]>>;
    filterJob: (searchTerm: string) => Promise<void>; 
}
