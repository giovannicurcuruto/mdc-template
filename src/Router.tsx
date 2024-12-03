import { BrowserRouter, Routes, Route  } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ChurchsPage from "./pages/Churchs";
import ContentPage from "./pages/Content";
import ContactPage from "./pages/Contact";
import OurSchedulePage from "./pages/Our_Schedule";

export const ROUTESPATHS = {
    ROOT: "/",
    ABOUT: '/about',
    CHURCH: '/church',
    CONTENT: '/content',
    CONTACT: '/contact',
    OUR_SCHEDULE: '/our_schedule'
}


export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTESPATHS.ROOT} element={<DefaultPage />} >
                    <Route path={ROUTESPATHS.ROOT} element={<HomePage />} />
                    <Route path={ROUTESPATHS.ABOUT} element={<AboutPage/>} />
                    <Route path={ROUTESPATHS.CHURCH} element={<ChurchsPage/>} />
                    <Route path={ROUTESPATHS.CONTENT} element={<ContentPage/>} />
                    <Route path={ROUTESPATHS.CONTACT} element={<ContactPage/>} />
                    <Route path={ROUTESPATHS.OUR_SCHEDULE} element={<OurSchedulePage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}