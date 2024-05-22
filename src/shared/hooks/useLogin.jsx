import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);
        const response = await loginRequest({
            email,
            password,
        });
        setIsLoading(false);

        if (response.error) {
            return toast.error(response.e?.response?.data || "An error occurred while trying to login, please try again");

        }

        const { userDetails } = response.data;

        localStorage.setItem("user", JSON.stringify(userDetails));

        navigate('/home')
    }
    return {
        login,
        isLoading,
    }
}