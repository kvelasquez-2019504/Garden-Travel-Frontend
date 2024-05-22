import { useState } from "react";
import "./selectPackageService.css";
import '../TipoHabitacion/tipoHabitacion.css'

export const SelectPackageService = ({ lista, label, namePack }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("");
    const [id, setId] = useState("");
    const [mensajeError, setMensajeError] = useState("")

    const handleClickSelect = (event) => {
        event.preventDefault();
        setId(event.target.id);
        if (event.target.id === 'Select') {
            setMensajeError("Select the package service");
        }else{
            setMensajeError(!mensajeError);
        }
        setValue(document.getElementById(event.target.id).textContent);
    }

    const handleClickOptions = () => {
        setIsLoading(!isLoading);
    }

    return (
        < div >
            <label>{label}</label>
            <div className="combobox" onClick={handleClickOptions}>
                <div className="combobox-input" id={id}>
                    {namePack?(namePack):(value ? (value) : ('Select'))}
                </div>
                {isLoading ? (
                    <div className="combobox-options">
                        {Array.isArray(lista) ? (<div className="combobox-list">
                            <button className="combobox-item" onClick={handleClickSelect} id={'Select'}>
                                Not select
                            </button>
                            {lista.map((p) => (
                                <button className="combobox-item" key={p._id} onClick={handleClickSelect} id={p._id}>
                                    {p.nombrePservicio}
                                </button>
                            ))}
                        </div>) : ('No es un arreglo')
                        }
                    </div>
                ) : ('')
                }
            </div>
            {mensajeError ? (<div className="error-message">{mensajeError}</div>) : ('')}
        </ div>
    )
}
