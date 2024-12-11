
import { Container, Content, ContentRadio, LinkMenu, Logo, Menu } from "./style";

//importações para definição do layout
import logo from '../../assets/logo2.png';


export default function HeaderComponent() {
    return (
        <>
            <Container>
                <ContentRadio></ContentRadio>
                <Content>
                    <div>
                        <a href="/">
                            <Logo
                                alt="logo da Igreja"
                                src={logo} />
                        </a>
                        <Menu>
                            <li>
                                <LinkMenu href="/">Inicio</LinkMenu>
                            </li>

                            <li>
                                <LinkMenu href="/about">Quem somos</LinkMenu>
                            </li>
                            <li>
                                <LinkMenu href="/church">Igrejas</LinkMenu>
                            </li>
                            <li>
                                <LinkMenu href="/content">Conteúdos</LinkMenu>
                            </li>
                            <li>
                                <LinkMenu href="/our_schedule">Nossa Programação</LinkMenu>
                            </li>
                            <li>
                                <LinkMenu href="http://www.maisnews.com.br/">Notícias</LinkMenu>
                            </li>
                            <li>
                                <LinkMenu href="/contact">Contato</LinkMenu>
                            </li>
                        </Menu>
                    </div>
                </Content>
            </Container>
        </>
    )
}