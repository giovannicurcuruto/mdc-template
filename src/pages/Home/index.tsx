import { BannerSecondary,  BgBox, CardContainer, ImgPastors, LastGrid, Pastors, PastorsImgContent, PastorsText, Reveal } from "./styles";
//import foto_patores from "../../assets/pastors.jpg";
import ImageText from "../../components/ImageText";
import { BannerEncontre, BannerHome, BannerSlider } from "../../components/Banners";
import CardsComponents from "../../components/Cards";
import { AuthDataInfo } from "../../utils/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "../../types/home/cards";
import { Banner } from "../../types/home/banner";
import { Carousel } from "../../types/home/carousel";
import { Sections } from "../../types/home/sections";
import ScrollReveal from "scrollreveal";

type ApiResponse = {
    success: boolean;
    data: [
        {
            cards: {
                card_direita: Cards[];
                card_esquerda: Cards[];
                card_meio: Cards[];
            };
        },
        {
            banner: Banner[];
            carousel: Carousel[]
        },
        {
            section1: Sections[];
            section3: Sections[]
        }
    ]

};

export default function HomePage() {
    const [cards, setCards] = useState<Cards[]>([]);
    const [, setBanner] = useState<Banner[]>([]);
    const [carousel, setCarousel] = useState<Carousel[]>([]);
    const [sections, setSections] = useState<Sections[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<ApiResponse>(
                    AuthDataInfo.URL + "rest.php?class=SiteService&method=getHomePageItens",
                    {
                        headers: {
                            Authorization: AuthDataInfo.TOKEN,
                        }
                    }
                );
                //console.log(response.data.data)
                if (response.data.success) {
                    const [cardsData, carouselData, sectionsData] = response.data.data;

                    const combinedCards = [
                        ...cardsData.cards.card_direita,
                        ...cardsData.cards.card_esquerda,
                        ...cardsData.cards.card_meio
                    ];

                    setCards(combinedCards);
                    setBanner(carouselData.banner);
                    setCarousel(carouselData.carousel);
                    setSections([
                        ...sectionsData.section1,
                        ...sectionsData.section3
                    ]);

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

        const sr = ScrollReveal({
            origin: "top",
            distance: "30px",
            duration: 1000,
            reset: true,
        });

        sr.reveal(".reveal", {
            interval: 200,
            beforeReveal: (el) => {
                if (el instanceof HTMLElement) {
                    el.classList.add("is-visible");
                }
            },
            //beforeReset: (el) => el.classList.remove("is-visible"),
        });
    }, []);

    //console.log(cards[2]?.foto)
    //console.log(`${AuthDataInfo.URL}${sections[1]?.foto_s3}`);


    return (
        <>
            <section>
                <BannerHome />                
                    <Pastors>
                        <PastorsImgContent>
                            <BgBox />
                            <ImgPastors
                                alt="Foto Pastor Junior e Victoria Batista"
                                src={`${AuthDataInfo.URL}${sections[0]?.foto_s1}`}
                            />
                        </PastorsImgContent>
                        <PastorsText>
                            <h2>{sections[0]?.titulo}</h2>
                            <p>{sections[0]?.texto}</p>
                            <button className={"button"} type="button">Saiba Mais</button>
                        </PastorsText>
                    </Pastors>
                
                <Reveal className="reveal">
                    <BannerSecondary>
                        <BannerSlider banners={carousel} />
                    </BannerSecondary>
                </Reveal>

                <Reveal className="reveal">
                    <CardContainer>
                        <CardsComponents
                            img={`${AuthDataInfo.URL}${cards[0]?.foto}`}
                            titulo={cards[0]?.titulo}
                            texto={cards[0]?.texto} />
                        <CardsComponents
                            img={cards[1]?.foto}
                            titulo={cards[1]?.titulo}
                            texto={cards[2]?.texto} />
                        <CardsComponents
                            img={cards[2]?.foto}
                            titulo={cards[2]?.titulo}
                            texto={cards[2]?.texto} />
                    </CardContainer>
                </Reveal>
                <Reveal className="reveal">
                    <section>
                        <BannerEncontre />
                    </section>
                </Reveal>
                <Reveal className="reveal">
                    <LastGrid>
                        <ImageText
                            foto={`${AuthDataInfo.URL}${sections[1]?.foto_s3}`}
                            titulo={sections[1]?.titulo}
                            texto={sections[1]?.texto} />
                    </LastGrid>
                </Reveal>
                
                


            </section>
            
            {/* <BarraFixa>Seja Bem vindo a Mais de Cristo! </BarraFixa> */}
        </>
    )
}