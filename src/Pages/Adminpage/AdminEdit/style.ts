import styled from "styled-components";

export const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    padding: 0 10vw;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        padding: 0 8vw;
    }

    @media (max-width: 768px) {
        padding: 0 5vw;
    }

    @media (max-width: 480px) {
        padding: 0 3vw;
    }
`;

export const EditPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
`;


export const TitleContainer = styled.div`
    align-self: flex-start;
    margin-top: 1.5rem;
`;


export const EditPageInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 20px;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`;

export const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    @media (max-width: 1024px) {
        width: 90%;
        gap: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
        gap: 15px;
    }
`;

export const EditPageInput = styled.div`
    display: flex;
    flex-direction: column;

    input, textarea {
        width: 100%;
        max-width: 639px;
        min-width: 280px;
        padding: 10px;
        border-radius: 30px;
        border: 1px solid var(--color-blue);
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
    }

    textarea {
        height: clamp(120px, 15vh, 236px);
        resize: none;
    }

    @media (max-width: 768px) {
        input, textarea {
            font-size: 14px;
            max-width: 100%;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;

    button {
        width: clamp(150px, 20vw, 180px);
        height: 50px;

        @media (max-width: 768px) {
            width: 90%;
            max-width: 300px;
        }
    }
`;


