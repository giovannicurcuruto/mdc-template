import { BannerEncontre } from "../../components/Banners";
import FoundChurchs from "../../components/FoundChurchs";
import { AboutContent, GridSection } from "../Churchs/style";
import { locations } from './location';

export default function ChurchsPage() {
    return (
        <>
            <BannerEncontre />
            <AboutContent>
                <h1>Encontre uma igreja mais proxima de você</h1>
                <GridSection>
                {locations.map((church, index) => (
                        <FoundChurchs 
                            key={index} // Sempre use "key" única ao renderizar listas
                            name={church.name} 
                            address={church.address} 
                            city={church.city} 
                            cults={church.cults} 
                        />
                    ))}


                </GridSection>




            </AboutContent>

        </>
    )
}