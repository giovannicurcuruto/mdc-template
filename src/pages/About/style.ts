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

  

  > hr {
    margin: 4rem 0;
    border: none;
    border-top: 1px solid var(--mc-divider); /* Adicione uma variável global ou uma cor fixa */
  }
`;

export const P_custom = styled.p`
  padding-top: 35px;
  font-size: 1.8rem;
`;