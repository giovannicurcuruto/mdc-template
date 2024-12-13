
import { BannerSecondary, BgBox, CardContainer, ImgPastors, LastGrid, Pastors, PastorsImgContent, PastorsText } from "./styles";


//importações que depois serão removidas
import foto_patores from "../../assets/pastors.jpg";
import ImageText from "../../components/ImageText";
import { BannerEncontre, BannerHome, BannerSlider } from "../../components/Banners";
import CardsComponents from "../../components/Cards";

export default function HomePage() {
    return (
        <>
            <section>
                <BannerHome />
                <Pastors>
                    <PastorsImgContent>
                        <BgBox></BgBox>
                        <ImgPastors
                            alt="Foto Pastor Junior e Victoria Batista"
                            src={foto_patores}
                        />
                    </PastorsImgContent>
                    <PastorsText>
                        <h2>PASTORES JUNIOR & VITÓRIA BATISTA.</h2>
                        <p>Na Mais de Cristo, acreditamos que seus melhores dias ainda estão por vir. Seja presencial ou online, convidamos você a conhecer nossos serviços e fazer parte da família Mais de Cristo. A Bíblia diz que quando você for plantado na casa do Senhor, você florescerá. Prepare-se para entrar em um novo nível do seu destino!</p>
                        <button className={"button"} type="button">Saiba Mais</button>
                    </PastorsText>

                </Pastors>

                {/* <BannerSecondary>
                    <BannerSemanal />
                </BannerSecondary> */}

                <BannerSecondary>
                    <BannerSlider />
                </BannerSecondary>

                <CardContainer>
                    <CardsComponents />
                    <CardsComponents />
                    <CardsComponents />
                </CardContainer>

                <section>
                    <BannerEncontre />
                </section>
                <LastGrid>
                    <ImageText />
                </LastGrid>

            </section>
        </>
    )
}