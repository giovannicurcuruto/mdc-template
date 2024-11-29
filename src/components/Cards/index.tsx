
import imgCard from '../../assets/pastors.jpg';
import { CardContainer, CardImage, CardText, CardIcon } from './style';

export default function CardsComponents() {
    return (
        <>
            <CardContainer>
                <CardImage src={imgCard} alt="Pastor" />
                <CardText>
                    <h2>Céus Abertos</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                        repellendus magnam debitis minus saepe, commodi nostrum facilis ut
                        consequuntur quis? Iste ipsa molestiae esse dolorum cupiditate
                        asperiores alias, obcaecati repudiandae.
                    </p>
                </CardText>
                <CardIcon>
                    <i className="fa-solid fa-arrow-right"></i>
                </CardIcon>
            </CardContainer>
        </>
    )
}