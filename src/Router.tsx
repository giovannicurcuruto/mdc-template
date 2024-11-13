import { BrowserRouter, Routes, Route  } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import HomePage from "./pages/Home";

export const ROUTESPATHS = {
    ROOT: "/"
}


export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTESPATHS.ROOT} element={<DefaultPage />} >
                    <Route path={ROUTESPATHS.ROOT} element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}