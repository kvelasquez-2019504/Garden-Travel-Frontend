import { useState } from "react";
import { useEffect } from 'react';
import { Input } from "./Input";
import { useAddHotel } from "../shared/hooks/useAddHotel";
import { useGetTipoHab } from "../shared/hooks/useGetTipoHab";

const roomOptions = [
    'Single Room',
    'Double Room',
    'Suite',
    'Family Room',
    'Deluxe Room'
];

export const AddHotel = ({ onAddHotel }) => {
    const { loading, addHotel } = useAddHotel();
    const { tipoHabitacionData, fetchTipoHabitaciones } = useGetTipoHab();

    useEffect(() => {
        fetchTipoHabitaciones();
    }, []);

    const [formState, setFormState] = useState({
        nombre: { value: '', isValid: false, showError: false },
        direccion: { value: '', isValid: false, showError: false },
        telefono: { value: '', isValid: false, showError: false },
        estrellas: { value: '', isValid: false, showError: false },
        habitaciones: { value: '', isValid: false, showError: false },
        cantidad: { value: '', isValid: false, showError: false },
        habOcupadas: { value: '', isValid: false, showError: false },
        img: { value: '', isValid: false, showError: false },
    });

    const handleInputValueChange = (value, field) => {
        setFormState(prevState => ({
            ...prevState,
            [field]: { ...prevState[field], value },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = value.length > 0;
        setFormState(prevState => ({
            ...prevState,
            [field]: { ...prevState[field], isValid, showError: !isValid },
        }));
    };

    const handleHabitacionesChange = (value) => {
        const selectedOption = tipoHabitacionData.find(option => option.nombre === value);
        if (selectedOption) {
            handleInputValueChange('habitaciones', selectedOption._id);
        } else {
            handleInputValueChange('habitaciones', value);
        }
    };

    const handleSubmit = async (e) => {
        let habitaciones = [ { tipoHabitacion: formState.habitaciones.value, cantidad: formState.cantidad.value }]
        e.preventDefault();
        const newHotel = await addHotel(
            formState.nombre.value,
            formState.direccion.value,
            formState.telefono.value,
            formState.estrellas.value,
            habitaciones,
            formState.habOcupadas.value,
            formState.img.value
        );
        onAddHotel(newHotel);
        setFormState({
            nombre: { value: '', isValid: false, showError: false },
            direccion: { value: '', isValid: false, showError: false },
            telefono: { value: '', isValid: false, showError: false },
            estrellas: { value: '', isValid: false, showError: false },
            habitaciones: { value: '', isValid: false, showError: false },
            cantidad: { value: '', isValid: false, showError: false },
            habOcupadas: { value: '', isValid: false, showError: false },
            img: { value: '', isValid: false, showError: false },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="form-add-hotel">
            <button onClick={() => window.close()} className="close-btn">X</button>
            <h1>Add Hotel</h1>
            <Input
                field="nombre"
                label="Nombre"
                value={formState.nombre.value}
                onChangeHandler={handleInputValueChange}
                type="text"
                onBlurHandler={handleInputValidationOnBlur}
                className="input-nombre"
            />
            <Input
                field="direccion"
                label="Dirección"
                value={formState.direccion.value}
                onChangeHandler={handleInputValueChange}
                type="text"
                onBlurHandler={handleInputValidationOnBlur}
                className="input-direccion"
            />
            <div className="container-groups">
                <Input
                    field="telefono"
                    label="Teléfono"
                    value={formState.telefono.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                />
                <Input
                    field="estrellas"
                    label="Estrellas"
                    value={formState.estrellas.value}
                    onChangeHandler={handleInputValueChange}
                    type="number"
                    onBlurHandler={handleInputValidationOnBlur}
                />
            </div>
            <div className="container-groups">
                <Input
                    field="habitaciones"
                    label="Habitaciones"
                    value={formState.habitaciones.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    datalistId="tipoHabitacionData"
                />
                <Input
                    field="cantidad"
                    label="Cantidad"
                    value={formState.cantidad.value}
                    onChangeHandler={handleInputValueChange}
                    type="number"
                    onBlurHandler={handleInputValidationOnBlur}
                />
                <Input
                    field="habOcupadas"
                    label="Habitaciones Ocupadas"
                    value={formState.habOcupadas.value}
                    onChangeHandler={handleInputValueChange}
                    type="number"
                    onBlurHandler={handleInputValidationOnBlur}
                />
            </div>
            <datalist id="tipoHabitacionData">
                {tipoHabitacionData.map((option, index) => (
                    <option key={index} value={option._id} />  
                ))}
            </datalist>
            <Input
                field="img"
                label="Imagen"
                value={formState.img.value}
                onChangeHandler={handleInputValueChange}
                type="text"
                onBlurHandler={handleInputValidationOnBlur}
            />
            <button type="submit" disabled={loading} className="btn-add-hotel">
                Add Hotel
            </button>
        </form>
    );
};