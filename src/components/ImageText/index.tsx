import { BgBox, Button, ImageTextContainer, ImgBox, ImgContent, TextContent } from "./style";
//import Img01 from "../../assets/img01.jpg"

interface section1 {
    foto: string,
    titulo: string,
    texto: string
}

export default function ImageText(props: section1) {
    return (
        <>
            <ImageTextContainer>
                <ImgContent>
                    <BgBox />
                    <ImgBox
                        alt="Foto Pastor Junior e Victoria Batista"
                        src={props.foto} 
                    />
                </ImgContent>
                <TextContent>
                    <h2>{props.titulo}</h2>
                    <p>{props.texto}</p>
                    <Button type="button">Saiba Mais</Button>
                </TextContent>
            </ImageTextContainer>
        </>
    )
}

