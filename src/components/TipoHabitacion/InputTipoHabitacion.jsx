import './tipoHabitacion.css';
export const InputTipoHabitacion = ({
    field,
    placeholder,
    label,
    value,
    onChangeHandler,
    type,
    onBlurHandler,
    showErrorMessage,
    validationMessage
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field);
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return (
        <div>
            <div className="input-container">
                <div className="input-content">
                    <label htmlFor={field}>{label}</label>
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                        className="input-field"
                    />
                    {showErrorMessage && <div className="error-message">{validationMessage}</div>}
                </div>
            </div>
        </div>
    )
}