import { BrowserRouter, Routes, Route  } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ChurchsPage from "./pages/Churchs";
import ContentPage from "./pages/Content";
import ContactPage from "./pages/Contact";
import OurSchedulePage from "./pages/Our_Schedule";
import VideosContent from "./pages/Content - Palavras/Index";
import BiblicoContent from "./pages/Content - Biblicos";
import DevocionaisContent from "./pages/Content - Devocionais";

export const ROUTESPATHS = {
    ROOT: "/",
    ABOUT: '/about',
    CHURCH: '/church',
    CONTENT: '/content',
    CON_BIBLICO: '/content/biblicos',
    CON_PALAVRAS: '/content/palavras',
    CON_DEVO: '/content/devocionais',
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
                    <Route path={ROUTESPATHS.CONTENT} element={<ContentPage/>} >
                        <Route path={ROUTESPATHS.CON_PALAVRAS} element={<VideosContent/>} />
                        <Route path={ROUTESPATHS.CON_BIBLICO} element={<BiblicoContent/>} />
                        <Route path={ROUTESPATHS.CON_DEVO} element={<DevocionaisContent/>} />                  
                    
                    
                    </Route>
                    <Route path={ROUTESPATHS.CONTACT} element={<ContactPage/>} />
                    <Route path={ROUTESPATHS.OUR_SCHEDULE} element={<OurSchedulePage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}