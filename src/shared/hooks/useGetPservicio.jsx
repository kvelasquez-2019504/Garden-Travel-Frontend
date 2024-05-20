import { useState } from 'react';
import { getPaqueteServicio } from '../../services/api';

export const useGetPservicio = () => {
    const [paqueteData, setPaqueteData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchPservicio = async () => {
        try {
            setLoading(true);
            const { data } = await getPaqueteServicio();
            console.log(data);
            setPaqueteData(data.paqueteServicio);
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    return {
        paqueteData,
        loading,
        error,
        fetchPservicio,
    };
};
