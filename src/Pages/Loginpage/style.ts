import { styled } from "styled-components";

export const StyleMain = styled.main`
    width: 100%;
    min-height: 100vh;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;

    --container-width: 90%;
    --gap-default: 3rem;
    --max-content-width: 100rem;
    --margin-top-default: 5rem;

    .main__div {
        max-width: var(--max-content-width);
        width: var(--container-width);
        height: auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: var(--gap-default);
        flex-wrap: nowrap;
        margin-top: var(--margin-top-default);
    }

    .div__login-img {
        display: flex;
        justify-content: center;
        width: 50%;
        max-width: 634px;
        height: auto;
        align-self: flex-start;
    }

    .div__login-img img {
        width: 100%;
        height: auto;
        object-fit: contain;
    }

    .login__box {
        width: 50%;
        max-width: 518px;
        height: 402px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1200px) {
        .main__div {
            width: 95%;
            gap: 2rem;
            margin-top: 4rem;
        }

        .div__login-img,
        .login__box {
            width: 45%;
        }
    }

    @media (max-width: 768px) {
        .main__div {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            margin-top: 2rem;
        }

        .div__login-img {
            width: 80%;
            max-width: 400px;
        }

        .login__box {
            width: 90%;
        }
    }

    form {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .title-login {
        color: var(--color-blue);
        margin-bottom: 1rem;
    }

    .input-style {
        width: 100%;
        margin-bottom: 1rem;
    }

    .button_div {
        display: flex;
        justify-content: flex-end;
        max-width: 528px;
        width: 100%;

        button {
            padding: 1.2rem;
            width: 100%;
            border-radius: 255rem;
            background: var(--color-blue);
            color: var(--color-white);
            border: 1px solid var(--color-blue);
            cursor: pointer;
            font-size: 17px;
            weight: 700;
        }

        button:hover {
            transition: 665ms;
            background-color: transparent;
            color: var(--color-blue);
        }
    }

    .span__div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .link-text {
            color: var(--color-blue);
            text-decoration: none;
        }
    }
`;

