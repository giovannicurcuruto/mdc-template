import { useEffect, useState } from "react";
import { BannerEncontre } from "../../components/Banners";
import ImageText from "../../components/ImageText";
import ImageTextLandscape from "../../components/ImageTextLandscape";
import ImageTextRight from "../../components/ImageTextRight";
import SepareteComponent from "../../components/Separate";
import { AboutContent, Main, P_custom } from "./style";
import { AuthDataInfo } from "../../utils/auth";
import axios from "axios";
import { Sections_1, Sections_2_3, Sections_4 } from "../../types/about/sections";

type ApiResponse = {
    success: boolean;
    data:
    {
        section1: Sections_1[];
        section2: Sections_2_3[];
        section3: Sections_2_3[];
        section4: Sections_4[];
    };
};

export default function AboutPage() {
    const [sections1, setSections1] = useState<Sections_1[]>([]);
    const [sections2, setSections2] = useState<Sections_2_3[]>([]);
    const [sections3, setSections3] = useState<Sections_2_3[]>([]);
    const [sections4, setSections4] = useState<Sections_4[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ApiResponse>(
                    AuthDataInfo.URL + "rest.php?class=SiteService&method=getAboutPageItens",
                    {
                        headers: {
                            Authorization: AuthDataInfo.TOKEN,
                        }
                    }
                );
                //console.log(response.data.data)
                if (response.data.success) {
                    const sectionsData = response.data.data;
                    setSections1(sectionsData.section1);
                    setSections2(sectionsData.section2);
                    setSections3(sectionsData.section3);
                    setSections4(sectionsData.section4);

                } else {
                    console.error("Erro ao carregar os dados da API");
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error("Erro Axios:", error.response?.data || error.message);
                } else {
                    console.error("Erro inesperado:", error);
                }
            }
        };

        fetchData();
    }, []);
    console.log(sections1[0]);
    //const titulo = sections1[0].titulo;


    const img1 = `${AuthDataInfo.URL}/${sections2[0]?.foto}`;
    const img2 = `${AuthDataInfo.URL}/${sections3[0]?.foto}`;
    const banner = `${AuthDataInfo.URL}/${sections4[0]?.banner}`;
    return (
        <>
            <Main>
                <BannerEncontre />
                <AboutContent>
                    <h1>{sections1[0]?.titulo}</h1>
                    <P_custom>
                        {sections1[0]?.texto}
                    </P_custom>
                    <hr />

                    <SepareteComponent />

                    <ImageTextRight
                        foto={img1}
                        titulo={sections2[0]?.titulo}
                        texto={sections2[0]?.texto} />
                    <hr />
                    <SepareteComponent />
                    <hr />

                    <ImageText
                        foto={img2}
                        titulo={sections3[0]?.titulo}
                        texto={sections3[0]?.texto} />

                    <hr />
                    <SepareteComponent />
                    <hr />

                    <ImageTextLandscape
                        banner={banner}
                        titulo={sections4[0]?.titulo}
                        texto={sections4[0]?.texto} />
                </AboutContent>

            </Main>
        </>
    )
}