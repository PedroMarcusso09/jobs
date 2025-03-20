import styled from "styled-components";

export const StyledFooter = styled.footer<{ $position?: string; $position2?: string }>`
  position: ${({ $position }) => $position || "relative"};
  width: 100%;
  min-height: 100px;
  padding: 20px 10vw;
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    min-height: 100px;
    text-align: left;
  }

  @media (max-width: 499px) {
    text-align: center;
  }
 
`;




