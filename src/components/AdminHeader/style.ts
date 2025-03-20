import { styled } from "styled-components";

export const StyledHeader = styled.header`
    height: 90px;
    padding: 0 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navMenu {
        display: flex;
        gap: clamp(10px, 2vw, 30px); 
    }

    .linkAdm {
        padding: clamp(10px, 1vw, 14px); 
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: clamp(12px, 1vw, 14px);
        line-height: 20px;
        color: var(--color-white);
        background-color: var(--color-blue);
        border: 1px solid var(--color-blue);
        border-radius: 50%;
        transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

        &:hover {
            background-color: transparent;
            color: var(--color-blue);
        }
    }

    .logOutBtn {
        padding: clamp(8px, 1vw, 10px) clamp(20px, 2vw, 30px);
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: clamp(12px, 1vw, 14px);
        line-height: 20px;
        color: var(--color-blue);
        background-color: transparent;
        border: 1px solid var(--color-blue);
        border-radius: 255px;
        cursor: pointer;
        transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

        &:hover {
            background-color: var(--color-blue);
            color: var(--color-white);
        }
    }
`;
