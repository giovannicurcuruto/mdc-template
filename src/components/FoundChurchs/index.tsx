import { Card, CardContent, CardText, CardTitle, ContainerChurchs, ImageWrapper } from "./style";
import img from '../../assets/24.jpg';

interface FoundChurchsProps {
    name: string,
    address: string,
    city: string,
    cults: string
}

export default function FoundChurchs(props: FoundChurchsProps) {
    return (
        <>
            <ContainerChurchs>
                <Card>
                    {/* Render Image */}
                    <ImageWrapper>
                        <img src={img} alt={`Igreja localizada em ${props.city}`} />
                    </ImageWrapper>

                    {/* Card Content */}
                    <CardContent>
                        <CardTitle>{props.name}</CardTitle>
                        <CardText>
                            Endereço: {props.address}
                        </CardText>
                        <CardText>
                            Cidade: {props.city}
                        </CardText>
                        <CardText>
                            Horários/Dias dos Cultos: {props.cults}
                        </CardText>
                    </CardContent>
                </Card>

            </ContainerChurchs>

        </>
    )
}