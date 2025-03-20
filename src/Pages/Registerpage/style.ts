import styled from "styled-components";

export const StyledRegisterPageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const StyledFormSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 70vh;
    padding: 0 20px;
    
    --gap-default: 3rem;
    gap: var(--gap-default);
    
    flex-grow: 1;

    @media (max-width: 768px) {
        --gap-default: 2rem;
    }

    @media (max-width: 480px) {
        --gap-default: 1.5rem;
        min-height: 80vh;
    }
`;


export const StyledForm = styled.form`
    width: 100%;
    max-width: 518px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 15px;
    
    --gap-default: 2rem;
    gap: var(--gap-default);

    @media (max-width: 768px) {
        --gap-default: 1.5rem;
    }

    @media (max-width: 480px) {
        --gap-default: 1rem;
    }
`;

export const StyledDiv = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;

    .back-text {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .link-text {
        text-decoration: none;
        color: var(--color-blue);
        cursor: pointer; 
    }
`;

export const StyledButton = styled.button`
    margin-bottom: 15rem;
    padding: 15px 25px;
    width: 100%;
    max-width: 200px;
    margin-top: 1rem;
    
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    color: var(--color-white);
        
    background-color: var(--color-blue);
    border: 1px solid var(--color-blue);
    border-radius: 255px;
    cursor: pointer;
    transition: background-color 300ms ease, color 300ms ease;

    &:hover {
        color: var(--color-blue);
        background-color: var(--color-white);
    }

    @media (max-width: 480px) {
        max-width: 180px;
        font-size: 15px;
        padding: 12px 20px;
    }
`;

