import { useNavigate } from "react-router";
import { Button } from "./ui/button";

export const LogoutButton = () => {
    const navigate = useNavigate();

    const handleClick = async () => {
        const res = await fetch(import.meta.env.VITE_API_URL + "/auth/logout", {
            method: "POST",
            mode: "cors",
            // credentials: "include",
        });

        if (!res.ok) {
            const error = await res.json();
            console.error(error);
        }

        localStorage.removeItem("token");
        localStorage.removeItem("userType");
        navigate("/login");
    };

    return (
        <Button
            onClick={handleClick}
        >
            Logout
        </Button>
    );
};
