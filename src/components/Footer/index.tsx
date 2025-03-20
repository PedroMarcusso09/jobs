import { memo } from "react";
import { Paragraph } from "../../Styles/Typography";
import { StyledFooter } from "./style";

interface IFooterProps {
  position?: "fixed" | "absolute" | "relative" | "unset";
  position2?: string; 
}

const FooterComponent: React.FC<IFooterProps> = ({ position = "unset", position2 }) => {
  return (
    <StyledFooter $position={position} $position2={position2}>
      <img src="/images/logo.png" alt="Logo da Jobs Brasil" />
      <Paragraph font="var(--color-white)">
        Todos os direitos reservados - Jobs Brasil
      </Paragraph>
    </StyledFooter>
  );
};

export const Footer = memo(FooterComponent);
Footer.displayName = "Footer";



