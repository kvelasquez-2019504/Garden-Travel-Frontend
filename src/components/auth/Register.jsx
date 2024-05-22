import { useState } from "react";
import { Input } from "../Input";
import { useRegister } from "../../shared/hooks";
import { Logo } from "../Logo";

export const Register = ({ switchAuthHandler }) => {
    const { addUser } = useRegister();

    const [formState, setFormState] = useState({
        nombre: {
            value: "",
            isValid: false,
            showError: false,
        },
        apellido: {
            value: "",
            isValid: false,
            showError: false,
        },
        email: {
            value: "",
            isValid: false,
            showError: false,
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "nombre":
                isValid = value.length > 0;
                break;
            case "apellido":
                isValid = value.length > 0;
                break;
            case "email":
                isValid = value.length > 0;
                break;
            case "password":
                isValid = value.length > 0;
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

    const handleRegister = (event) => {
        event.preventDefault();
        addUser(
            formState.nombre.value,
            formState.apellido.value,
            formState.email.value,
            formState.password.value
        );
    };

    const isSubmitButtonDisabled =
        !formState.nombre.isValid ||
        !formState.apellido.isValid ||
        !formState.email.isValid ||
        !formState.password.isValid;

    return (
        <section className="container-login">
            <form onSubmit={handleRegister} className="card" id="cardRegister">
                <h1 className="Title">Register</h1>
                <div className="divInput">
                    <Input
                        field="nombre"
                        label="Enter your name"
                        value={formState.nombre.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"

                        onBlurHandler={handleInputValidationOnBlur}
                    />
                    <Input
                        field="apellido"
                        label="Enter your last name"
                        value={formState.apellido.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"

                        onBlurHandler={handleInputValidationOnBlur}
                    />
                    <Input
                        field="email"
                        label="Enter an email address"
                        value={formState.email.value}
                        onChangeHandler={handleInputValueChange}
                        type="text"

                        onBlurHandler={handleInputValidationOnBlur}
                    />
                    <Input
                        field="password"
                        label="Enter a password"
                        value={formState.password.value}
                        onChangeHandler={handleInputValueChange}
                        type="password"

                        onBlurHandler={handleInputValidationOnBlur}
                    />
                    
                    <button type="submit" disabled={isSubmitButtonDisabled}  className="button-login" id="btn-Register">
                        Register
                    </button>
                    <span onClick={switchAuthHandler} className="switch-Register">
                        <p>
                            Do you have an account?
                        </p>
                        <p className="signIn">
                            Sign In here
                        </p>
                    </span>

                </div>
            </form>
            <div>
                <Logo />
            </div>
        </section>
    );
};