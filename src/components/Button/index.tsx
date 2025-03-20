import React, { memo } from "react";
import { Button as StyledButton } from "../Button/style";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "blue" | "white";
  height?: string;
  width?: string;
}

export const Button: React.FC<ButtonProps> = memo(({ 
  children, 
  color = "blue", 
  height, 
  width, 
  ...rest 
}) => (
  <StyledButton color={color} height={height} width={width} {...rest}>
    {children}
  </StyledButton>
));

Button.displayName = "Button";

