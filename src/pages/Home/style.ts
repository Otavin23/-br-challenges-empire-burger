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
  width: 65%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 10px #dcdcdc;
`;

export const backgroundOffer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const containeroOffer = styled.div`
  height: 90%;
  max-width: 1400px;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-family: var(--font-segundary);
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-dark-brown);
    font-size: 1.8rem;
  }
  p {
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    color: var(--color-brown--ligth);
    font-family: var(--font-primary);
  }
`;

export const imagesOffer = styled.picture`
  display: flex;
  justify-content: space-between;
  width: 100%;
  #primaryImage {
    margin-right: 2rem;
    max-width: 60%;
  }
`;

export const imageRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-width: 90%;
    height: 45%;
  }
`;

export const OfferHours = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
`;

export const Offeroperation = styled.div`
  background: var(--color--red);
  height: 100%;
  width: 45%;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
`;

export const containerOfferOperation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 90%;
`;

export const pictureOfferOperation = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 15%;
  height: 65%;
  border-radius: 50%;
  img {
    max-width: 45px;
    max-height: 45px;
  }
`;

export const informationOfferOperation = styled.div`
  width: 80%;
  height: 80%;
  h3 {
    color: rgba(29, 6, 5, 0.69);
    font-family: var(--font-segundary);
    text-transform: uppercase;
    font-weight: 400;
  }
  p {
    color: var(--color-white);
    font-family: var(--font-primary);
    opacity: 0.8;
  }
`;

export const OfferEmpireBurguer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-family: var(--font-primary);
    color: var(--color-brown--ligth);
  }
  h3 {
    color: var(--color--red);
    text-transform: uppercase;
    font-family: var(--font-segundary);
    font-weight: 400;
  }
`;

export const backgroundWhereitIs = styled.section`
  width: 100%;
  padding-top: 5rem;

  height: 100%;

  iframe {
    padding-top: 2rem;
    border: none;
    width: 100%;
    height: 100%;
  }
`;

export const informationWhereitIs = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 25%;
  h2 {
    font-family: var(--font-segundary);
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-dark-brown);
    font-size: 2rem;
  }
  p {
    color: var(--color-brown--ligth);
    font-family: var(--font-primary);
  }
`;

export const backgroundFooter = styled.footer`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
`;

export const containerFooter = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const navLinksFooter = styled.nav`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const linksFooter = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  #footer__home {
    font-family: var(--font-primary);
    a {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: var(--color-brown--h);
    }
  }
  li {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-transform: capitalize;
    a {
      color: var(--color-brown--ligth);
      text-decoration: none;
    }
    margin-right: 1rem;
  }
`;

export const imagesLink = styled.picture`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;
