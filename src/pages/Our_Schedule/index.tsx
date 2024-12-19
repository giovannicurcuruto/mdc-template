import { useEffect, useState } from "react";
import { BannerEncontre } from "../../components/Banners";
import CalendarComponent from "../../components/calendar";
import ImageText from "../../components/ImageText";
import ImageTextRight from "../../components/ImageTextRight";
import { ContainerCalendar, Wrapper } from "./style";
import { Sections } from "../../types/ourschedule/sections";
import { Calendario } from "../../types/ourschedule/calendario";
import axios from "axios";
import { AuthDataInfo } from "../../utils/auth";


type ApiResponse = {
    success: boolean;
    data: [
      {
        section1: Sections[];
        section2: Sections[];
      },
      Calendario[]
    ];
  };



export default function OurSchedulePage() {
    const [sections, setSections] = useState<Sections[]>([]);
    const [calendario, setCalendario] = useState<Calendario[]>([]);
    

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await axios.get<ApiResponse>(
                    AuthDataInfo.URL+ "rest.php?class=SiteService&method=getProgPageItens",
                    {
                        headers:{
                            Authorization: AuthDataInfo.TOKEN,
                        }
                    }
                );

                if(response.data.success) {
                    const [ sectionsData, eventsData] = response.data.data;
                    setSections([
                        ...sectionsData.section1,
                        ...sectionsData.section2,
                    ]);
                    setCalendario(eventsData);
                }else{
                    console.error("Erro ao carregar os dados da API");
                }
            } catch (error){
                console.error("Erro ao fazer a requisição:", error);
            }
        };

        fetchData();
    }, []);
    
    console.log(sections[0]);
    console.log(sections[1]);
    const img_1 = `https://flowchurch.pedidostec.com.br/${sections[0].foto}`;
    const img_2 = `https://flowchurch.pedidostec.com.br/${sections[0].foto}`;


    return (
        <>
            <BannerEncontre />
            <Wrapper>
                <ImageText 
                    foto={img_1} 
                    titulo={sections[0].titulo} 
                    texto={sections[0].texto} />
                <ImageTextRight 
                    foto={img_2} 
                    titulo={sections[1].titulo} 
                    texto={sections[1].texto} />
                <br />
                <ContainerCalendar>
                    <CalendarComponent 
                        events={calendario} />
                </ContainerCalendar>
            </Wrapper>
        </>
    )
}