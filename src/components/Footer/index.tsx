import { Content, ContentFooter, ContentFooterSocialMedia, Footer, LogoFooter } from "./style";

import logo from '../../assets/logo2.png';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaComponent from "../SocialMedia";

//importações para definição do layout

export default function FooterComponent() {
    return (
        <>
            <Footer>
                <ContentFooter>
                    <Content>
                        <a href="/">
                            <LogoFooter
                                alt="Logo da Igreja"
                                src={logo}
                            />
                        </a>
                    </Content>
                    <Content>
                        <h2>SOBRE NÓS</h2>
                        <h3>Fale Conosco</h3>
                        <h3>Igrejas</h3>
                    </Content>
                    <Content>
                        <h2>CONTEÚDO</h2>
                        <h3>Palavras</h3>
                        <h3>Artigos</h3>
                    </Content>
                    <Content>
                        <h2>MAIS DE CRISTO</h2>
                        <h3>Eventos</h3>
                        <h3>ministérios</h3>
                        <h3>Oração</h3>
                    </Content>
                    <Content>
                        <h2>CONTATO</h2>
                        <address>
                            <h3>Rua Professor Egídio Ferreira, 200 - Capoeiras, Florianópolis - SC, 88090-699 - Brasil</h3>
                            <h3><i className="fa-solid fa-phone"></i> +55 (48) 99170-6008</h3>
                            <h3><i className="fa-solid fa-phone"></i> +55 (48) 99107-5002</h3>
                        </address>
                    </Content>
                </ContentFooter>
            </Footer>
            <ContentFooterSocialMedia>                
                <SocialMediaComponent/>
            </ContentFooterSocialMedia>

        </>
    )
}