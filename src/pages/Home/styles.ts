import styled from 'styled-components';

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
  bottom: 3.3rem;
  width: 500px;
  height: 500px;
  background-color: var(--primary-color);
  clip-path: polygon(100% 50%, 50% 100%, 100% 100%);
  z-index: -1;

  @media (max-width: 700px) {
    width: 300px;
    height: 300px;
    bottom: 1.5rem;
  }
`;

export const ImgPastors = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const PastorsText = styled.div`
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

  @media (max-width: 700px) {
    width: 100%;
    padding-left: 1rem;

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
  display: flex;

  @media (min-width: 701px) and (max-width: 1120px) {
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media (max-width: 700px) {
    padding: 4rem 1rem;
    flex-direction: column;
  }
`;
