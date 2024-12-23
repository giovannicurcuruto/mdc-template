import { BannerEncontre } from "../../components/Banners";
import Formulario from "../../components/Forms";
import MapComponent from "../../components/Leaflet";
import { Wrapper } from "./style";

export default function ContactPage() {
    return (
        <>
            <BannerEncontre banner={""} />
            <Wrapper>
                <div className="formulario">
                    <Formulario />
                </div>
                <div className="mapa">
                    <MapComponent />
                </div>
            </Wrapper>
        </>
    );
}
