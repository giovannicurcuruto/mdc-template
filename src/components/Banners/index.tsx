import { BannerImage, BannerSecondary } from "./style";
import img_banner from '../../assets/banner_04.jpg';
import img_banner_semanal from '../../assets/banner_01.jpg';

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

/**.bannerSecondary {
  width: 100%;
}

.bannerSecondary img {
  width: 100%;
  object-fit: contain;
} */