import { styled } from "styled-components";

const SmallText = `
    font-size: clamp(2.25rem, 1.9rem + 1.75vw, 4rem);
    line-height: 54px;
`;

export const TopDivTitle = styled.div`
    height: 278px;
    padding: 0 10vw;

    display: flex;
    align-items: center;
    background-color: var(--color-blue);
    
    .smallText {
        ${SmallText}
        width: 68%;
    }
`;

export const AboutDiv = styled.div`
    padding: 20px 10vw;
    gap: 20px;
    display: flex;
    flex-direction: column;

    @media (min-width: 1300px) {
        padding: 100px 10vw;
        gap: 100px;
        flex-direction: row;
    }

    .aboutTitleDiv {
        gap: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .smallText {
        ${SmallText}
    }

    .aboutImg {
        width: 100%;
        max-width: 654px;
        max-height: 489px;
    }
`;

export const JobListDiv = styled.div`
    padding: 0 10vw;
    gap: 6vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    .smallText {
        ${SmallText}
        text-align: center;
    }
`;

export const JobRealList = styled.ul`
    width: 100%;
    max-width: 1200px;
    padding-bottom: 80px;
    gap: 40px;

    display: flex;
    flex-direction: column;
    
    .listItem {
        width: 100%;
        display: flex;
        align-items: center;

        img {
            align-self: self-start;
            cursor: pointer;
        }
    }

    .allTextsItem {
        width: 100%;
    }

    .topItemDiv {
        @media (min-width: 1300px) {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center; 
        }
    }

    div {
        gap: 15px;
        display: flex;
        flex-direction: column;
    }

    .toggleIcon {
        margin-top: 15px;
        align-self: center; 
    }
`;
