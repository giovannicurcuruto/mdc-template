import styled from "styled-components";

export const ImageTextContainer = styled.section`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const TextContent = styled.div`
  width: 50%;
  padding-left: 3rem;

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--mc-grey-strong);
    padding-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--mc-grey-light);
    margin-bottom: 3rem;
  }
`;

export const ImgContent = styled.div`
  position: relative;
  width: 50%;
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
`;