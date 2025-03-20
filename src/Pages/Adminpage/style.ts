import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    padding-bottom: 30px;
  }
`;

export const LinksDiv = styled.div`
  padding: 30px 10vw;
  gap: clamp(15px, 2vw, 20px); 
  display: flex;
  flex-direction: column;
  align-items: center;

  .linkEdit {
    text-decoration: none;
    font-weight: 700;
    font-size: clamp(16px, 1.5vw, 18px);
    color: var(--color-black);
    transition: color 300ms ease-in-out;

    &:hover {
      color: var(--color-blue);
    }
  }
`;

export const TitleDiv = styled.div`
  padding: 20px 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GreetingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;
  height: 4rem;
  
    @media (max-width: 768px) {
    height: auto;
    text-align: center;
  }
`;

