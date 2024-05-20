import React, { useEffect } from 'react';
import { useGetPservicio } from './../shared/hooks/useGetPservicio';

const PaqueteServicios = () => {
    const { paqueteData, loading, error, fetchPservicio } = useGetPservicio();

    useEffect(() => {
        fetchPservicio();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Paquetes de Servicios</h1>
            <ul>
                {paqueteData.map(paquete => (
                    <li key={paquete._id}>{paquete.nombrePservicio}</li>
                ))}
            </ul>
        </div>
    );
};

export default PaqueteServicios;
