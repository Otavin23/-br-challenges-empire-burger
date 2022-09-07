import styled from "styled-components";

export const backgroundHeader = styled.header`
  background: rgba(59, 32, 11, 0.05);
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
`;

export const containerHeader = styled.div`
  max-width: 1400px;
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const navLink = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100%;
`;

export const ulLink = styled.ul`
  display: flex;
  list-style: none;
  #home {
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
    font-size: 18px;
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
`;
