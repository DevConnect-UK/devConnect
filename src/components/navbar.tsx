import { Link } from "react-router";
import DC_ICON from "../assets/DC_Logo.svg";
import { useEffect, useState } from "react";
import { UserType, userTypeFromString } from "@/lib/sharedTypes";
import { LogoutButton } from "./logout";
export function NavBar() {
    const [userType, setUserType] = useState<UserType>(
        userTypeFromString(localStorage.getItem('userType'))
    );

    useEffect(() => {
        window.addEventListener('storage', () => {
            setUserType(userTypeFromString(localStorage.getItem('userType')))
        });
    }, []);

    let links;
    switch (userType) {
        case UserType.Admin:
            links = (
                <>
                    <Link to="/admin" className="text-gray-600 hover:text-blue-600">
                        Admin Dashboard
                    </Link>
                </>

            );
            break;
        case UserType.Business:
            links = (
                <>
                    <Link to="/business/job-form" className="text-gray-600 hover:text-blue-600">
                        Post a Job
                    </Link>
                </>
            );
            break;
        case UserType.Student:
            links = (
                <>
                    <Link to="/student/inbox" className="text-gray-600 hover:text-blue-600">
                        My Jobs
                    </Link>
                </>
            );
            break;
        default:
            links = (
                <>
                    <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" >
                        Sign Up
                    </Link>
                    <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        login
                    </Link>
                </>
            );
    }

    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 h-16 flex flex-row justify-between items-center">
                <Link to="/" >
                    <img src={DC_ICON} className="h-16" alt="DC Icon" />
                </Link>
                <div className="space-x-4">
                    <Link to="/pricing" className="text-gray-600 hover:text-blue-600">
                        Pricing
                    </Link>
                    <Link to="/about" className="text-gray-600 hover:text-blue-600">
                        About Us
                    </Link>
                    <Link to="/faq" className="text-gray-600 hover:text-blue-600">
                        FAQ
                    </Link>
                    {
                        links
                    }
                    {
                        userType !== UserType.Guest &&
                        <LogoutButton />
                    }
                </div>
            </nav>
        </header>
    );

}