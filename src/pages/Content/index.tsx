import { Outlet, useNavigate } from "react-router-dom";
import { BannerEncontre } from "../../components/Banners";


import { AboutContent, GridSection, Main } from "./style";
import { ROUTESPATHS } from "../../Router";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { AuthDataInfo } from "../../utils/auth";
// import { videos } from "../../types/content/sermao";
// import { series } from "../../types/content/series";
// import { devocional } from "../../types/content/devocionais";
// import { biblico } from "../../types/content/biblico";


// type ApiResponse = {
//     success: boolean;
//     data: [
//         {
//             videos: videos[];
//             series: series[];
//         }, {
//             devocional: devocional[];
//             biblico: biblico[];
//         }
//     ]

// };


export default function ContentPage() {

    // const [sermao, setSermao] = useState<videos[]>([]);
    // const [series, setSeries] = useState<series[]>([]);
    // const [devocional, setDevocional] = useState<devocional[]>([]);
    // const [biblico, setBiblico] = useState<biblico[]>([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get<ApiResponse>(
    //                 AuthDataInfo.URL + "rest.php?class=SiteService&method=getContentPageItens",
    //                 {
    //                     headers: {
    //                         Authorization: AuthDataInfo.TOKEN,
    //                     }
    //                 }
    //             );
    //             //const teste = "videos";
    //             //console.log(response.data.data[1]);
    //             if (response.data.success) {
    //                 const seriesResponse = response.data.data[0]['series'];
    //                 const videoResponse = response.data.data[0]['videos'];
    //                 const devoResponse = response.data.data[1]['devocional'];
    //                 const biblicoResponse = response.data.data[1]['biblico'];
                    
    //                 setSeries(seriesResponse);
    //                 setSermao(videoResponse);
    //                 setDevocional(devoResponse);
    //                 setBiblico(biblicoResponse);
                    
                    
                    
              

    //             } else {
    //                 console.error("Erro ao carregar os dados da API");
    //             }
    //         } catch (error) {
    //             if (axios.isAxiosError(error)) {
    //                 console.error("Erro Axios:", error.response?.data || error.message);
    //             } else {
    //                 console.error("Erro inesperado:", error);
    //             }
    //         }
    //     };

    //     fetchData();
    // }, []);
    
    // console.log(series);
    // console.log(devocional);
    // console.log(biblico);
    // console.log(sermao);

    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <>
            <Main>
                <BannerEncontre banner={""} />
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