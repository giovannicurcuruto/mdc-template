// interface VideosContentProps {

import { useEffect, useState } from "react";
import { FormContainer, GridCard, GridContainer, ImgCard, ResumeCard, SearchButton, SearchInput } from "./style";
import { videos } from "../../types/content/sermao";
import { series } from "../../types/content/series";
import { devocional } from "../../types/content/devocionais";
import { biblico } from "../../types/content/biblico";
import { AuthDataInfo } from "../../utils/auth";
import axios from "axios";

type ApiResponse = {
    success: boolean;
    data: [
        {
            videos: videos[];
            series: series[];
        }, {
            devocional: devocional[];
            biblico: biblico[];
        }
    ]

};



export default function VideosContent() {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const [sermao, setSermao] = useState<videos[]>([]);
    const [series, setSeries] = useState<series[]>([]);
    const [devocional, setDevocional] = useState<devocional[]>([]);
    const [biblico, setBiblico] = useState<biblico[]>([]);

    const [filteredSeries, setFilteredSeries] = useState<series[]>([]);
    const [filteredSermao, setFilteredSermao] = useState<videos[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ApiResponse>(
                    AuthDataInfo.URL + "rest.php?class=SiteService&method=getContentPageItens",
                    {
                        headers: {
                            Authorization: AuthDataInfo.TOKEN,
                        }
                    }
                );
                //const teste = "videos";
                //console.log(response.data.data[1]);
                if (response.data.success) {
                    const seriesResponse = response.data.data[0]['series'];
                    const videoResponse = response.data.data[0]['videos'];
                    const devoResponse = response.data.data[1]['devocional'];
                    const biblicoResponse = response.data.data[1]['biblico'];

                    setSeries(seriesResponse);
                    setSermao(videoResponse);
                    setDevocional(devoResponse);
                    setBiblico(biblicoResponse);





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
    /*
        console.log(series);
        console.log(devocional);
        console.log(biblico);
        console.log(series[0]?.name_video);
        console.log(series[0]?.pastor);
        console.log(series[0]?.resumo)
    
    
    
        console.log(sermao[0]?.name_video);
        console.log(sermao[0]?.pastor);
        console.log(sermao[0]?.resumo);
    */

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Pesquisa enviada!");

        const filteredSeries = series?.filter((item) =>
            item.name_video.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.pastor.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.resumo.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const filteredSermao = sermao?.filter((item) =>
            item.name_video.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.pastor.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.resumo.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Exibe os resultados filtrados
        console.log(filteredSeries);
        console.log(filteredSermao);
    };
    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <SearchInput
                    type="text"
                    placeholder="Digite sua pesquisa..."
                    value={searchQuery}
                    onChange={handleSearchChange} />
                <SearchButton type="submit">Pesquisar</SearchButton>
            </FormContainer>

            <GridContainer>
                {sermao.map((item, index) => (
                    <GridCard key={index}>
                        <ImgCard></ImgCard>
                        <ResumeCard>{item.resumo}</ResumeCard>
                        <h3>{item.name_video}</h3>
                        <p>{item.pastor}</p>
                    </GridCard>
                ))}
                {series.map((item, index) => (
                    <GridCard key={index}>
                        <ImgCard></ImgCard>
                        <ResumeCard>{item.resumo}</ResumeCard>
                        <h3>{item.name_video}</h3>
                        <p>{item.pastor}</p>
                    </GridCard>
                ))}



            </GridContainer>


        </>
    )
}