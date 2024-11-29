import { BrowserRouter, Routes, Route  } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ChurchsPage from "./pages/Churchs";

export const ROUTESPATHS = {
    ROOT: "/",
    ABOUT: '/about',
    CHURCH: '/church'
}


export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTESPATHS.ROOT} element={<DefaultPage />} >
                    <Route path={ROUTESPATHS.ROOT} element={<HomePage />} />
                    <Route path={ROUTESPATHS.ABOUT} element={<AboutPage/>} />
                    <Route path={ROUTESPATHS.CHURCH} element={<ChurchsPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}