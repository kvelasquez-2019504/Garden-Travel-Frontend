export const CardServices = ({
    nombre,
    precio
}) => {

    return (
        <div className="card-servicio">
            <div className="card-details-servicio">
                <p className="text-title-servicio">{nombre}</p>
                <p className="text-details-servicio">{precio}</p>
            </div>
        </div>
    )
}
