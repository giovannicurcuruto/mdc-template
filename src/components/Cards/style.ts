import styled from "styled-components";


export const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 1rem;
  background-color: var(--mc-grey-text);
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const CardText = styled.div`
  margin-top: 1rem;

  h2 {
    color: var(--mc-grey-strong);
  }

  p {
    padding-top: 1rem;
    color: var(--mc-grey-light);
  }
`;

export const CardIcon = styled.div`
  position: relative;
  height: 2rem;
  color: var(--secondary-color);

  i {
    position: absolute;
    right: 1rem;
    bottom: 10px;
    cursor: pointer;
    font-size: 1.3rem;
  }
`;