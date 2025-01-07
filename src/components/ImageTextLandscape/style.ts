import styled from "styled-components";

export const ImageTextContainerLandscape = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ImgContentLandscape = styled.div`
  width: 100%;
`;

export const ImgBoxLandscape = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
`;

export const TextLandscape = styled.div`
  width: 100%;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 1rem;
    color: var(--mc-grey-text);
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    font-style: justify;
    color: var(--mc-grey-text);
    padding-bottom: 1rem;
    width: 100%;
  }
`;