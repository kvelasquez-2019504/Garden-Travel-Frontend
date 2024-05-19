import React, { useEffect, useState } from "react";
import { useGetServices } from "../shared/hooks/useGetServices";
import { useDeleteService } from "../shared/hooks/useDeleteService";
import { CardServices } from "./CardServices";
import { AddService } from "./forms/AddService";

export const Services = () => {
    const { serviceData, loading, error, fetchServices } = useGetServices();
    const { deleteService, isLoading: isDeleting } = useDeleteService();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const handleCardClick = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (selectedService) {
            await deleteService(selectedService._id);
            setIsModalOpen(false);
            fetchServices();
            console.log(selectedService._id)
        }
    };

    return (
        <div>
            <section>
                <AddService />
                <h1>Servicios Individuales</h1>
            </section>
            <section className="card-section-servicio">
                <div className="content-servicio">
                    <div className="card-container-servicio">
                        {loading && <p>Cargando...</p>}
                        {error && <p>Error: {error}</p>}
                        {Array.isArray(serviceData) && serviceData.length > 0 ? (
                            serviceData.map((servicio) => (
                                <div key={servicio._id} onClick={() => handleCardClick(servicio)}>
                                    <CardServices
                                        nombre={servicio.nombre}
                                        precio={servicio.precio}
                                    />
                                </div>
                            ))
                        ) : (
                            !loading && <p>No hay servicios disponibles.</p>
                        )}
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <p>¿Está seguro que desea eliminar este servicio?</p>
                        <button onClick={handleConfirmDelete} disabled={isDeleting}>Eliminar</button>
                        <button onClick={() => setIsModalOpen(false)} disabled={isDeleting}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    );
};
