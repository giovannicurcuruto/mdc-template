import styled, { createGlobalStyle } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';



export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

  :root {
    --max-width: 1200px;

    --primary-color: #990000;
    --secondary-color: #ea7500;
    --mc-grey-strong: #323233;
    --mc-grey-light: #808080;
    --mc-grey-text: #e6e6e6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #202020;
    font-family: 'Montserrat', sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 0.2rem;
    background: var(--secondary-color);
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 2px 2px 3px 1px var(--mc-grey-light);
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; /* vai gerar uns 15px */
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; /* vai gerar uns 14px */
    }
  }
`;

export const BannerSecondary = styled.div`
  width: 100%;
`;

export const BannerSecondary2 = styled.div`
  max-height: 600px;
`;
