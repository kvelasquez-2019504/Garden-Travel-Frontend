import { useState } from 'react';
import { addHotel as addHotelRequest } from '../../services/api';
import toast from 'react-hot-toast';

export const useAddHotel = () => {
    const [loading, setLoading] = useState(false);

    const addHotel = async (nombre, direccion, telefono, estrellas, habitaciones, habOcupadas, img,) => {
        setLoading(true);
        const response = await addHotelRequest({
            nombre,
            direccion,
            telefono,
            estrellas,
            habitaciones,
            habOcupadas,
            img,
        });

        if (response.error) {
            toast.error('Error trying to add hotel');
        } else {
            toast.success('Hotel added successfully');
        }
        setLoading(false);
        return response.data;
    };

    return {
        loading,
        addHotel,
    };
};