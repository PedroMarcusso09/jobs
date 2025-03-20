import { styled } from "styled-components";
import { Title2 } from "../../Styles/Typography";

export const BackGroundModal = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(132, 144, 255, 0.3);
`;

export const ModalContainer = styled.div`
    position: relative;
    width: 90%;
    max-width: 650px;
    min-height: 300px;
    padding: 40px 30px;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

        ${Title2} {

        @media (max-width: 480px) {
            font-size: 35px;
        }
    }

    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-bottom: 10px;
    }

    .closeBtn {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }

    .bold {
        font-weight: 700;
    }

    .modalForm {
        gap: 15px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
                .modalForm button {
                    align-self: flex-end;
                }

    .formBtn {
        padding: 15px 30px;
        width: fit-content; 
        text-align: center;
        background-color: var(--color-blue);
        border: 1px solid var(--color-blue);
        border-radius: 255px;
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 17px;
        color: var(--color-white);
        cursor: pointer;
        transition: 665ms;

    }

    .formBtn:hover {
        background-color: transparent;
        color: var(--color-blue);
    }

    @media (max-width: 480px) {
        padding: 20px; 

        .modalForm {
            gap: 12px;
        }

        .formBtn {
            width: 100%; 
            padding: 12px;
            font-size: 14px;
        }

        .closeBtn {
            top: 15px;
            right: 15px;
            width: 20px;
            height: 20px;
        }
    }
`;



