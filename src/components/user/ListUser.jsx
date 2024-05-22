import React, { useEffect } from 'react';
import { useGetUsuario } from '../../shared/hooks';

export const ListUser = () => {
    const { usuario, fetchUsuario } = useGetUsuario();

    useEffect(() => {  
        fetchUsuario();
    }, []);

    console.log(usuario);

    return (
        <div>
            <h2>Usuario Logeado</h2>
            {usuario ? (
                <div>
                    <p>Apellidos: {usuario.apellido}</p>
                    <p>Email: {usuario.email}</p>
                    <p>Nombre: {usuario.nombre}</p>
                    <p>Password: {usuario.password}</p>
                </div>
            ) : (
                <div>No se ha cargado información del usuario.</div>
            )}
        </div>
    );
};