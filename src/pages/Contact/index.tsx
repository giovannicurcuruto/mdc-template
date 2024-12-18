import { BannerEncontre } from "../../components/Banners";
import Formulario from "../../components/Forms";
import MapComponent from "../../components/Leaflet";
//import Maps from "../../components/Maps";
import { Wrapper } from "./style";

export default function ContactPage() {
    return (
        <>
            <BannerEncontre />
            <Wrapper>
                <div>
                    <MapComponent />
                </div>
                <div>
                    <Formulario />
                </div>
            </Wrapper>
        </>
    )
}