import { ImageTextContainerLandscape, ImgBoxLandscape, ImgContentLandscape, TextLandscape } from "./style";

//import Banner03 from '../../assets/banner_03.jpg';

interface ImageTextLandscapeProps {
    banner: string,
    titulo: string,
    texto: string
}

export default function ImageTextLandscape(props : ImageTextLandscapeProps) {
    return (
        <>
            <ImageTextContainerLandscape>
                <ImgContentLandscape>
                    <ImgBoxLandscape
                        alt="Foto Pastor Junior e Victoria Batista"
                        src={props.banner} // Substitua pelo caminho da imagem
                    />
                </ImgContentLandscape>

                <TextLandscape>
                    <h2>{props.titulo}</h2>
                    <p>
                        {props.texto}
                    </p>
                </TextLandscape>
            </ImageTextContainerLandscape>

        </>
    )
}