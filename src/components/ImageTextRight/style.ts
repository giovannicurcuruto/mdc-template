import styled from "styled-components";

export const ImageTextContainer = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 4rem 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column; /* Empilha os elementos no mobile */
    gap: 1.5rem;
    text-align: center; /* Centraliza o conteúdo */
  }
`;

export const TextContent = styled.div`
  width: 50%;
  padding-left: 3rem;
  display: grid;
  place-items: center;

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--mc-grey-text);
    padding-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--mc-grey-text);
    margin-bottom: 3rem;
  }

  @media (max-width: 700px) {
    width: 100%; /* Ocupa toda a largura no mobile */
    padding-left: 0;
  }
`;

export const ImgContent = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: 700px) {
    width: 100%; /* Ajusta a imagem para ocupar toda a largura */
  }
`;

export const BgBox = styled.div`
  position: absolute;
  right: -1rem;
  bottom: -1rem;
  width: 500px;
  height: 500px;
  background-color: var(--primary-color);
  clip-path: polygon(100% 50%, 50% 100%, 100% 100%);
  z-index: -1;
`;

export const ImgBox = styled.img`
  width: 100%;
  object-fit: contain;
  height: auto;

  @media (max-width: 700px) {
    max-width: 300px; /* Limita o tamanho da imagem no mobile */
    margin: 0 auto; /* Centraliza a imagem */
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 250px;

  &:hover {
    background-color: #005bb5;
  }

  @media (max-width: 700px) {
    width: 200px; /* Ajusta o botão para o mobile */
  }
`;
