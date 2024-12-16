import { useEffect, useState } from "react";
import { BannerEncontre } from "../../components/Banners";
import CalendarComponent from "../../components/calendar";
import ImageText from "../../components/ImageText";
import ImageTextRight from "../../components/ImageTextRight";
import { ContainerCalendar, Wrapper } from "./style";
import axios from "axios";

interface Calendario {
    id: number;
    datainicio: string;
    titulo: string;
    datafim: string;
    descricao: string;
    allday: number;
}

export default function OurSchedulePage() {
    const [data, setData] = useState<Calendario[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://flowchurch.pedidostec.com.br/rest.php?class=SiteService&method=getCalendarios');
                if (response.data.sucess){
                    setData(response.data.data);
                } else {
                    setError('Erro ao buscar esse endpoint');
                }

            } catch (err){
                setError("Erro ao carregar os dados");
            }
        }



        fetchData();

    }, [])
    
    if (error) return <p>{error}</p>;



    return (
        <>
            <BannerEncontre />
            <Wrapper>

                <ImageText />
                <ImageTextRight />
                <br />
                <ContainerCalendar>
                    <CalendarComponent events={data} />
                </ContainerCalendar>
            </Wrapper>

        </>
    )
}