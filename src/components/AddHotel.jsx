import { useState } from "react";
import { Input } from "./Input";
import { useAddHotel } from "../shared/hooks/useAddHotel";

export const AddHotel = ({ onAddHotel }) => {
    const { loading, addHotel } = useAddHotel();

    const [formState, setFormState] = useState({
        nombre: { value: '', isValid: false, showError: false },
        direccion: { value: '', isValid: false, showError: false },
        telefono: { value: '', isValid: false, showError: false },
        estrellas: { value: '', isValid: false, showError: false },
        habitaciones: { value: '', isValid: false, showError: false },
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newHotel = await addHotel(
            formState.nombre.value,
            formState.direccion.value,
            formState.telefono.value,
            formState.estrellas.value,
            formState.habitaciones.value,
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
