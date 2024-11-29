import { BgBox, Button, ImageTextContainer, ImgBox, ImgContent, TextContent } from "./style";
import Img01 from "../../assets/img01.jpg"

export default function ImageText() {
    return (
        <>
            <ImageTextContainer>
                <ImgContent>
                    <BgBox />
                    <ImgBox
                        alt="Foto Pastor Junior e Victoria Batista"
                        src={Img01} // Substitua pelo caminho relativo ou URL da imagem
                    />
                </ImgContent>
                <TextContent>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nobis officia totam quos qui illum praesentium saepe! Eius aperiam quaerat quibusdam iste dolorum blanditiis similique, quisquam amet, consequatur laboriosam minima.</p>
                    <Button type="button">Saiba Mais</Button>
                </TextContent>
            </ImageTextContainer>
        </>
    )
}