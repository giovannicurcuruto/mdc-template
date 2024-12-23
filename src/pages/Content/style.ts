import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
`;

export const AboutContent = styled.section`
  width: 100%;
  max-width: var(--max-width);
  padding: 2rem;
  margin: auto;

  h1 {
    font-size: 2rem;
    padding-bottom: 1rem;
    color: white;
  }

  p {
    font-size: 1rem;
    width: 60%;
  }

  > hr {
    margin: 4rem 0;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.8rem; /* Ajusta o tamanho do título no mobile */
    }
  }
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr; /* Uma coluna no mobile */
    gap: 1rem; /* Ajusta o espaçamento entre os botões */
  }

  button {
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #005bb5;
    }

    @media (max-width: 700px) {
      width: 100%; /* Botões ocupam toda a largura no mobile */
    }
  }
`;
