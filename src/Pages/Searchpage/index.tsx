import { useState, ChangeEvent, FormEvent } from "react";
import { Title1, ParagraphMenu, Paragraph, Title2, Title3, Label, ParagraphMenu2 } from "../../Styles/Typography";
import { StyledForm, StyledImgLupa, StyledMainDiv, StyledNoResults } from "./style";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {  Input } from "../../components/Input";
import { JobRealList } from "../Homepage/style";
import { Button } from "../../components/Button";

interface Job {
  userId: number;
  id: number;
  position: string;
  sallary: number;
  description: string;
  companyName?: string;
}

const Lupa = "/images/search2.png";
const plus = "/images/plus.png";
const minus = "/images/minus.png";

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [jobs, setJobs] = useState<Job[]>([]);
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchTerm.trim()) return;

    setIsLoading(true);

    try {
      const response = await fetch(`https://kenzie-job-api.onrender.com/jobs?position_like=${searchTerm}`);
      const jobsData = await response.json();

      const jobsWithCompanies = await Promise.allSettled(
        jobsData.map(async (job: Job) => {
          if (job.userId) {
            try {
              const userResponse = await fetch(`https://kenzie-job-api.onrender.com/users/${job.userId}`);
              const userData = await userResponse.json();
              return { ...job, companyName: userData.name };
            } catch {
              return { ...job, companyName: "Empresa não encontrada" };
            }
          }
          return { ...job, companyName: "Empresa não informada" };
        })
      );

      setJobs(jobsWithCompanies.map(result => result.status === "fulfilled" ? result.value : null).filter(Boolean) as Job[]);
    } catch (error) {
      console.error("Erro ao buscar vagas:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleDescription = (jobId: number) => {
    setExpandedJobId(prev => (prev === jobId ? null : jobId));
  };

  const handleApplyJob = (jobId: number) => {
    console.log(`Candidatando-se à vaga de emprego com ID ${jobId}`);
  };

  return (
    <>
      <Header />
      <StyledMainDiv>
        <Title1 font="var(--color-blue)" style={{ marginBottom: "50px", marginTop: "20px" }}>
          Busca de vagas
        </Title1>

        <ParagraphMenu style={{ marginRight: "80px" }}>Digite o que você está procurando:</ParagraphMenu>

        <StyledForm style={{ marginTop: "20px" }} onSubmit={handleSearchSubmit}>
          <Input
            type="text"
            placeholder="Pesquisa"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Button style={{ width: "66px", height: "66px", borderRadius: "255px"}} type="submit" aria-label="Buscar vagas">
            <StyledImgLupa src={Lupa} alt="Ícone de lupa" />
          </Button>
        </StyledForm>

        {searchTerm && (
          <>
            <ParagraphMenu2 style={{ marginTop: "40px", marginRight: "80px", marginBottom: "60px" }}>
              Resultados de busca para: <span style={{ fontWeight: "bold" }}>{searchTerm}</span>
            </ParagraphMenu2>

            <JobRealList>
              {isLoading ? (
                <Title2>Aguarde... <Paragraph>Buscando vagas.</Paragraph></Title2> 
              ) : jobs.length > 0 ? (
                jobs.map((job) => (
                  <li className="listItem" key={job.id}>
                    <img
                      className="toggleIcon"
                      onClick={() => handleToggleDescription(job.id)}
                      src={expandedJobId === job.id ? minus : plus}
                      alt="Alternar descrição"
                    />
                    <div className="allTextsItem">
                      <div className="topItemDiv">
                        <div>
                          <Label><strong>{job.companyName}</strong></Label>
                          <Title3>{job.position}</Title3>
                        </div>
                        <Button className="applyBtn" onClick={() => handleApplyJob(job.id)} aria-label={`Candidatar-se à vaga ${job.position}`}>
                          Candidatar-se
                        </Button>
                      </div>
                      {expandedJobId === job.id && <Paragraph>{job.description}</Paragraph>}
                    </div>
                  </li>
                ))
              ) : (
                <StyledNoResults>
                  <Title2>Desculpe :(</Title2>
                  <Paragraph>Nenhum resultado encontrado.</Paragraph>
                </StyledNoResults>
              )}
            </JobRealList>
          </>
        )}

      </StyledMainDiv>
      <Footer />
    </>
  );
};

