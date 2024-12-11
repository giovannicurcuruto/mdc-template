import { BannerEncontre } from "../../components/Banners";
import ImageText from "../../components/ImageText";
import ImageTextLandscape from "../../components/ImageTextLandscape";
import ImageTextRight from "../../components/ImageTextRight";
import SepareteComponent from "../../components/Separate";
import { AboutContent, Main } from "./style";

export default function AboutPage() {
    return (
        <>
            <Main>
                <BannerEncontre />
                <AboutContent>
                    <h1>O que nós acreditamos!</h1>
                    <p>
                        Transformar a nossa cidade e região, implantando os principios e valores do Reino de Deus.
                    </p>
                    <hr />

                    <SepareteComponent />

                    <ImageTextRight />
                    <hr />
                    <SepareteComponent />
                    <hr />

                    <ImageText />

                    <hr />
                    <SepareteComponent />
                    <hr />

                    <ImageTextLandscape />
                </AboutContent>

            </Main>
        </>
    )
}