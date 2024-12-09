import { BannerEncontre } from "../../components/Banners";
import CalendarComponent from "../../components/calendar";
import ImageText from "../../components/ImageText";
import ImageTextRight from "../../components/ImageTextRight";
import { ContainerCalendar, Wrapper } from "./style";

export default function OurSchedulePage() {
    return (
        <>
            <BannerEncontre />
            <Wrapper>

                <ImageText />
                <ImageTextRight />
                <br />
                <ContainerCalendar>
                    <CalendarComponent />
                </ContainerCalendar>
            </Wrapper>

        </>
    )
}