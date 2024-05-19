import { useState } from "react";
import { addService as addServiceRequest } from "../../services";
import toast from "react-hot-toast";

export const useAddService = () => {
    const [isLoading, setIsLoading] = useState(false)
    const addService = async (nombre, precio) => {
        setIsLoading(true)
        try {
            await addServiceRequest(nombre, precio);
            toast.success("Servicio Agregado exitosamente")
        } catch (error) {
            toast.error("Ocurrio un error al agregar el servicio")
            console.error("Error al agregar Servicio: ", error)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        addService,
        isLoading
    }
}