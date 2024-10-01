import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./navbar.jsx";

export default function HomeLayout () {
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>


    )
}