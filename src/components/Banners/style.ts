import styled from 'styled-components';

export const BannerImage = styled.img`
  width: calc(100vw - 17px);
  height: 80vh;
  object-fit: cover;
`;

export const BannerSecondary = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }
`;