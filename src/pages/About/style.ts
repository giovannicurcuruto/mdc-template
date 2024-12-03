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
  }

  p {
    font-size: 1rem;
    width: 60%;
    margin: auto; /* Centraliza o texto caso necessário */
  }

  > hr {
    margin: 4rem 0;
    border: none;
    border-top: 1px solid var(--mc-divider); /* Adicione uma variável global ou uma cor fixa */
  }
`;