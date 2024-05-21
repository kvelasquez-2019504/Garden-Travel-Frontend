
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import {Navbar} from '../../components/Navbar'
import { Home } from '../../components/Home'
import './dashboardPage.css'

export const DashboardPage = () => { 
    return(
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<><Home/></>} />
                <Route path="hotels" element={<h1>Hotels</h1>} />
                <Route path="reservations" element={<h1>Reservations</h1>} />
                <Route path="services" element={<h1>Services</h1>} />
            </Routes>
        </>
    )
}