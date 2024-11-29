import { BannerEncontre } from "../../components/Banners";
import ImageText from "../../components/ImageText";
import ImageTextLandscape from "../../components/ImageTextLandscape";
import ImageTextRight from "../../components/ImageTextRight";
import { AboutContent, Main } from "./style";

export default function AboutPage() {
    return (
        <>
            <Main>
                <BannerEncontre />
                <AboutContent>
                    <h1>Sobre a Mais de Cristo</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
                        fugit eius quaerat eligendi alias tempore nulla quibusdam blanditiis
                        ratione praesentium accusamus accusantium impedit dicta, ex iusto
                        exercitationem maxime expedita omnis.
                    </p>

                    <hr />

                    <ImageTextRight />

                    <hr />

                    <ImageText />

                    <hr />

                    <ImageTextLandscape />
                </AboutContent>





            </Main>


        </>
    )
}