import { styled } from "styled-components";

const paddingBase = "10vw";
const gapBase = "20px";

export const LinksDiv = styled.div`
    padding: 30px ${paddingBase};
    gap: 60px;
    display: flex;

    .linkEdit {
        text-decoration: none;
        font-weight: 700;
        font-size: 18px;
        color: var(--color-black);
        transition: color 300ms ease-in-out;

        &:hover {
            color: var(--color-blue);
        }
    }
`;

export const TitleDiv = styled.div`
    padding: 0 ${paddingBase};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .linkCreate {
        padding: 15px 20px;
        text-decoration: none;
        font-weight: 700;
        font-size: 17px;
        color: var(--color-white);
        background-color: var(--color-blue);
        border: 1px solid var(--color-blue);
        border-radius: 255px;
        transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

        &:hover {
            background-color: transparent;
            color: var(--color-blue);
        }

        &:hover > span {
            border: 2px solid var(--color-blue);
            color: var(--color-blue);
        }
    }

    .plusSpan {
        padding: 2px 10px;
        font-size: 20px;
        color: var(--color-white);
        border: 2px solid var(--color-white);
        border-radius: 50%;
        transition: border-color 300ms ease-in-out, color 300ms ease-in-out;
    }
`;

export const JobsList = styled.ul`
    width: 100%;
    min-height: 60vh; 
    height: auto;
    padding: 50px ${paddingBase};
    gap: ${gapBase};
    display: flex;
    flex-direction: column;

    .listItem {
        width: 100%;
        padding: 15px 2vw; 
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        transition: background-color 300ms ease-in-out;

        &:hover {
            background-color: var(--color-lightblue);
        }
    }

    .innerDiv {
        gap: ${gapBase};
        display: flex;
        align-items: center;
    }

    .innerDivImg {
        border: 1px solid transparent;
        border-radius: 4px;
        cursor: pointer;
        transition: border-color 300ms ease-in-out, background-color 300ms ease-in-out;

        &:hover {
            border: 1px solid var(--color-blue);
            background-color: var(--color-white);
        }
    }

    @media (max-width: 768px) {
        padding: 40px 5vw;
        .listItem {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
        }

        .innerDiv {
            align-self: flex-end;
            margin-top: 10px;
        }
    }
`;
