import React, { useState } from "react";
import Modal from 'react-modal';
import { Hoteles } from "../../components/Hoteles";
import { AddHotel } from "../../components/AddHotel";
import "./hotelesPage.css";

Modal.setAppElement('#root');

export const HotelesPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [hoteles, setHoteles] = useState([]);

    const addHotel = (hotel) => {
        setHoteles([...hoteles, hotel]);
        setModalIsOpen(false);
    };

    return (
        <>
            <div style={{ width: "100%", height: "100px" }}></div>
            <Hoteles />
            <button className="add-hotel" onClick={() => setModalIsOpen(true)}>Add Hotel</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    content: {
                        width: '50%',
                        margin: 'auto',
                        height: '50%'
                    }
                }}
            >
                <AddHotel onAddHotel={addHotel} />
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
        </>
    );
};
