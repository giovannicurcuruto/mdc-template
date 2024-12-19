import { BgBox, Button, ImageTextContainer, ImgBox, ImgContent, TextContent } from "./style";
//import Img01 from '../../assets/img01.jpg';

interface ImageTextRightProps{
    foto: string,
    titulo: string,
    texto: string
}

export default function ImageTextRight(props : ImageTextRightProps) {
    return (
        <>
            <ImageTextContainer>
                <TextContent>
                    <h2>{props.titulo}</h2>
                    <p>
                        {props.texto}
                    </p>
                    <Button type="button">Saiba Mais</Button>
                </TextContent>
                <ImgContent>
                    <BgBox />
                    <ImgBox
                        alt="Foto Pastor Junior e Victoria Batista"
                        src={props.foto} // Substitua pelo caminho da imagem
                    />
                </ImgContent>
            </ImageTextContainer>

        </>
    )
}