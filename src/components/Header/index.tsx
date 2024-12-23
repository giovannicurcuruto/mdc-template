import {
  Container,
  Content,
  ContentRadio,
  DivLogo,
  LinkMenu,
  Logo,
  Menu,
  MenuItem,
  MobileMenuButton,
} from "./style";

//importações para definição do layout
import logo from "../../assets/logo2.png";
import { useState } from "react";

export default function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <Container>
        <ContentRadio></ContentRadio>
        <Content>
          <DivLogo>
            <a href="/">
              <Logo alt="logo da Igreja" src={logo} />
            </a>
          </DivLogo>
          <MobileMenuButton onClick={toggleMenu}>
            {menuOpen ? "✖" : "☰"}
          </MobileMenuButton>
          <Menu isOpen={menuOpen}>
            <MenuItem>
              <LinkMenu href="/">Inicio</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu href="/about">Quem somos</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu href="/church">Igrejas</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu href="/content">Conteúdos</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu href="/our_schedule">Nossa Programação</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu href="http://www.maisnews.com.br/">Notícias</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu href="/contact">Contato</LinkMenu>
            </MenuItem>
          </Menu>
        </Content>
      </Container>
    </>
  );
}
