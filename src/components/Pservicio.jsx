import { useState, useEffect } from "react";
import { useGetPservicio } from "../shared/hooks";
import { CardPservicio } from "./CardPservicio";

export const PaqueteServicios = () => {
    const { paqueteData, loading, error, fetchPservicio } = useGetPservicio();

    useEffect(() => {
        fetchPservicio();
    }, []);

    return (
        <section className="paquete-section">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className="card-container">
                {paqueteData.map(paquete => (
                    <CardPservicio
                        key={paquete._id}
                        nombrePservicio={paquete.nombrePservicio}
                        nombreServicio={paquete.nombreServicio.filter(servicio => servicio.state === true)}
                    />
                ))}
            </div>
        </section>
    );
};
