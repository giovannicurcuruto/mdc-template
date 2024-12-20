import { CardContainer, CardImage, CardText, CardIcon } from './style';

interface CardsComponentsProps{
    img: string,
    titulo: string,
    texto: string,
}

export default function CardsComponents(props: CardsComponentsProps) {
    function extractYouTubeVideoId(url: string): string | null {
        const match = url?.match(/(?:\?v=|\/embed\/|\/v\/|youtu\.be\/|\/watch\?v=)([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : null;
    }
    
    const videoId = extractYouTubeVideoId(props.img);
    const thumbnailVideo = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

    return (
        <>
            <CardContainer>
                <CardImage src={thumbnailVideo} alt="Pastor" />
                <CardText>
                    <h2>{props.titulo}</h2>
                    <p>
                        {props.texto}
                    </p>
                </CardText>
                <CardIcon>
                    <i className="fa-solid fa-arrow-right"></i>
                </CardIcon>
            </CardContainer>
        </>
    )
}