import { useState } from 'react';
import { addHotel as addHotelRequest } from '../../services/api';
import toast from 'react-hot-toast';

export const useAddHotel = () => {
    const [hotelData, setHotelData] = useState([]);

    const addHotel = async (nombre, direccion, telefono, estrellas, habitaciones, habOcupadas, img,) => {
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
            toast.error('Error trying to add hotel or hotel data is null');
        } else {
            setHotelData([...hotelData, response.data]);
            toast.success('Hotel added successfully');
        }
        return response.data;
    };

    return {
        addHotel,
    };
};