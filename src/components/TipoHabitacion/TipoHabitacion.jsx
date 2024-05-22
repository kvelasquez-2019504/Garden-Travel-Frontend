import { useTipoHabitacion } from "../../shared/hooks/";
import { useEffect, useState } from "react";
import {
  validateName,
  validateNameMessage,
  validarPrecio,
  validarPrecioMensaje
} from "../../shared/validators/";
import { InputTipoHabitacion } from "./InputTipoHabitacion";
import './tipoHabitacion.css'
import { LoadingSpinner } from "../Spinner/LoadingSpinner";
import { SelectPackageService } from "../Combobox/SelectPackageService";
import { usePaqueteServicio } from "../../shared/hooks";
import { ListarTipoHabitacion } from "./ListarTipoHabitacion";
import { useParams } from "react-router-dom";

export const TipoHabitacion = () => {
  const { id, nombre, idPack, pack, pr } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { listartPaqueteServicio, paqueteServicio, charge } = usePaqueteServicio();
  const { agregarTipoHabitacion,editarTipoHabitacion ,tipoHabitacion } = useTipoHabitacion();
  const [tipoHabitacionAdded, setTipoHabitacionAdded] = useState(false);
  console.log(id, nombre, idPack, pack, pr);
  useEffect(() => {
    const cargarPaqueteServicio = () => {
      listartPaqueteServicio();
      if (tipoHabitacionAdded) {
        setTipoHabitacionAdded(false);
      }
    };
    cargarPaqueteServicio();
  }, [tipoHabitacionAdded]);

  const [formState, setFormState] = useState({
    name: {
      value: nombre || "",
      isValid:nombre? true:false,
      showError: false,
    }, price: {
      value: pr || "",
      isValid: pr?true:false,
      showError: false,
    }
  });

  //manejar el estado del formulario
  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      }
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "name":
        isValid = validateName(value);
        break;
      case "price":
        isValid = validarPrecio(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };


  const handleClickSave = (event) => {
    event.preventDefault();
    if (
      document.getElementsByClassName('combobox-input')[0].id !== 'Select'
    ) {
      if (id || nombre || idPack || pack || pr) {
        editarTipoHabitacion(id, formState.name.value, document.getElementsByClassName('combobox-input')[0].id, formState.price.value);
        setTipoHabitacionAdded(true);
      } else {
        agregarTipoHabitacion(formState.name.value, document.getElementsByClassName('combobox-input')[0].id, formState.price.value);
        setTipoHabitacionAdded(true);
      }
    } else {
      setIsLoading(true);
    }
  }

  //si la data esta cargando el boton este habilitado
  const isSubmitButtonDisabled = isLoading || !formState.name.isValid || !formState.price.isValid;

  return (
    <div>
      <div className="grid-content">
        <div className="grid-body">
          <div className="grid-img">
            <img src="/src/img/Habitacion.jpg" alt="Habitacion" />
          </div>
          <div className="grid-form">
            <h1>ADD ROOM TYPE</h1>
            <InputTipoHabitacion
              field="name"
              placeholder="Name of room type"
              label="Name of room type"
              value={formState.name.value}
              onChangeHandler={handleInputValueChange}
              type="text"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.name.showError}
              validationMessage={validateNameMessage}
            />
            {paqueteServicio && charge ? (
              <SelectPackageService lista={paqueteServicio.paqueteServicio} label={'Select the package service'} namePack={pack}/>
            ) : (
              ''
            )
            }
            <InputTipoHabitacion
              field="price"
              placeholder="Price of room type"
              label="Price of room type"
              value={formState.price.value}
              onChangeHandler={handleInputValueChange}
              type="Number"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.price.showError}
              validationMessage={validarPrecioMensaje}
            />
            <button
              onClick={handleClickSave}
              disabled={isSubmitButtonDisabled}
              className="btn-save"
            >
              { id?('EDIT'):( isLoading ? "Cargando..." : "SAVE")}
            </button>
          </div>
        </div>
        <div className="grid-footer">
          {!tipoHabitacionAdded ? (<ListarTipoHabitacion />) : ('car')
          }

        </div>
      </div>
    </div>
  );
}
