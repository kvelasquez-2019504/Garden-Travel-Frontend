export const CardHotel = ({
    nombre,
    direccion,
    telefono,
    estrellas,
    img,
}) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{direccion}</p>
                <p className="card-text">{telefono}</p>
                <p className="card-text">Estrellas: {estrellas}</p>
            </div>
        </div>
    );
};