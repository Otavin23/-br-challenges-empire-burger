import styled from "styled-components";

export const backgroundHeader = styled.header`
  background: rgba(59, 32, 11, 0.05);
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
`;

export const containerHeader = styled.div`
  max-width: 1400px;
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 912px) {
    width: 85%;
  }
  @media (max-width: 1115px) {
    img {
      max-width: 200px;
    }
  }
`;

export const menuHamburguer = styled.picture`
  display: none;
  width: 30px;
  height: 30px;
  background: rgba(29, 6, 5, 0.15);
  cursor: pointer;
  @media (max-width: 912px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const navLink = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
  @media (max-width: 912px) {
    display: none;
  }
`;

export const ulLink = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 912px) {
    display: none;
  }
  #home {
    font-family: var(--font-primary);
    a {
      font-style: normal;
      font-weight: 700;
      font-size: clamp(1rem, 18px, 18px);
      color: var(--color-brown--h);
    }
  }
  li {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: clamp(0.6rem, 16px, 18px);

    text-transform: capitalize;
    a {
      color: var(--color-brown--ligth);
      text-decoration: none;
    }
    margin-right: 1rem;
  }
`;

export const contact = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media (max-width: 912px) {
    display: none;
  }

  button {
    border: none;
    background: var(--color-orange);
    width: 70%;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 70%;
    font-family: var(--font-primary);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    text-transform: capitalize;
    color: var(--color-brown--h);
    cursor: pointer;
  }
`;

export const contatosGroup = styled.picture`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 912px) {
    display: none;
  }
`;
