import styled from 'styled-components';

export const BannerImage = styled.img`
  /* width: calc(100vw - 17px);
  height: 80vh;
  object-fit: cover; */
  width: 100%;
  height: 80vh;
  object-fit: cover;

  @media (max-width: 700px) {
    height: 50vh; /* Altura menor no mobile */
  }

`;

export const BannerSecondary = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const BannerHomeSecondary = styled.div`
  /* width: 100%;    
  //max-width: var(--max-width);
  //grid-template-columns

  
  img {
    width: 100%;
    height: 950px;
    object-fit: cover;
    z-index: 5;

  } */

`;

export const DivSlider = styled.div`
  //padding-top: 123px;
  position: relative;
  z-index: 500;
`;


export const BannerBackground = styled.div` 
  
  width: 100%;
  height: 750px;  
  background-size: cover;  
  display:grid;
  grid-template-columns: minmax(350px, 1fr) 2fr ;
  place-items: center;

  div {
    margin: 0 auto;
    color: white;
    
  }

  div:first-child {
    display: flex; 
    justify-content: center;
    align-items: center;
    height: 100%; 
  }

  div > img{
    width: 1000px;
    max-width: 100%;
    height: auto;
  }

`;

export const ImgLogoHP = styled.div`
  animation: fadeInUp 2s ease-out;
  @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
  }


`;