import styled from "styled-components";

const buttonSize = "66px";
const smallButtonSize = "55px";
const borderRadius = "25px";
const textFont = `"Montserrat", sans-serif`;

export const StyledMainDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media (max-width: 768px) {
        padding-bottom: 80px;
    }
`;

export const StyledTitle = styled.h1`
    color: var(--color-blue);
    font-size: clamp(1.8rem, 2.5vw, 2.5rem);
    text-align: center;
    margin-bottom: 15px; 

    @media (max-width: 480px) {
        font-size: 1.5rem; 
    }
`;

export const StyledParagraphMenu = styled.p`
    font-size: 1rem;
    text-align: center;
    color: var(--color-gray);
    margin-bottom: 10px;

    @media (max-width: 480px) {
        font-size: 0.9rem; 
    }
`;

export const StyledForm = styled.form`
    width: min(90%, 928px);
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    justify-content: center; 

    @media (max-width: 768px) {
        flex-direction: column; 
        gap: 15px;
    }
`;

export const StyledImgRetangle = styled.img`
    width: ${buttonSize};
    height: ${buttonSize};

    @media (max-width: 768px) {
        width: ${smallButtonSize};
        height: ${smallButtonSize};
    }
`;

export const StyledImgLupa = styled.img`
  width: clamp(25px, 5vw, 35px);
  height: clamp(25px, 5vw, 35px);
  transition: filter 0.3s ease-in-out;

  filter: brightness(0) invert(1);

  .hovered & {
    filter: invert(20%) sepia(80%) saturate(2000%) hue-rotate(190deg);
  }
`;


export const StyledDivJobs = styled.div`
    width: 100%;
    max-width: 1105px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    flex-grow: 1;
    min-height: 60vh;

    @media (max-width: 768px) {
        padding: 5px;
        min-height: 50vh;
    }
`;

export const StyledNoResults = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh; 
    text-align: center;

    @media (max-width: 768px) {
        height: 40vh;
    }
`;

export const StyledButtonApply = styled.button`
    width: clamp(150px, 10vw, 197px);
    height: clamp(50px, 8vw, 58px);
    background-color: transparent;
    border: 1px solid var(--color-blue);
    border-radius: ${borderRadius};

    font-family: ${textFont};
    font-weight: 700;
    font-size: clamp(14px, 1vw, 17px);
    line-height: 20px;
    color: var(--color-blue);
    cursor: pointer;
    transition: background-color 300ms ease, color 300ms ease;

    &:hover {
        color: var(--color-white);
        background-color: var(--color-blue);
    }

    @media (max-width: 480px) {
        width: 100%; 
        height: 50px;
    }
`;





