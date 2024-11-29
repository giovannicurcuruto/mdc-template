import { BrowserRouter, Routes, Route  } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

export const ROUTESPATHS = {
    ROOT: "/",
    ABOUT: '/about'
}


export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTESPATHS.ROOT} element={<DefaultPage />} >
                    <Route path={ROUTESPATHS.ROOT} element={<HomePage />} />
                    <Route path={ROUTESPATHS.ABOUT} element={<AboutPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}