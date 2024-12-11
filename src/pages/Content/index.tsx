import { BannerEncontre } from "../../components/Banners";


import { AboutContent, GridSection, Main } from "./style";

export default function ContentPage() {
    return (
        <>
            <Main>
                <BannerEncontre />
                <AboutContent>
                    <h1>Selecione o conteúdo que deseja visualizar</h1>
                    <GridSection>
                        <button>Palavras/Sermões</button>
                        <button>Artigos: Biblicos</button>
                        <button>Artigos: Devocionais</button>



                    </GridSection>


                </AboutContent>
            </Main>
        </>
    )
}