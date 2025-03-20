import { NavigateFunction } from "react-router-dom";

export interface IAdmContextProps {
    children: React.ReactNode;
}

export interface IJobItem {
    id: number;
    position: string;
    sallary?: number; 
    description: string;
}

export interface IJobApplications {
    id: number;
    jobId: number;
    name: string;
    email: string;
    linkedin: string;
}

export interface IJobCreate {
    position: string;
    sallary?: number | undefined;
    description: string;
}

export interface IAdmContext {
    jobId: number | null;
    jobPosition?: string; 
    setJobId: React.Dispatch<React.SetStateAction<number | null>>;
    jobsList: IJobItem[];
    navigate: NavigateFunction;
    getCompanyJobs: () => void;
    deleteJob: (id: number) => Promise<void>;
    jobsApplications: IJobApplications[];
    editJob: (jobId: number, position: string, salary: number, description: string) => Promise<void>;
    registerJob: (formData: IJobCreate) => Promise<void>;
}
