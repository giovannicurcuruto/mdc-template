import { Outlet, useNavigate } from "react-router-dom";
import { BannerEncontre } from "../../components/Banners";


import { AboutContent, GridSection, Main } from "./style";
import { ROUTESPATHS } from "../../Router";


export default function ContentPage() {
    
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <>
            <Main>
                <BannerEncontre  />
                <AboutContent>
                    <h1>Selecione o conteúdo que deseja visualizar</h1>
                    <GridSection>
                        <button onClick={() => handleNavigation(ROUTESPATHS.CON_PALAVRAS)}>
                            Palavras/Sermões
                        </button>
                        <button onClick={() => handleNavigation(ROUTESPATHS.CON_BIBLICO)}>
                            Artigos: Biblicos
                        </button>
                        <button onClick={() => handleNavigation(ROUTESPATHS.CON_DEVO)}>
                            Artigos: Devocionais
                        </button>

                    </GridSection>
                    <Outlet />
                </AboutContent>

            </Main>
        </>
    )
}