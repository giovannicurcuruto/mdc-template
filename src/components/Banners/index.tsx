import { BannerBackground, BannerImage, BannerSecondary, DivSlider, ImgLogoHP } from "./style";
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
        //dots: true,
        fade: true, 
        waitforAnimate: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false

    };
    return (
        <>       
            
            <DivSlider className="slider-container">
                <Slider {...settings}>

                    <div>
                        <BannerBackground
                            style={{ backgroundImage: `url(${img_banner_church})` }}  >

                            <div></div>
                            <ImgLogoHP>
                                <img src={logo_banner} alt="" />
                            </ImgLogoHP>
                        </BannerBackground>
                    </div>
                    <div>
                        <BannerBackground
                            style={{ backgroundImage: `url(${img1})` }}  >

                            <div></div>
  
                        </BannerBackground>
                    </div>
                    <div>
                        <BannerBackground
                            style={{ backgroundImage: `url(${img2})` }}  >

                            <div></div>
            
                        </BannerBackground>
                    </div>
                    <div>
                        <BannerBackground
                            style={{ backgroundImage: `url(${img3})` }}  >

                            <div></div>
  
                        </BannerBackground>
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
