import { useEffect, useState } from "react"
import { LoadingSpinner } from "../Spinner/LoadingSpinner";
import { useTipoHabitacion } from "../../shared/hooks";
import './listarTipoHabitacion.css';
import { Link, useNavigate } from "react-router-dom";

export const ListarTipoHabitacion = () => {
  const { listarTipoHabitacion, eliminarTipoHabitacion, tipoHabitacion, isLoading } = useTipoHabitacion();
  const [lista, setLista] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const cargarHabitaciones = () => {
      listarTipoHabitacion();
      setLista(true);
    };
    cargarHabitaciones();
  }, [lista]); // Dependencias vacías para que se ejecute solo una vez al montar el componente

  const handleClickDelete = (event) => {
    event.preventDefault();
    eliminarTipoHabitacion(event.target.id);
    setLista(!lista);
  }

  const handleClickCard = (event) => {
    event.preventDefault();
    let pack= event.target.getAttribute('pack');
    let idPack=event.target.getAttribute('idPack');
    let pr =event.target.getAttribute('pr');
    let id= event.target.id;
    let nombre = event.target.getAttribute('nombre');
    console.log();
    navigate(`/tipoHabitacion/${id}/${nombre}/${idPack}/${pack}/${pr}`);
    window.location.reload();
  }

  return (
    <div>
      <div>
        <h1>Habitaciones</h1>
      </div>
      {lista && tipoHabitacion && Array.isArray(tipoHabitacion.tipoHabitaciones) ? (
        <div className="content-items">
          {tipoHabitacion.tipoHabitaciones.map((habitacion) => (
            <div key={habitacion._id} id={habitacion._id} className="content-card">
              <div className="card-title">
                {habitacion.nombre}
              </div>
              <div className="card-body">
                <p>Price:
                  <span>{habitacion.precio}</span>
                </p>
                <div>Package Services:
                  {habitacion.paqueteServicios.map((pac) => (
                    <p key={pac._id} className="info-services">
                      <span >{pac.nombrePservicio}</span>
                      <Link to=''>Info Services</Link>
                      <br />
                      <button onClick={handleClickCard} id={habitacion._id} className="btn-edit" idPack={pac._id} pack={pac.nombrePservicio} pr={habitacion.precio} nombre={habitacion.nombre}>EDIT</button>
                    </p>
                  ))}
                </div>
                <p>
                  <span className="card-state">
                    {habitacion.estado ? (<span className="state-active">ACTIVE</span>) : (<span className="state-inactive">INACTIVE</span>)}
                  </span>
                  <button onClick={handleClickDelete} id={habitacion._id} className="btn-delete">DELETE</button>
                </p>
              </div>
            </div>
          ))
          }
        </div>
      ) : (
        <LoadingSpinner />
      )
      }
    </div >
  )
}