import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: auto;
  background-color: #80808069;
  position: fixed;
  z-index: 999;
`;

export const ContentRadio = styled.div`
  width: 100%;
  padding: 1rem 0;
  background-color: var(--mc-grey-light);
`;

export const Content = styled.nav`
  max-width: var(--max-width);
  width: 100%;
  margin: auto;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 7rem;
  height: auto;
  object-fit: contain;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const MenuItem = styled.li`
  list-style: none;
  transition: all 0.4s;
  padding: 0.2rem;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LinkMenu = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 400;

  &:hover {
    color: var(--secondary-color);
  }
`;