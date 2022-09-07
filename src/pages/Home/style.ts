import styled from "styled-components";

export const backgroundHero = styled.main`
  width: 100%;
  height: 80vh;
  background-repeat: no-repeat;
  background-size: 112% 80vh;
  top: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  max-width: 1400px;
  width: 75%;
`;

export const heroInformation = styled.div`
  height: 30%;

  #experience {
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: 18px;
    color: var(--color-brown--h);
  }

  h1 {
    font-family: var(--font-segundary);
    font-size: 4rem;
    text-transform: uppercase;
    color: var(--color-dark-brown);
    span {
      padding-left: 1rem;
      color: var(--color-orange);
    }
  }

  #appetite {
    font-family: var(--font-primary);
    font-weight: 700;
    font-size: 18px;
    display: flex;
    color: var(--color-brown--ligth);
    div {
      background: var(--color-orange);
      width: 35%;
      height: 1.5rem;
      text-align: center;
      color: var(--color-brown--h);
      border-radius: 0.4rem;
    }
    margin-bottom: 1rem;
  }
`;

export const backgroundSobre = styled.section`
  width: 100%;
  height: 20vh;
  position: relative;
  top: -55px;
  display: flex;
  justify-content: center;
`;

export const containerSobre = styled.div`
  max-width: 1400px;
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 10px #dcdcdc;
`;
