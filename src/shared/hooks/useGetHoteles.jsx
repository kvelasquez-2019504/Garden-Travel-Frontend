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
            console.log(data);
            setHotelData(data.hotelData);
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