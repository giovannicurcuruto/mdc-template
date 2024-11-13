import { Outlet } from "react-router-dom";
import FooterComponent from "./Footer";
import HeaderComponent from "./Header";

export default function DefaultPage(){
    return(
        <>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </>
    )
}