import { useState } from 'react';
import { getHoteles } from '../../services/api';

export const useGetHoteles = () => {
    const [hotelData, setHotelData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchHoteles = async () => {
        try {
            setLoading(true);
            const { data } = await getHoteles();
            console.log("dataa hoteles", data);
            setHotelData(data.hoteles);
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    return {
        hotelData,
        loading,
        error,
        fetchHoteles,
    };
};