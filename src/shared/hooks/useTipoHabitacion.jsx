import {
    agregarTipoHabitacion as agregarTipoHabitacionRequest,
    listarTipoHabitacion as listarTipoHabitacionRequest,
    eliminarTipoHabitacion as eliminarTipoHabitacionRequest,
    editarTipoHabitacion as editarTipoHabitacionRequest,
} from "../../services/api"
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export const useTipoHabitacion = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [habitacion, setHabitacion] = useState();
    const navigate = useNavigate();

    const eliminarTipoHabitacion = async (id) => {
        setIsLoading(true);
        try {
            await eliminarTipoHabitacionRequest(id);
            toast.success('Tipo de habitación eliminado correctamente');
        } catch (exception) {
            return toast.error(exception.e?.response?.data || 'Error al eliminar el tipo de habitación');
        } 
        setIsLoading(false);
        navigate('/tipoHabitacion');
    }

    const editarTipoHabitacion = async (id, nombre, paqueteServicios, precio) => {
        setIsLoading(true);
        try {
            await editarTipoHabitacionRequest({id, nombre, paqueteServicios, precio});
            toast.success('Tipo de habitación editado correctamente');
        } catch (exception) {
            return toast.error(exception.e?.response?.data || 'Error al editar el tipo de habitación');
        }
        setIsLoading(false);
        navigate('/tipoHabitacion');
    }

    const agregarTipoHabitacion = async (nombre, paqueteServicios, precio) => {
        console.log(nombre, paqueteServicios, precio);
        setIsLoading(true);
        const response = await agregarTipoHabitacionRequest( {nombre, paqueteServicios, precio} );
        if (response.error) {
			return toast.error(
				response.error?.response?.data || "Error al agregar el tipo de habitación"
			);
		}
        setHabitacion(response.data);
        setIsLoading(false);
        return toast.success('Tipo de habitación agregado correctamente');
    }

    const listarTipoHabitacion = async () => {
        setIsLoading(true);
        try {
            const response = await listarTipoHabitacionRequest();
            setHabitacion(response.data);
        } catch (error) {
            return toast.error(error || 'Error al listar los tipos de habitación');
        } finally {
            setIsLoading(false);
        }
    }

    return {
        agregarTipoHabitacion,
        editarTipoHabitacion,
        listarTipoHabitacion,
        eliminarTipoHabitacion,
        tipoHabitacion: habitacion,
        isLoading: !isLoading,
    }
}
