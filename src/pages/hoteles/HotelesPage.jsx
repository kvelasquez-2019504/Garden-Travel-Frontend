import React, { useState } from "react";
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import {Navbar} from "../../components/Navbar";
import Modal from 'react-modal';
import { Hoteles } from "../../components/Hoteles";
import {Home} from "../../components/home/Home";
import {Facturas} from "../../components/factura/Facturas";
import { AddHotel } from "../../components/AddHotel";
import "./hotelesPage.css";

Modal.setAppElement('#root');

export const HotelesPage = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/facturas" element={<Facturas/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/hoteles" element={<Hoteles />} />
            </Routes>
        </>
    );
};
