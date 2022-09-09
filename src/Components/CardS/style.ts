import styled from "styled-components";

export const backgroundCard = styled.div`
  background: var(--color-white);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(73, 46, 21, 0.15);
`;

export const containerCard = styled.div`
  max-width: 1440px;
  max-height: 70%;
  height: 70%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 912px) {
    padding: 1rem 0 1rem 0;
  }
`;

export const imageCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  background: #fae2cb;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  img {
    max-width: 30px;
  }
`;

export const cardInformation = styled.div`
  width: 70%;
  h3 {
    font-family: var(--font-segundary);
    text-transform: uppercase;
    color: var(--color-dark-brown);
    font-weight: 400;
  }
  p {
    padding-top: 0.5rem;
    font-family: var(--font-primary);
    color: var(--color-brown--ligth);
    max-width: 175px;
  }
`;
