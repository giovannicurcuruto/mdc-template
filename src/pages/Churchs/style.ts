import styled from "styled-components";

export const AboutContent = styled.section`
  width: 100%;
  max-width: var(--max-width);
  padding: 2rem;
  margin: auto;
  display: grid;
  place-items: center;

  h1 {
    font-size: 2.7rem;
    padding-bottom: 1rem;
    color: var(--mc-grey-light);
  }

  p {
    font-size: 1.5rem;
    width: 80%;
    color: var(--mc-grey-light);
    margin: auto; /* Centraliza o texto caso necessário */
  }

  > hr {
    margin: 4rem 0;
    border: none;
    border-top: 1px solid var(--mc-divider); /* Adicione uma variável global ou uma cor fixa */
  }
`;

export const GridSection = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    gap: 2rem;


`;