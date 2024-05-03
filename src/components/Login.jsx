import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
    validateEmail,
    validatePassword,
    emailValidationMessage,
    validatePasswordMessage,
} from "../shared/validators";
import { useLogin } from '../shared/hooks'

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();

    const [formState, setFormState] = useState({
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
            case "email":
                isValid = validateEmail(value);
                break;
            case "password":
                isValid = validatePassword(value);
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
        }))
    };

    const handleLogin = (event) => {
        event.preventDefault()
        login(formState.email.value, formState.password.value)
    }

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid

    return (
        <div>
            <Logo />
            <form>
                <Input
                    field="email"
                    label="Email"
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                    onBlurHandler={handleInputValidationOnBlur}
                />
                <Input
                    field="password"
                    label="Password"
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type="password"
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
                    onBlurHandler={handleInputValidationOnBlur}
                />
                <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    Login
                </button>
            </form>
            <span onClick={switchAuthHandler}>
                <p>
                    Do you don't have an account?
                </p>
                <p>
                    Sign In here
                </p>
            </span>
        </div>
    )
}