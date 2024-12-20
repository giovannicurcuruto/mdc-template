import { useEffect, useState } from "react";
import { BannerEncontre } from "../../components/Banners";
import FoundChurchs from "../../components/FoundChurchs";
import { Locations } from "../../types/churchs/locations";
import { AboutContent, GridSection } from "../Churchs/style";
import { AuthDataInfo } from "../../utils/auth";
import axios from "axios";


type ApiResponse = {
    success: boolean;
    data: {
        Locations: Locations[];

    };
};


export default function ChurchsPage() {
    const [locale, setLocale] = useState<Locations[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ApiResponse>(
                    AuthDataInfo.URL + "rest.php?class=SiteService&method=getLocalizacaoItens",
                    {
                        headers: {
                            Authorization: AuthDataInfo.TOKEN,
                        }
                    }
                );
                //console.log(response.data.data)
                if (response.data.success) {
                    const localeData = response.data.data;
                    setLocale(localeData.Locations);

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
    console.log(locale.length);
    
    



    return (
        <>
            <BannerEncontre banner={""} />
            <AboutContent>
                <h1>Encontre uma igreja mais proxima de você</h1>
                <h4>Encontre a Mais de Cristo mais perto de você</h4>
                <GridSection>
                    {locale.map((church, index) => (
                        <FoundChurchs
                            key={index} // Sempre use "key" única ao renderizar listas
                            name={church.pastores}
                            address={church.endereco}
                            city={church.cidade}
                            cults={church.cultos} 
                            image={church.imagem}                            
                        />
                    ))}


                </GridSection>




            </AboutContent>

        </>
    )
}