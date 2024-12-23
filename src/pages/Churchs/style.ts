import styled from "styled-components";

export const AboutContent = styled.section`
  width: 100%;
  max-width: var(--max-width);
  padding: 2rem;
  margin: auto;
  display: grid;
  place-items: center;
  text-align: center; 

  h1 {
    font-size: 2.7rem;
    padding-bottom: 1rem;
    color: var(--mc-grey-light);
  }

  h4 {
    padding-bottom: 1rem;
    color: var(--mc-grey-light);
  }

  p {
    width: 80%;
    color: var(--mc-grey-light);
    //margin: auto; /* Centraliza o texto caso necessário */
  }

  > hr {
    margin: 4rem 0;
    border: none;
    border-top: 1px solid var(--mc-divider); /* Adicione uma variável global ou uma cor fixa */
  }


  @media (max-width: 700px) {
    h1 {
      font-size: 2rem; /* Reduz o tamanho do título no mobile */
    }

    h4 {
      font-size: 1rem; /* Reduz o subtítulo no mobile */
    }

    p {
      font-size: 0.9rem; /* Reduz o tamanho do texto no mobile */
    }
  }
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Três colunas no desktop */
  gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr; /* Uma coluna no mobile */
    gap: 1.5rem; /* Ajusta o espaçamento no mobile */
  }
`;
