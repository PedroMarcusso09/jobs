import { styled } from "styled-components";

export const StyledMainDiv = styled.div`
    padding: 30px 10vw;
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    flex-grow: 1;
`;

export const StyleLinksDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 2rem;

    .linkEdit {
        text-decoration: none;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        color: var(--color-blue);
        transition: color 300ms ease; 

        &:hover {
            color: var(--color-dark-blue);
        }
    }
`;

export const StyledSpan = styled.span`
    font-weight: 700;
    font-size: 18px;
    line-height: 36px;
    color: var(--color-black);
`;

export const StyledUl = styled.ul`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export const StyledLi = styled.li`
    width: 78vw;
    padding: 15px;
    border-radius: 8px;
    background-color: var(--color-light-gray);
    display: flex;
    flex-direction: column;
    gap: 10px;

    .Text__Details,
    .Email {
        margin-top: 0.3rem;
    }

    .Href {
        text-decoration: none;
        font-weight: 700;
        font-size: 21px;
        line-height: 26px;
        color: var(--color-black);

        &:visited {
            color: var(--color-blue);
        }

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const StyledDivTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
`;
