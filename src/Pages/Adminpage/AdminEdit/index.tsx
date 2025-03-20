import React, { useState, useMemo, useCallback, ChangeEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ParagraphMenu, Title2 } from "../../../Styles/Typography";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { AdmHeader } from "../../../components/AdminHeader";
import { AdmContext } from "../../../providers/AdmContext";
import { 
  ButtonContainer,
  EditPageContainer,
  EditPageInputs,
  StyledColumn,
  EditPageInput,
  TitleContainer,
  PageContainer
} from "./style";

const seta = "/images/arrow.png"; 

export const AdmEdit: React.FC = () => {
  const { jobId, jobsList, editJob } = useContext(AdmContext);
  const navigate = useNavigate();

  const job = useMemo(() => jobsList.find((job) => job.id === jobId), [jobId, jobsList]);

  const [position, setPosition] = useState(job?.position || "");
  const [salary, setSalary] = useState(job?.sallary ? job.sallary.toString() : "");
  const [description, setDescription] = useState(job?.description || "");

  const handlePositionChange = (event: ChangeEvent<HTMLInputElement>) => setPosition(event.target.value);
  const handleSalaryChange = (event: ChangeEvent<HTMLInputElement>) => setSalary(event.target.value);
  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => setDescription(event.target.value);

  const handleEdit = async () => {
    if (!position.trim() || !description.trim()) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    if (jobId !== null) {
      try {
        await editJob(jobId, position, Number(salary) || 0, description);
        alert("Vaga editada com sucesso!");
        navigate("/admin/applications"); 
      } catch (error) {
        alert("Erro ao editar a vaga. Tente novamente.");
      }
    }
  };

  const handleGoBack = useCallback(() => navigate("/admin/applications"), [navigate]);

  return (
    <>
      <AdmHeader />
      <PageContainer>
        <div className="edit-page">
          <div style={{ display: "flex", alignItems: "center", marginTop: "1rem", cursor: "pointer" }} onClick={handleGoBack}>
            <img src={seta} alt="Voltar" style={{ height: "20px", marginRight: "0.5rem", cursor: "pointer" }} />
            <ParagraphMenu font="var(--color-blue)" style={{ cursor: "pointer" }}>voltar</ParagraphMenu>
          </div>

          <EditPageContainer>
            <TitleContainer>
              <Title2 font="var(--color-blue)" style={{ marginBottom: "5rem", marginTop: "5rem" }}>
                Editando: {position || "Título não encontrado"}
              </Title2>
            </TitleContainer>

            <EditPageInputs>
              <StyledColumn>
                <EditPageInput>
                  <Input
                    type="text"
                    id="position"
                    name="position"
                    placeholder="Cargo"
                    value={position}
                    onChange={handlePositionChange}
                  />
                </EditPageInput>
                <EditPageInput>
                  <Input
                    type="number"
                    id="salary"
                    name="salary"
                    placeholder="Salário (opcional)"
                    value={salary}
                    onChange={handleSalaryChange}
                  />
                </EditPageInput>
              </StyledColumn>
              <StyledColumn>
                <EditPageInput>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Descrição"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </EditPageInput>
              </StyledColumn>
            </EditPageInputs>
            <ButtonContainer>
              <Button onClick={handleEdit}>Editar Vaga</Button>
            </ButtonContainer>
          </EditPageContainer>
        </div>
      </PageContainer>
      <Footer position="fixed" />
    </>
  );
};



