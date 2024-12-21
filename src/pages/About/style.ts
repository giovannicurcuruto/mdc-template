import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
`;

export const AboutContent = styled.section`
  width: 100%;
  max-width: var(--max-width);
  padding: 2rem;
  margin: auto;
  display: grid;
  place-items: center;
  color: var(--mc-grey-text);

  h1 {
    font-size: 2.7rem;
    padding-bottom: 1rem;
    color: var(--mc-grey-text);
  }

  p {
    font-size: 1.5rem;
    width: 80%;
    color: var(--mc-grey-text);
    margin: auto; /* Centraliza o texto caso necessário */
  }

  > hr {
    margin: 4rem 0;
    border: none;
    border-top: 1px solid var(--mc-divider); /* Adicione uma variável global ou uma cor fixa */
  }
`;