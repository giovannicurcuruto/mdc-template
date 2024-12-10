import { BannerBackground, BannerImage, BannerSecondary } from "./style";
import img_banner from '../../assets/banner_04.jpg';
import img_banner_semanal from '../../assets/banner_01.jpg';
import img_banner_church from '../../assets/church.jpg';
import logo_banner from '../../assets/logo2.png';
import Slider from "react-slick";


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
            <BannerBackground
                style={{ backgroundImage: `url(${img_banner_church})` }}  >

                <div></div>
                <div>
                    <img src={logo_banner} alt="" />
                </div>



            </BannerBackground>
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

export function BannerSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
        
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={img_banner_semanal} alt="Agenda semanal" />
                </div>
                <div>
                    <img src={img_banner_semanal} alt="Agenda semanal" />
                </div>
                <div>
                    <img src={img_banner_semanal} alt="Agenda semanal" />
                </div>
                <div>
                    <img src={img_banner_semanal} alt="Agenda semanal" />
                </div>
                <div>
                    <img src={img_banner_semanal} alt="Agenda semanal" />
                </div>
                <div>
                    <img src={img_banner_semanal} alt="Agenda semanal" />
                </div>
            </Slider>
        </div>
    );

}
