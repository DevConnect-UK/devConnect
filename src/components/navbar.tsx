import { Link } from "react-router";
import { useEffect, useState } from "react";
import DC_ICON from "../assets/DC_Logo.svg";
import { UserType, userTypeFromString } from "@/lib/sharedTypes";
import { LogoutButton } from "./logout";
import { Menu, X } from "lucide-react";

export function NavBar() {
    const [userType, setUserType] = useState<UserType>(
        userTypeFromString(localStorage.getItem("userType"))
    );
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("storage", () => {
            setUserType(userTypeFromString(localStorage.getItem("userType")));
        });
    }, []);

    let links;
    switch (userType) {
        case UserType.Admin:
            links = (
                <Link to="/admin" className="text-gray-600 hover:text-blue-600">
                    Admin Dashboard
                </Link>
            );
            break;
        case UserType.Business:
            links = (
                <>
                    <Link to="/business/projects/new" className="text-gray-600 hover:text-blue-600">
                        create a project
                    </Link>
                    <Link to="/business/projects/new" className="text-gray-600 hover:text-blue-600">
                        My Projects
                    </Link>
                </>
            );
            break;
        case UserType.Student:
            links = (
                <Link to="/student/inbox" className="text-gray-600 hover:text-blue-600">
                    My Jobs
                </Link>
            );
            break;
        default:
            links = (
                <>
                    <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Sign Up
                    </Link>
                    <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Login
                    </Link>
                </>
            );
    }

    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 h-16 flex justify-between items-center">
                <Link to="/">
                    <img src={DC_ICON} className="h-12" alt="DC Icon" />
                </Link>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
                <div className={`md:flex space-x-4 hidden`}>
                    <Link to="/pricing" className="text-gray-600 hover:text-blue-600">
                        Pricing
                    </Link>
                    <Link to="/about" className="text-gray-600 hover:text-blue-600">
                        About Us
                    </Link>
                    <Link to="/faq" className="text-gray-600 hover:text-blue-600">
                        FAQ
                    </Link>
                    {links}
                    {userType !== UserType.Guest && <LogoutButton />}
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-md">
                    <Link to="/pricing" className="text-gray-600 hover:text-blue-600">
                        Pricing
                    </Link>
                    <Link to="/about" className="text-gray-600 hover:text-blue-600">
                        About Us
                    </Link>
                    <Link to="/faq" className="text-gray-600 hover:text-blue-600">
                        FAQ
                    </Link>
                    {links}
                    {userType !== UserType.Guest && <LogoutButton />}
                </div>
            )}
        </header>
    );
}
