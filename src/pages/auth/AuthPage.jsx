import { useState } from "react";
import { Login } from "../../components/auth/Login";
import { Register } from "../../components/auth/Register";
import './authPage.css';

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleAuthPageToggle = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <div>
            {isLogin ? (
                <Login switchAuthHandler={handleAuthPageToggle} />
            ) : (
                <Register switchAuthHandler={handleAuthPageToggle} />
            )}
        </div>
    );
}