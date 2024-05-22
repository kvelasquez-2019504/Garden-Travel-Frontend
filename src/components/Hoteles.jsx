import { useEffect, useState } from "react";
import { useGetHoteles } from "../shared/hooks";
import { CardHotel } from "./CardHotel";
import { AddHotel } from "./AddHotel";
import Modal from 'react-modal';

export const Hoteles = () => {
    const { hotelData, fetchHoteles } = useGetHoteles();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        fetchHoteles();
    }, []);

    const addHotel = async () => {
        await fetchHoteles();
        setModalIsOpen(false);
    };
    return (
        <section className="hotel-section">
            <div className="card-container">
                {hotelData.map((hotel) => (
                    <CardHotel
                        id={hotel._id}
                        nombre={hotel.nombre}
                        direccion={hotel.direccion}
                        telefono={hotel.telefono}
                        estrellas={hotel.estrellas}
                        img={hotel.img}
                    />
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                className={"modal"}
            >
                <AddHotel onAddHotel={addHotel} />
            </Modal>
            <button className="add-hotel" onClick={() => setModalIsOpen(true)}>Add Hotel</button>

        </section>
    );
};
