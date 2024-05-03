export const validateConfirPassword = (pass, confPass) => {
    return pass === confPass;
}

export const passwordConfirmationMessage = "Passwords do not match";