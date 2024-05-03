export const validateUsername = (username) => {
    const regex = /^\S{3,15}$/

    return regex.test(username)
}

export const validateUsernameMessage = 'Username must be between 3 and 15 characters long.'