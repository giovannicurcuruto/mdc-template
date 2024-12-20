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
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

`;