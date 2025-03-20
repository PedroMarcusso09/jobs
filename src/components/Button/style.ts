import styled from "styled-components";

interface ButtonProps {
  height?: string;
  width?: string;
  color?: "blue" | "white";
}


export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  border: 1px solid var(--color-blue);
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;

  background: ${(props) => (props.color === "blue" ? "var(--color-blue)" : "var(--color-white)")};
  color: ${(props) => (props.color === "blue" ? "var(--color-white)" : "var(--color-blue)")};
  border-radius: 255px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    color: var(--color-blue);
    border: 1px solid var(--color-blue);

    img {
      filter: invert(30%) sepia(90%) saturate(500%) hue-rotate(200deg);
    }
  }

  &:focus {
    outline: 2px solid var(--color-blue);
    outline-offset: 2px;
  }
`;


