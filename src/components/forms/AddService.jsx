import React, { useState } from "react";
import { InputServices } from "./../InputServices";
import { validateService, validateServicesMessage, validatePrecio, validatePrecioMessage } from "./../../shared/validators";
import { useAddService } from "../../shared/hooks/useAddService";
import serviciopng from "../../assets/img/servicio.png";

const inputs = [
    {
        field: 'nombre',
        label: 'Nombre',
        validationMessage: validateServicesMessage,
        type: 'text'
    }, {
        field: 'precio',
        label: 'Precio',
        validationMessage: validatePrecioMessage,
        type: 'number'
    }
];

export const AddService = ({ }) => {
    const { addService, isLoading: isAdding } = useAddService();
    const [formState, setFormState] = useState({
        nombre: {
            value: '',
            isValid: false,
            showError: false
        },
        precio: {
            value: '',
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'nombre':
                isValid = validateService(value);
                break;
            case 'precio':
                isValid = validatePrecio(value);
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));
    };

    const handleAddService = (event) => {
        event.preventDefault();
        addService(formState.nombre.value, formState.precio.value);
        resetForm();
    };

    const handleCancel = (event) => {
        event.preventDefault();
        resetForm();
    };

    const resetForm = () => {
        setFormState({
            nombre: { value: '', isValid: false, showError: false },
            precio: { value: '', isValid: false, showError: false }
        });
    };

    


    const isSubmitButtonDisable = isAdding || !formState.nombre.isValid || !formState.precio.isValid;

    return (
        <div>
            <div className="container-input">
                <div className="image-container">
                    <img src={serviciopng} alt="Imagen" className="input-image" />
                </div>
                <div className="inputs-container">
                    <div className="input-item">
                        <InputServices
                            field={'nombre'}
                            placeholder={'Nombre'}
                            label={'Nombre'}
                            value={formState.nombre.value}
                            onChangeHandler={handleInputValueChange}
                            type={'text'}
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.nombre.showError}
                            validationMessage={'Mensaje de validación para contenido'}
                        />
                    </div>
                    <div className="input-item">
                        <InputServices
                            field={'precio'}
                            placeholder={'Precio'}
                            label={'Precio'}
                            value={formState.precio.value}
                            onChangeHandler={handleInputValueChange}
                            type={'number'}
                            onBlurHandler={handleInputValidationOnBlur}
                            showErrorMessage={formState.precio.showError}
                            validationMessage={'Mensaje de validación para contenido'}
                        />
                    </div>
                    <div className="control">
                        <button className="button-acept-service" onClick={handleAddService} disabled={isSubmitButtonDisable}>AGREGAR</button>
                        <button className="button-acept-service" onClick={handleCancel}>CANCELAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
