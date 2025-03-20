import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledInput, StyledParagraph } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: { message?: string }; 
  label?: string;
}

export const Input = forwardRef(
  ({ error, label, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        {label && <p>{label}</p>}
        <StyledInput ref={ref} {...rest} />
        {error?.message && <StyledParagraph>{error.message}</StyledParagraph>}
      </>
    );
  }
);


Input.displayName = "Input";

