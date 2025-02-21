import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Outlet } from "react-router";

export default function NavLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}