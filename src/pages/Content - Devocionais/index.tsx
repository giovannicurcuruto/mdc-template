import { useState } from "react";
import { biblico } from "../../types/content/biblico";
import { devocional } from "../../types/content/devocionais";
import { series } from "../../types/content/series";
import { videos } from "../../types/content/sermao";
import axios from "axios";
import { AuthDataInfo } from "../../utils/auth";
import { CliqueMe, CloseButton, FormContainer, GridCard, GridContainer, ImgCard, Modal, ModalContent, SearchButton, SearchInput } from "./style";

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

export default function DevocionaisContent() {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const [, setSermao] = useState<videos[]>([]);
    const [, setSeries] = useState<series[]>([]);
    const [devocional, setDevocional] = useState<devocional[]>([]);
    const [, setBiblico] = useState<biblico[]>([]);

    const [selectedItem, setSelectedItem] = useState<biblico | null>(null); // Estado para o item selecionado

    const fetchContent = async () => {
        try {
            const response = await axios.get<ApiResponse>(
                AuthDataInfo.URL + "rest.php?class=SiteService&method=getContentPageItens",
                {
                    headers: {
                        Authorization: AuthDataInfo.TOKEN,
                    }
                }
            );

            if (response.data.success) {
                const seriesResponse = response.data.data[0]['series'];
                const videoResponse = response.data.data[0]['videos'];
                //const devoResponse = response.data.data[1]['devocional'];
                const biblicoResponse = response.data.data[1]['biblico'];


                const searchFilter = (item: { resumo?: string; titulo?: string; pastor?: string }) => {
                    const query = searchQuery.trim().toLowerCase(); // Remover espaços e normalizar a consulta
                    const fields = [item.resumo, item.titulo, item.pastor]; // Agrupar os campos a serem verificados

                    // Depuração: Logar os campos analisados
                    console.log("Analisando item:", fields);

                    // Verificar se algum campo inclui a query
                    return fields.some((field) =>
                        field?.trim().toLowerCase().includes(query) // Remover espaços e normalizar os campos
                    );
                };

                // Filtro aplicado
                const testResponse = response.data.data[1]['devocional'].filter(searchFilter);


                setSeries(seriesResponse);
                setSermao(videoResponse);
                setDevocional(testResponse);
                setBiblico(biblicoResponse);
            }
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.error("Erro Axios:", err.response?.data || err.message);
            } else {
                console.error("Erro inesperado:", err);
            }
        }
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchContent();
        alert("Pesquisa enviada!");
    }

    const handleItemClick = (item: biblico) => {
        setSelectedItem(item); // Definir o item selecionado para abrir o modal
    };

    const handleCloseModal = () => {
        setSelectedItem(null); // Fechar o modal
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
                {devocional.map((item, index) => (
                    <GridCard key={index}>
                        <ImgCard src={`${AuthDataInfo.URL}${item.foto}`}></ImgCard>
                        <h3>{item.titulo}</h3>
                        <p>{item.resumo}</p>
                        <CliqueMe href="#" onClick={() => handleItemClick(item)}>
                            Clique aqui para ler mais!
                        </CliqueMe>
                    </GridCard>
                ))}

            </GridContainer>

            {selectedItem && (
                <Modal>
                    <ModalContent>
                        <CloseButton onClick={handleCloseModal}>×</CloseButton>
                        <ImgCard src={`${AuthDataInfo.URL}${selectedItem.foto}`} />
                        <h3>{selectedItem.titulo}</h3>
                        <p>{selectedItem.texto}</p>
                    </ModalContent>
                </Modal>
            )}

        </>
    )
}