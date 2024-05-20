import "./servicesPage.css"
import "./pServicio.css"
import { Services } from "../../components/Services"
import { PaqueteServicios } from "../../components/Pservicio"

export const ServicesPage = () => {
    return (
        <div>
            <Services />
            <h1>Paquete servicio</h1>
            <PaqueteServicios />
        </div>
    )
}