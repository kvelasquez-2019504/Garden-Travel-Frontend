import { useState } from "react";
import { getServices } from "../../services/api";

export const useGetServices = () => {
    const [serviceData, setServiceData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchServices = async () => {
        try {
            setLoading(true);
            const { data } = await getServices();
            console.log(data);
            setServiceData(data.servicios || []);
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    return {
        serviceData,
        loading,
        error,
        fetchServices
    };
};
