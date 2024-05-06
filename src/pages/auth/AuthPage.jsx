import { useState } from "react";
import { Login } from "../../components/Login";
import './authPage.css'; 

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleAuthPageToggle = () => {
        setIsLogin((prev) => !prev);
    };

    return (
            <Login switchAuthHandler={handleAuthPageToggle} />
    );
}