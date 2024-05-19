import { useState } from "react";
import toast from "react-hot-toast";
import { deleteService as deleteServiceRequest } from "../../services/api"

export const useDeleteService = () => {
    const [isLoading, setIsLoading] = useState(false);

    const deleteService = async (id) => {
        setIsLoading(true);
        console.log("ID del servicio a eliminar:", id);
        try {
            const response = await deleteServiceRequest(id);
            if (response.status === 200) {
                toast.success("Servicio eliminado exitosamente");
            } else {
                throw new Error("Error al eliminar el servicio");
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data || "Error al eliminar el servicio");
            } else if (error.request) {
                toast.error("Error de red al intentar eliminar el servicio");
            } else {
                toast.error("Error al eliminar el servicio");
            }
        }
        setIsLoading(false);
    };

    return {
        deleteService,
        isLoading
    };
};
