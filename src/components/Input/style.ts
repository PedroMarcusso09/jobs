import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    max-width: 639px; 
    height: clamp(50px, 10vw, 66px); 

    border-radius: 40px;
    border: solid 1px var(--color-blue);
    padding: 0 clamp(1rem, 3vw, 1.5rem); 

    font-family: "Montserrat", sans-serif;
    font-size: 16px; 
    font-weight: 400;
    cor: var(--color-black);

    @media (max-width: 600px) {
        max-width: 100%; 
        height: 55px;
        padding: 0 1rem;
    }

        &::placeholder {
        font-weight: 700; 
    }
`;

export const StyledParagraph = styled.p`
    color: #E63946; 
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: clamp(14px, 1.8vw, 18px); 
    line-height: 1.4; 
    margin-top: 5px; 
`;

