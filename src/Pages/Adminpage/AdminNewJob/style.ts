import { styled } from "styled-components";

const formMaxWidth = "660px";

export const StyledArrowDiv = styled.div`
    margin: 0 auto;
    width: 70%;
    display: flex;
    align-items: center;

    button {
        display: flex;
        align-items: center;
        background-color: var(--color-white);
        cursor: pointer;
        gap: 10px;
        border: none;
        padding: 8px 12px;
        font-weight: 600;
        transition: background-color 300ms ease-in-out;

        &:hover {
            background-color: var(--color-lightblue);
            border-radius: 8px;
        }
    }

    img {
        width: 20px;
        height: auto;
    }
`;

export const StyleMainAdm = styled.main`
    max-width: 1200px;
    width: 100%;
    height: 70vh;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .form__div {
        height: 100%;
        width: 70%;
        display: flex;
        justify-content: center;

        .form {
            height: 100%;
            width: 85%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }

        .style_input {
            max-width: ${formMaxWidth};
            width: 100%;
            flex-shrink: 0;
        }

        .button__div {
            width: 92%;
            display: flex;
            justify-content: flex-end;
        }
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
`;

export const StyledTextArea = styled.textarea`
    max-width: ${formMaxWidth};
    width: 98.2%;
    padding: 1rem;
    max-height: 200px;
    height: 100%;
    border-radius: 40px;
    border: solid 1px var(--color-blue);
    color: var(--color-black);
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    cor: var(--color-black);
    resize: none;
    
    &::placeholder {
        color: var(--color-black);
        opacity: 0.5;
        text-align: start;
                font-weight: 700; 
    }
`;

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 10px 20px;
    border-radius: 255px;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    background: var(--color-blue);
    color: var(--color-white);
    border: 2px solid var(--color-blue);
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

    &:hover {
        background-color: transparent;
        color: var(--color-blue);
    }

    .button__img {
        margin-right: 0.7rem;
        filter: brightness(0) invert(1);
        transition: filter 300ms ease-in-out;
    }

    &:hover .button__img {
        filter: brightness(0) invert(0);
    }
`;
