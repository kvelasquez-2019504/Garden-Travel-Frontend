import { useState } from 'react';
import { register } from '../../services/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
    const [usuario, setUsuario] = useState([]);
    
    const addUser = async (nombre, apellido, email, password) => {
        const response = await register({
            nombre,
            apellido,
            email,
            password,
        });

        if (response.error) {
            toast.error('Error trying to add user or user data is null');
        } else {
            setUsuario([...usuario, response.data]);
            toast.success('User added successfully');
        }

        return response.data;
    };

    return {
        addUser,
    };
};