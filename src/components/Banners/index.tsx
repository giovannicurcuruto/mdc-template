import { BannerBackground, BannerImage, BannerSecondary, DivSlider } from "./style";
import img_banner from '../../assets/banner_04.jpg';
import img_banner_semanal from '../../assets/banner_01.jpg';
import img_banner_church from '../../assets/church.jpg';
import logo_banner from '../../assets/logo2.png';
import Slider from "react-slick";
import { Carousel } from "../../types/home/carousel";
import { AuthDataInfo } from "../../utils/auth";

import img1 from '../../assets/banner_01.jpg';
import img2 from '../../assets/banner_02.jpg';
import img3 from '../../assets/banner_03.jpg';


interface BannerSliderProps {
    banners: Carousel[]
}
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
        <>
            {/* <BannerBackground
                style={{ backgroundImage: `url(${img_banner_church})` }}  >

                <div></div>
                <div>
                    <img src={logo_banner} alt="" />
                </div>
            </BannerBackground> */}
            
            <DivSlider className="slider-container">
                <Slider {...settings}>

                    <div>
                        <BannerBackground
                            style={{ backgroundImage: `url(${img_banner_church})` }}  >

                            <div></div>
                            <div>
                                <img src={logo_banner} alt="" />
                            </div>
                        </BannerBackground>
                    </div>
                    <div>
                        <img src={img1} alt="Agenda semanal" />
                    </div>
                    <div>
                        <img src={img2} alt="Agenda semanal" />
                    </div>
                    <div>
                        <img src={img3} alt="Agenda semanal" />
                    </div>

                </Slider>
            </DivSlider>
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

export function BannerSlider(props: BannerSliderProps) {
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
                    <img src={`${AuthDataInfo.URL}${props.banners[0]?.banner_carousel}`} alt="Agenda semanal" />
                </div>
                <div>
                    <img src={`${AuthDataInfo.URL}${props.banners[1]?.banner_carousel}`} alt="Agenda semanal" />
                </div>
                <div>
                    <img src={`${AuthDataInfo.URL}${props.banners[2]?.banner_carousel}`} alt="Agenda semanal" />
                </div>
                <div>
                    <img src={`${AuthDataInfo.URL}${props.banners[3]?.banner_carousel}`} alt="Agenda semanal" />
                </div>
                <div>
                    <img src={`${AuthDataInfo.URL}${props.banners[4]?.banner_carousel}`} alt="Agenda semanal" />
                </div>
            </Slider>
        </div>
    );

}
