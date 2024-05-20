import React from 'react';

export const CardPservicio = ({
    nombrePservicio,
    nombreServicio
}) => {
    return (
        <div className="card-pservicio">
            <div className="card-details-pservicio">
                <p className="text-title-pservicio">{nombrePservicio}</p>
                <ul className="text-details-pservicio">
                    {nombreServicio.map((servicio, index) => (
                        <li key={index}>{servicio.nombre}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}