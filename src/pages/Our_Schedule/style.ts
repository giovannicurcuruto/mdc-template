import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  max-width: var(--max-width);
  place-items: center;
  margin: auto;
  gap: 2rem;

  @media (max-width: 700px) {
    gap: 1.5rem;
    padding: 1rem;
  }
`;

export const ContainerCalendar = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 1rem;

  @media (max-width: 700px) {
    max-width: 100%;
    padding: 0.5rem;
  }
`;
