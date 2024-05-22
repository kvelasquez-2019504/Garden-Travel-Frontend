import { useState, useEffect } from "react";
import { getUsuario } from "../../services/api";

export const useGetUsuario = () => {
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsuario = async () => {
        try {
            setLoading(true);
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user || !user.token) {
                throw new Error('No hay un token de autenticación disponible');
            }
            const token = user.token;
            const response = await getUsuario(token);
            if (response.error) {
                throw new Error(response.message);
            }
            setUsuario(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            console.error(error);
            setLoading(false);
        }
    };

    return {
        usuario,
        loading,
        error,
        fetchUsuario
    };
};