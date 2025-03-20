import { CompanyContext } from "../../providers/CompanyContext";
import { useContext, useState ,useEffect} from "react";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { AboutDiv, JobListDiv, JobRealList, TopDivTitle } from "./style";
import { Label, Paragraph, Title1, Title3 } from "../../Styles/Typography";

const addIcon = "/images/plus.png";
const removeIcon = "/images/minus.png";
const home = "/images/home.png";

export const HomePage = () => {
  const { attJobList, jobsList, setIsOpen, isOpen } = useContext(CompanyContext);
  const [postId, setPostId] = useState<number | null>(null);

  useEffect(() => {
    attJobList();
  }, [attJobList]);

  return (
    <>
      <Header />
      
      <TopDivTitle>
        <Title1 className="smallText" font="var(--color-white)">
          Trabalho é na Jobs
        </Title1>
      </TopDivTitle>

      <AboutDiv>
        <div className="aboutTitleDiv">
          <Title1 className="smallText" font="var(--color-blue)">
            Sobre a Jobs
          </Title1>
          <Paragraph>
            A Jobs conecta talentos às melhores oportunidades do mercado. Nossa missão é 
            facilitar o recrutamento, proporcionando um ambiente intuitivo para empresas e 
            profissionais se conectarem de forma eficiente. Seja você um candidato em busca 
            do próximo desafio ou uma empresa à procura de talentos qualificados, aqui você 
            encontra a melhor experiência para alcançar seus objetivos.
          </Paragraph>
        </div>
        <img className="aboutImg" src={home} alt="Imagem sobre a empresa" />
      </AboutDiv>

      <JobListDiv>
        <Title1 className="smallText" font="var(--color-blue)">
          Confira nossas vagas
        </Title1>
        <JobRealList>
          {jobsList.map((item) => (
            <li className="listItem" key={item.id}>
              <img
                className="toggleIcon"
                onClick={() => setPostId((prev) => (prev === item.id ? null : item.id))}
                src={postId === item.id ? removeIcon : addIcon}
                alt={postId === item.id ? "Fechar detalhes" : "Abrir detalhes"}
              />
              <div className="allTextsItem">
                <div className="topItemDiv">
                  <div>
                    <Label>
                        <strong>{item.companyName}</strong>
                    </Label>

                    <Title3>{item.position}</Title3>
                  </div>
                  <Button onClick={() => setIsOpen((prev) => (prev === item.id ? null : item.id))}>
                    Candidatar-se
                  </Button>
                </div>
                {postId === item.id && <Paragraph>{item.description}</Paragraph>}
              </div>

              {isOpen === item.id && (
                <Modal
                    name={item.position}
                    company={typeof item.companyName === "string" ? item.companyName : "Empresa desconhecida"} 
                    jobId={item.id}
                    companyId={item.userId}
                />
            )}

            </li>
          ))}
        </JobRealList>
      </JobListDiv>

      <Footer position={"unset"} position2={"unset"} />
    </>
  );
};
