import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { StyledHeader } from "./style";
import { AdmContext } from "../../providers/AdmContext";
import { toast } from "react-toastify";

const jobsIcon = "/images/logo.png";

export const AdmHeader = () => {
    const { navigate } = useContext(AdmContext);
    const [companyName, setCompanyName] = useState<string | null>(null);

    useEffect(() => {
        setCompanyName(localStorage.getItem("@COMPANY"));
    }, []);

    const logOut = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@COMPANY");
        localStorage.removeItem("@USERID");
        toast.success("LogOut realizado");

        navigate("/");
    };

    return (
        <StyledHeader>
            <img src={jobsIcon} alt="Ícone da Kenzie Jobs" />

            <nav className="navMenu">
                {companyName && (
                    <Link className="linkAdm" to="/admin" aria-label="Acessar painel administrativo">
                        {companyName.substring(0, 2).toUpperCase()}
                    </Link>
                )}
                <button onClick={logOut} className="logOutBtn" aria-label="Fazer logout">
                    Sair
                </button>
            </nav>
        </StyledHeader>
    );
};

