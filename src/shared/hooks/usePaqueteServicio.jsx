import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { listarPaqueteServicios as listarPaqueteServicioRequest } from "../../services/api";

export const usePaqueteServicio = () => {
    const [charge, setCharge] = useState(false);
    const [paqueteServicio, setPaqueteServicio] = useState({});

    const listartPaqueteServicio = async () => {
        try {
            setCharge(true);
            const response = await listarPaqueteServicioRequest();
            setPaqueteServicio(response.data);
        } catch (error) {
            return toast.error(error || 'Error al listar los paquetes de servicio');
        } finally {
            setCharge(false);
        }
    }

    return {
        paqueteServicio,
        charge:!charge,
        listartPaqueteServicio,
    }
}
