import styled from "styled-components";

export const ImageTextContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr; /* Empilha no mobile */
    padding: 2rem 1rem;
  }
`;

export const ImgContent = styled.div`
  position: relative;
  width: 100%; /* Ajuste para o Grid */
  display: flex;
  justify-content: center;

  @media (max-width: 700px) {
    margin-bottom: 1.5rem;
  }
`;

export const BgBox = styled.div`
  position: absolute;
  right: 5.2rem;
  bottom: -0.9rem;
  clip-path: polygon(0% 50%, 50% 100%, 0% 100%);
  width: 500px;
  height: 500px;
  background-color: var(--primary-color);
  z-index: -1;

  @media (max-width: 700px) {
    width: 300px;
    height: 300px;
    right: 0;
    bottom: 2;
  }
`;

export const ImgBox = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const TextContent = styled.div`
  width: 100%; /* Adapta ao Grid */
  text-align: left;
  display: grid;
  place-items: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: var(--mc-grey-text);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 700px) {
    text-align: center; /* Centraliza no mobile */
    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const Button = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 250px;

  &:hover {
    background-color: #005bb5;
  }

   @media (max-width: 700px) {
    width: 200px; /* Ajusta o tamanho no mobile */
  }
`;
