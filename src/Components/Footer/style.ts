import styled from "styled-components";

export const backgroundFooter = styled.footer`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  @media (max-width: 912px) {
    height: 100%;
    padding: 2rem 0 2rem 0;
  }
`;

export const containerFooter = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 912px) {
    width: 85%;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const navLinksFooter = styled.nav`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 912px) {
    width: 100%;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
`;

export const linksFooter = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  @media (max-width: 912px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  #footer__home {
    font-family: var(--font-primary);
    a {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: var(--color-brown--h);
      @media (max-width: 912px) {
        width: 100%;
      }
    }
  }
  li {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-transform: capitalize;
    @media (max-width: 912px) {
      width: 100%;
      padding: 0.5rem 0 0.5rem 0;
    }
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
  @media (max-width: 912px) {
    padding: 0.5rem 0 0.5rem 0;
  }
`;
