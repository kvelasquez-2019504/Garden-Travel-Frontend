import { useState } from "react";
import { getTipoHabitaciones } from "../../services/api";

export const useGetTipoHab = () => {
    const [tipoHabitacionData, setTipoHabitacionData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchTipoHabitaciones = async () => {
        try {
            setLoading(true);
            const { data } = await getTipoHabitaciones();
            setTipoHabitacionData(data.tipoHabitacion);
            console.log("hookkkkk", data.tipoHabitacion);
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    return {
        tipoHabitacionData,
        loading,
        error,
        fetchTipoHabitaciones,
    };
}