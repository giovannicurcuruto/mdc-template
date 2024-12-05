import { BannerImage, BannerSecondary } from "./style";
import img_banner from '../../assets/banner_04.jpg';
import img_banner_semanal from '../../assets/banner_01.jpg';
import img_banner_church from '../../assets/church.jpg';

export function BannerEncontre() {
    return (
        <>
            <BannerImage
                alt="Banner"
                src={img_banner}
            />
        </>
    )
}

export function BannerSemanal() {

    return (
        <>
            <BannerSecondary>
                <img src={img_banner_semanal} alt="Agenda semanal" />
            </BannerSecondary>
        </>
    )
}

export function BannerHome() {

    return (
        <>
            <BannerSecondary>
                <img src={img_banner_church} alt="Agenda semanal" />
            </BannerSecondary>
        </>
    )
}

export function BannerImgBanner() {
    return (
        <>
            <BannerImage
                alt="Banner"
                src={img_banner_church}
            />
        </>
    )
}
