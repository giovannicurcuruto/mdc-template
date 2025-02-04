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
  SocialMediaHeader,
} from "./style";

//importações para definição do layout
import logo from "../../assets/logo2.png";
import logo_escuro from '../../assets/logo3.png';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrooled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })



  return (
    <>
      <Container isScrolled={isScrooled}>
        <ContentRadio></ContentRadio>
        <Content>
          <DivLogo>
            {isScrooled ?
              (<a href="/">
                <Logo alt="logo da Igreja" src={logo_escuro} />
              </a>) :
              (<a href="/">
                <Logo alt="logo da Igreja" src={logo} />
              </a>)}
          </DivLogo>
          <MobileMenuButton onClick={toggleMenu}>
            {menuOpen ? "✖" : "☰"}
          </MobileMenuButton>
          <Menu isOpen={menuOpen}>
            <MenuItem>
              <LinkMenu isScrolled={isScrooled} href="/">Inicio</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu isScrolled={isScrooled} href="/about">Quem somos</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu isScrolled={isScrooled} href="/church">Igrejas</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu isScrolled={isScrooled} href="/content">Conteúdos</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu isScrolled={isScrooled} href="/our_schedule">Nossa Programação</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu isScrolled={isScrooled} href="http://www.maisnews.com.br/">Notícias</LinkMenu>
            </MenuItem>
            <MenuItem>
              <LinkMenu isScrolled={isScrooled} href="/contact">Contato</LinkMenu>
            </MenuItem>
          </Menu>
          <SocialMediaHeader isScrolled={isScrooled}>
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faInstagram} />
          </SocialMediaHeader>
        </Content>
      </Container >
    </>
  );
}
