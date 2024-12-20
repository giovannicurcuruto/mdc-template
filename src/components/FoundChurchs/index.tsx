import { Card, CardContent, CardText, CardTitle, ContainerChurchs, ImageWrapper } from "./style";
import img from '../../assets/24.jpg';
import { AuthDataInfo } from "../../utils/auth";

interface FoundChurchsProps {
    name: string,
    address: string,
    city: string,
    cults: string,
    image: string
}

export default function FoundChurchs(props: FoundChurchsProps) {
    return (
        <>
            <ContainerChurchs>
                <Card>
                    {/* Render Image */}
                    <ImageWrapper>
                        <img src={`${AuthDataInfo.URL}${props.image}`} alt={`Igreja localizada em ${props.city}`} />
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