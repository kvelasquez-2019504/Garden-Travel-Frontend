import { useState, useEffect } from "react";
import { useGetHoteles } from "../shared/hooks";
import { CardHotel } from "./CardHotel";

export const Hoteles = () => {
    const { hotelData, loading, error, fetchHoteles } = useGetHoteles();

    useEffect(() => {
        fetchHoteles();
    }, []);

    return (
        <section>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className="card-container">
                {hotelData.map((hotel) => (
                    <CardHotel
                        key={hotel.id}
                        nombre={hotel.nombre}
                        direccion={hotel.direccion}
                        telefono={hotel.telefono}
                        estrellas={hotel.estrellas}
                        img={hotel.img}
                    />
                ))}
            </div>
        </section>
    );
};