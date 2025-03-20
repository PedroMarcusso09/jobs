import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdmContext } from "../../../providers/AdmContext";
import { Paragraph, ParagraphMenu, Title1, Title3 } from "../../../Styles/Typography";
import { Footer } from "../../../components/Footer";
import { JobsList, LinksDiv, TitleDiv } from "./style";
import { AdmHeader } from "../../../components/AdminHeader";

const editIcon = "/images/button_edit.png";
const trashIcon = "/images/button_delete.png";

export const AdmJobs = () => {
    const { setJobId, getCompanyJobs, jobsList, deleteJob, navigate } = useContext(AdmContext);

    useEffect(() => {
        getCompanyJobs();
    }, [getCompanyJobs]);

    const goToEdit = (id: number) => {
        setJobId(id);
        navigate("/admin/edit");
    };

    const handleDeleteJob = (id: number) => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir esta vaga?");
        if (confirmDelete) {
            deleteJob(id);
        }
    };

    return (
        <>
            <AdmHeader />
            <LinksDiv>
                <ParagraphMenu font="var(--color-blue)">Minhas vagas</ParagraphMenu>
                <Link className="linkEdit" to={"/admin/applications"}>Minhas candidaturas</Link>
            </LinksDiv>
            <TitleDiv>
                <Title1 font="var(--color-blue)">Minhas vagas</Title1>
                <Link className="linkCreate" to={"/admin/newjob"}><span className="plusSpan">+</span> Criar vaga</Link>
            </TitleDiv>
            <JobsList>
                {jobsList?.length > 0 ? (
                    jobsList.map(item => (
                        <li className="listItem" key={item.id}>
                            <div className="jobDetails">
                                <Title3>{item.position}</Title3> 
                                <ParagraphMenu>Salário: R$ {item.sallary ? item.sallary.toLocaleString('pt-BR') : "Não informado"}</ParagraphMenu>
                                <Paragraph>{item.description}</Paragraph>
                            </div>
                            <div className="innerDiv">
                                <img 
                                    className="innerDivImg"
                                    onClick={() => goToEdit(item.id)}
                                    src={editIcon}
                                    alt="Editar vaga"
                                    title="Editar"
                                    style={{ cursor: "pointer" }}
                                />
                                <img 
                                    className="innerDivImg"
                                    onClick={() => handleDeleteJob(item.id)}
                                    src={trashIcon}
                                    alt="Excluir vaga"
                                    title="Excluir"
                                    style={{ cursor: "pointer" }}
                                />
                            </div>
                        </li>
                    ))
                ) : (
                    <Title3>Nenhuma vaga criada até o momento</Title3>
                )}
            </JobsList>

            {jobsList?.length && jobsList.length <= 4 ? <Footer /> : <Footer position="unset" />}
        </>
    );
};

