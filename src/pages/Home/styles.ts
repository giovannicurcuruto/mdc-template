import styled from "styled-components";

export const BannerMain = styled.div`
  width: 100%;
`;

export const BannerImg = styled.img`
  width: calc(100vw - 17px);
  height: 80vh;
  object-fit: cover;
`;

export const Pastors = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 2rem 1rem;
    align-items: flex-start;
  }
`;

export const PastorsImgContent = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: 700px) {
    width: 100%;
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

  @media (max-width: 700px) {
    width: 300px;
    height: 300px;

    right: 1;
  }
`;

export const ImgPastors = styled.img`
  width: 100%;
  object-fit: contain;
  height: auto;
`;

export const PastorsText = styled.div`
  width: 50%;
  padding-left: 3rem;

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
    width: 100%;
    padding-left: 0;

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 2rem;
    }
  }
`;

export const BannerSecondary = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 700px) {
    img {
      height: auto;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  padding: 6rem 0;

  /* Aplicando Grid no Desktop */
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* 1fr ajustável */
  gap: 2rem;

  /* Ajustes para Mobile */
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding: 4rem 1rem;
    gap: 2rem; /* Espaçamento entre os cartões no mobile */
  }
`;

export const LastGrid = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Reveal = styled.div`
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const BarraFixa = styled.div`
  position: fixed;
  bottom:0;
  width: 100%;
  background-color: red;
  height: 50px;
  padding-left: 150px;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
  z-index:1000;
  

`;