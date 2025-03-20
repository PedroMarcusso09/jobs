import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Paragraph, Title1 } from "../../Styles/Typography";
import { Footer } from "../../components/Footer";
import { LinksDiv, TitleDiv, GreetingDiv, AdminContainer, ContentWrapper } from "./style";
import { AdmHeader } from "../../components/AdminHeader";

export const AdminPage = () => {
  const [companyName, setCompanyName] = useState("Empresa");

  useEffect(() => {
    const storedCompanyName = localStorage.getItem("@COMPANY");
    if (storedCompanyName) {
      setCompanyName(storedCompanyName);
    }
  }, []);

  return (
    <AdminContainer>
      <AdmHeader />

      <ContentWrapper>
        <TitleDiv>
          <Title1 font="var(--color-blue)">{companyName}</Title1>
        </TitleDiv>

        <GreetingDiv>
          <Paragraph>Seja bem-vindo(a), selecione uma das opções abaixo:</Paragraph>
        </GreetingDiv>

        <LinksDiv>
          <Link className="linkEdit" to="/admin/jobs" aria-label="Acessar Minhas Vagas">Minhas vagas</Link>
          <Link className="linkEdit" to="/admin/applications" aria-label="Acessar Minhas Candidaturas">Minhas candidaturas</Link>
        </LinksDiv>
      </ContentWrapper>

      <Footer />
    </AdminContainer>
  );
};

