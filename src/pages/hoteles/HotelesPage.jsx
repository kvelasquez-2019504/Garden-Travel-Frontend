import React, { useState } from "react";
import Modal from 'react-modal';
import { Hoteles } from "../../components/Hoteles";
import { AddHotel } from "../../components/AddHotel";
import "./hotelesPage.css";

Modal.setAppElement('#root');

export const HotelesPage = () => {

    return (
        <>
            <div style={{ width: "100%", height: "100px" }}></div>
            <Hoteles />
        </>
    );
};
