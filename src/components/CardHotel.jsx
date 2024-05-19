import starts from '../assets/img/icons8-estrella-24.png';
import phone from '../assets/img/icons8-phone-48.png';
export const CardHotel = ({
    nombre,
    direccion,
    telefono,
    estrellas,
    img,
}) => {

    const renderStars = (numStars) => {
        const fullStars = Array(numStars).fill(<img src={starts}></img>);
        const emptyStars = Array(5 - numStars).fill(<img src={starts}></img>);
        return [...fullStars, ...emptyStars];
    };
    return (
        <div className="card-hoteles">
            <img src={img} className="card-img-top" alt={nombre} />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text-starts">
                    {[...Array(estrellas)].map((e, i) => <span key={i}>
                        <img src={starts} alt="estrella" />
                    </span>)}
                </p>
                <div className='card-text-direction-container'>
                    <p className="card-text-direction">{direccion}</p>
                </div>
                <div className='card-phone'>
                    <p className="card-text-phone">Phone: {telefono}</p>
                    <img src={phone} className='phone' />
                </div>
            </div>
        </div>
    );
};