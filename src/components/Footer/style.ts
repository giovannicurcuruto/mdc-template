import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  background: var(--mc-grey-strong);
  padding: 8rem 0;
`;

export const ContentFooter = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const Content = styled.div`
  position: relative;
  width: 20%;
  max-width: 250px;

  h2 {
    color: white;
    padding-bottom: 1rem;
    font-size: 1.3rem;
  }

  h3 {
    font-size: 1rem;
    color: var(--mc-grey-text);
    line-height: 200%;
  }
`;

export const LogoFooter = styled.img`
  width: 100%;
  max-width: 12rem;
  object-fit: contain;
  height: auto;
  position: absolute;
  right: 2rem;
`;

export const ContentFooterSocialMedia = styled.div`
  background-color: var(--primary-color);
  margin: auto;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const SocialMedia = styled.div`
  padding: 2rem;
  font-size: 2.5rem;

  a > i {
    color: var(--mc-grey-light);
  }

  i {
    color: black;
  }

`;
