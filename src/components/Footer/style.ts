import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  background: var(--mc-grey-strong);
  padding: 8rem 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentFooter = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 5px;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os itens verticalmente */
    align-items: center; /* Centraliza os itens no eixo horizontal */
    gap: 2rem; /* Adiciona espaçamento entre os itens */
    width: 100%;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 250px;

  h2 {
    color: white;
    padding-bottom: 1rem;
    font-size: 1.3rem;
    text-align: center;
  }

  h3 {
    font-size: 1rem;
    color: var(--mc-grey-text);
    line-height: 200%;
    text-align: center;
  }
  @media (max-width: 768px) {
    max-width: 90%; /* Garante que os itens ocupem quase toda a largura */
    h2,
    h3 {
      text-align: center; /* Centraliza o texto */
    }
  }
`;

export const LogoFooter = styled.img`
  width: 100%;
  max-width: 12rem;
  object-fit: contain;
  height: auto;
  position: absolute;
  right: 2rem;
`;

export const ContentFooterSocialMedia = styled.div`
  background-color: var(--primary-color);
  margin: auto;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 2rem 0;
  }
`;

export const SocialMedia = styled.div`
  padding: 2rem;
  font-size: 2.5rem;

  i {
    color: black;
  }

  a {
    color: var(--mc-grey-light);
    text-decoration: none;
  }

  a:hover {
    color: var(--mc-grey-text); /* Muda a cor no hover */
  }
`;
