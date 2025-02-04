import styled from "styled-components";

interface ContainerProps {
  isScrolled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: auto;  
  position: fixed;
  z-index: 3999;  
  border-bottom: 1px solid gray;
  background-color:  ${({ isScrolled }) => (isScrolled ? "white" : "transparent")};

  transition: background-color 0.3s ease-in-out;

`;

export const ContentRadio = styled.div`
  width: 100%;
 
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

interface MenuProps {
  isOpen: boolean;
}

export const Menu = styled.ul<MenuProps>`
  display: flex;
  gap: 1rem;
  

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--mc-grey-light);
    flex-direction: column;
    padding: 1rem 0;
    gap: 0.5rem;
    z-index: 998;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  transition: all 0.4s;
  padding: 0.2rem;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const LinkMenu = styled.a<ContainerProps>`
  text-decoration: none;
  color: ${({ isScrolled }) => (isScrolled ? "black" : "white")};
  font-weight: 400;

  &:hover {
    color: var(--secondary-color);
  }
`;

export const DivLogo = styled.div`

  @media (max-width: 768px) {    
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 100%;
    margin: 0 auto;
  }
`;

export const SocialMediaHeader = styled.div<ContainerProps>`
  color: ${({ isScrolled }) => (isScrolled ? "black" : "white")};
  font-weight: 400;
  font-size: 35px;
  svg{
    padding-left: 45px;
  }

`;