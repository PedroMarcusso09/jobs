import { Link } from "react-router-dom";
import { InnerDiv, StyledDiv, StyledImg } from "./style";
import { FC } from "react";

interface HeaderProps {
  loginlinkcolor?: string;
}

const images = {
  logo: "/images/logo.png",
  search: "/images/search.png",
};

export const Header: FC<HeaderProps> = ({ loginlinkcolor = "defaultColor" }) => {
  return (
    <StyledDiv>
      <Link to={"/"} aria-label="Página inicial">
        <StyledImg src={images.logo} alt="Imagem do logo Jobs" role="img" />
      </Link>
      <InnerDiv loginlinkcolor={loginlinkcolor}>
        <Link className="loginLink" to={"/login"} aria-label="Acesso para empresas">
          Acesso empresa
        </Link>
        <Link className="invisible" to={"/"} aria-label="Confira nossas vagas">
          Confira nossas vagas
        </Link>
        <Link to={"/search"} aria-label="Pesquisar vagas">
          <img className="magnifier" src={images.search} alt="Lupa de pesquisa" role="img" />
        </Link>
      </InnerDiv>
    </StyledDiv>
  );
};
