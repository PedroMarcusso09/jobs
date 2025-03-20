import { Link } from "react-router-dom";
import { AdmHeader } from "../../../components/AdminHeader";
import { Footer } from "../../../components/Footer";
import { Title1, ParagraphMenu, Title3, Paragraph } from "../../../Styles/Typography";
import { StyledMainDiv, StyleLinksDiv, StyledUl, StyledLi, StyledSpan, StyledDivTitle } from "./style";
import { useContext, useState } from "react";
import { AdmContext } from "../../../providers/AdmContext";

const plus = "/images/plus.png";
const menus = "/images/minus.png";

export const AdmApplications = () => {
    const { jobsApplications } = useContext(AdmContext); 
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleDetails = (id: number) => {
        setOpenId(prevId => (prevId === id ? null : id));
    };

    return (
        <>
            <AdmHeader />
            <StyledMainDiv>
                <StyleLinksDiv>
                    <ParagraphMenu>Minhas candidaturas</ParagraphMenu>
                    <Link className="linkEdit" to={"/admin/jobs"}>Minhas vagas</Link>
                </StyleLinksDiv>

                <Title1 font="var(--color-blue)" className="Title">Minhas candidaturas</Title1>

                <StyledUl>
                    {jobsApplications.length > 0 ? (
                        jobsApplications.map((item) => (
                            <StyledLi key={item.id}>
                                <StyledDivTitle>
                                    <Title3>{item.name} - Desenvolvedor Full Stack Jr</Title3>
                                    <img
                                        onClick={() => toggleDetails(item.id)}
                                        src={openId === item.id ? menus : plus}
                                        alt={openId === item.id ? "Fechar detalhes" : "Abrir detalhes"}
                                        style={{ cursor: "pointer" }} 
                                    />
                                </StyledDivTitle>

                                {openId === item.id && (
                                    <>
                                        <Paragraph className="Text__Details">Detalhes da candidatura:</Paragraph>
                                        <Paragraph className="Email">E-mail: <StyledSpan>{item.email}</StyledSpan></Paragraph>
                                        <a className="Href" href={item.linkedin} target="_blank" rel="noopener noreferrer">
                                            Linkedin
                                        </a>
                                    </>
                                )}
                            </StyledLi>
                        ))
                    ) : (
                        <Paragraph className="Text__Details">Nenhuma candidatura encontrada.</Paragraph>
                    )}
                </StyledUl>
            </StyledMainDiv>
            <Footer position={"unset"} position2={"unset"} />
        </>
    );
};

